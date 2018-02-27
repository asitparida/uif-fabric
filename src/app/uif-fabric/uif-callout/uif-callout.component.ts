import {
	Component, Input, ElementRef, AfterContentInit, ViewChild, QueryList, SimpleChange,
	OnChanges, Output, EventEmitter, SimpleChanges, ContentChild, OnDestroy, DoCheck, ChangeDetectorRef
} from '@angular/core';
import { UifCalloutDirectionalHint, UifCalloutTriggerHint } from './uif-callout.models';
import { GetScrollParent } from '../helpers';
import { } from '@angular/core/src/metadata/di';
import { UifOpenCalloutComponent } from './uif-callout-subcomponents.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'uif-callout',
	templateUrl: './uif-callout.component.html',
	styleUrls: [
		'./uif-callout.component.scss'
	]
})
export class UifCalloutComponent implements AfterContentInit, OnChanges, OnDestroy {
	openCalloutComponent = UifOpenCalloutComponent;
	@Input() isOpen = false;
	@Output() isOpenChange: EventEmitter<boolean | Boolean> = new EventEmitter<boolean | Boolean>();
	nativeEl;
	nativeCallout;
	nativeCalloutTrigger;
	nativeCalloutContainer;
	nativeBeak;
	calloutTriggerHandler;
	elementIntialized = false;
	@Input() isTooltip = false;
	@Input() appendToBody = false;
	@Input() showHeader = true;
	@Input() showActions = true;
	@Input() headerClasses = '';
	@Input() contentClasses = '';
	@Input() calloutClasses = '';
	@Input() position = 'left';
	@Input() gap = 10;
	@Input() showArrow: Boolean = true;
	@Input() showClose: Boolean = false;
	@Input() directionalHint: UifCalloutDirectionalHint = UifCalloutDirectionalHint.TopCenter;
	@Input() triggerHint: UifCalloutTriggerHint = UifCalloutTriggerHint.ClickInClickOut;
	@Input() onTextEllipsis = false;
	@Input() maxWidth;
	@ViewChild('msCalloutMain') msCalloutMain: any;
	@ViewChild('msCalloutHost') msCalloutHost: any;
	@ViewChild('msCalloutContainer') msCalloutContainer: any;
	@ContentChild(UifOpenCalloutComponent) msOpenCalloutTrigger: UifOpenCalloutComponent;
	scrollElm;
	UifCalloutTriggerHints = UifCalloutTriggerHint;
	listeners: any = {};
	listenersPopulated = false;
	disableClicks = false;
	tabIndex = null;
	private childInDOM;
	private onDocumnetKeyUpListener: Subscription = null;
	constructor(
		private elementRef: ElementRef) { }
	ngAfterContentInit() {
		this.nativeEl = this.elementRef.nativeElement as HTMLElement;
		if (this.nativeEl) {
			this.nativeCalloutContainer = (this.nativeEl as HTMLElement).querySelector('.ms-ContextualHost') as HTMLElement;
			this.nativeCallout = (this.nativeEl as HTMLElement).querySelector('.ms-ContextualHost-main') as HTMLElement;
			this.nativeBeak = (this.nativeEl as HTMLElement).querySelector('.ms-Beak') as HTMLElement;
			this.calloutTriggerHandler = (this.nativeEl as HTMLElement).querySelector('uif-open-callout, [uifOpenCallout]') as HTMLElement;
		}
		if (this.msOpenCalloutTrigger.elementRef) {
			this.nativeCalloutTrigger = (this.msOpenCalloutTrigger.elementRef.nativeElement as HTMLElement);
		}
		this.elementIntialized = true;
		this.addListeners();
		if (this.isOpen) {
			this.openCallout();
		} else {
			this.closeCallout();
		}
	}
	ngOnChanges(changes: SimpleChanges) {
		this.showArrow = JSON.parse(this.showArrow.toString());
		this.showClose = JSON.parse(this.showClose.toString());
		this.gap = parseInt(this.gap.toString(), 10);
		switch (+this.triggerHint) {
			case 2: this.triggerHint = UifCalloutTriggerHint.FocusInBlurOut; this.disableClicks = true; this.tabIndex = 0; break;
			case 3: this.triggerHint = UifCalloutTriggerHint.HoverInBlurOut; this.disableClicks = true; this.tabIndex = null; break;
			default: this.triggerHint = UifCalloutTriggerHint.ClickInClickOut; this.disableClicks = false; this.tabIndex = 0; break;
		}
		let isOpenPropChanged = false;
		let change: SimpleChange;
		for (const prop in changes) {
			if (changes[prop]) {
				change = changes[prop] as SimpleChange;
				isOpenPropChanged = prop === 'isOpen';
				if (prop === 'triggerHint' && this.elementIntialized) {
					this.addListeners();
				}
				if (prop === 'isOpen') {
					if (change.currentValue) {
						this.addDocumentListener();
					} else {
						this.clearDocumentListener();
					}
				}
			}
		}
		setTimeout(() => {
			if (isOpenPropChanged && !change.firstChange) {
				if (change.currentValue) {
					this.openCallout();
				} else {
					this.closeCallout();
				}
			}
			if (isOpenPropChanged && !this.isOpen && this.appendToBody) {
				if (this.childInDOM) {
					document.body.removeChild(this.childInDOM);
					this.childInDOM = null;
				}
			}
		});
	}
	ngOnDestroy() {
		const openHandler = this.listeners['openHandler'];
		const closeHandler = this.listeners['closeHandler'];
		const toggleHandler = this.listeners['toggleHandler'];
		if (this.calloutTriggerHandler) {
			(this.calloutTriggerHandler as HTMLElement).removeEventListener('click', toggleHandler);
			(this.calloutTriggerHandler as HTMLElement).removeEventListener('focus', openHandler);
			(this.calloutTriggerHandler as HTMLElement).removeEventListener('blur', closeHandler);
			(this.calloutTriggerHandler as HTMLElement).removeEventListener('mouseover', openHandler);
			(this.calloutTriggerHandler as HTMLElement).removeEventListener('mouseout', closeHandler);
		}
		const scrollAndResizeHandler = this.listeners['onScrollAndResize'];
		if (this.scrollElm) {
			this.scrollElm.removeEventListener('scroll', scrollAndResizeHandler);
			this.scrollElm.removeEventListener('resize', scrollAndResizeHandler);
		}
		document.removeEventListener('scroll', scrollAndResizeHandler);
		window.removeEventListener('resize', scrollAndResizeHandler);
	}
	clearDocumentListener() {
		if (this.onDocumnetKeyUpListener) {
			this.onDocumnetKeyUpListener.unsubscribe();
			this.onDocumnetKeyUpListener = null;
		}
	}
	addDocumentListener() {
		this.clearDocumentListener();
		this.onDocumnetKeyUpListener = Observable.fromEvent(document, 'keyup')
			.subscribe(($event: KeyboardEvent) => {
				if ($event.key === 'Escape') {
					this.isOpen = false;
					this.isOpenChange.emit(this.isOpen);
				}
			});
	}
	addListeners() {
		const self = this;
		if (!this.listenersPopulated) {
			this.listeners['openHandler'] = function () {
				self.open();
			};
			this.listeners['closeHandler'] = function () {
				self.close();
			};
			this.listeners['toggleHandler'] = function () {
				self.toggleCallout();
			};
			this.listeners['onScrollAndResize'] = function () {
				if (self.isOpen) {
					self.close();
				}
			};
			this.listenersPopulated = true;
		}
		const openHandler = this.listeners['openHandler'];
		const closeHandler = this.listeners['closeHandler'];
		const toggleHandler = this.listeners['toggleHandler'];
		setTimeout(() => {
			switch (this.triggerHint) {
				case UifCalloutTriggerHint.FocusInBlurOut:
					{
						(this.calloutTriggerHandler as HTMLElement).removeEventListener('click', toggleHandler);
						(this.calloutTriggerHandler as HTMLElement).removeEventListener('focus', openHandler);
						(this.calloutTriggerHandler as HTMLElement).removeEventListener('blur', closeHandler);
						(this.calloutTriggerHandler as HTMLElement).removeEventListener('mouseover', openHandler);
						(this.calloutTriggerHandler as HTMLElement).removeEventListener('mouseout', closeHandler);
						(this.calloutTriggerHandler as HTMLElement).addEventListener('focus', openHandler);
						(this.calloutTriggerHandler as HTMLElement).addEventListener('blur', closeHandler);
						break;
					}
				case UifCalloutTriggerHint.HoverInBlurOut:
					{
						(this.calloutTriggerHandler as HTMLElement).removeEventListener('click', toggleHandler);
						(this.calloutTriggerHandler as HTMLElement).removeEventListener('focus', openHandler);
						(this.calloutTriggerHandler as HTMLElement).removeEventListener('blur', closeHandler);
						(this.calloutTriggerHandler as HTMLElement).removeEventListener('mouseover', openHandler);
						(this.calloutTriggerHandler as HTMLElement).removeEventListener('mouseout', closeHandler);
						(this.calloutTriggerHandler as HTMLElement).addEventListener('mouseover', openHandler);
						(this.calloutTriggerHandler as HTMLElement).addEventListener('mouseout', closeHandler);
						break;
					}
				default:
					{
						(this.calloutTriggerHandler as HTMLElement).removeEventListener('click', toggleHandler);
						(this.calloutTriggerHandler as HTMLElement).removeEventListener('focus', openHandler);
						(this.calloutTriggerHandler as HTMLElement).removeEventListener('blur', closeHandler);
						(this.calloutTriggerHandler as HTMLElement).removeEventListener('mouseover', openHandler);
						(this.calloutTriggerHandler as HTMLElement).removeEventListener('mouseout', closeHandler);
						(this.calloutTriggerHandler as HTMLElement).addEventListener('click', toggleHandler);
						break;
					}
			}
		});
	}
	initCallout() {
		if (this.nativeCalloutContainer) {
			(this.nativeCalloutContainer as HTMLElement).style.left = null;
			(this.nativeCalloutContainer as HTMLElement).style.bottom = null;
			(this.nativeCalloutContainer as HTMLElement).style.top = null;
			(this.nativeCalloutContainer as HTMLElement).style.right = null;
			(this.nativeCalloutContainer as HTMLElement).style.marginRight = null;
			(this.nativeCalloutContainer as HTMLElement).style.marginLeft = null;
			(this.nativeCalloutContainer as HTMLElement).style.marginTop = null;
			(this.nativeCalloutContainer as HTMLElement).style.marginBottom = null;
			(this.nativeCalloutContainer as HTMLElement).style.opacity = null;
		}
		if (this.nativeBeak) {
			(this.nativeBeak as HTMLElement).style.opacity = null;
			if (this.showArrow) {
				(this.nativeBeak as HTMLElement).style.left = null;
				(this.nativeBeak as HTMLElement).style.bottom = null;
				(this.nativeBeak as HTMLElement).style.top = null;
				(this.nativeBeak as HTMLElement).style.right = null;
				(this.nativeBeak as HTMLElement).style.marginRight = null;
				(this.nativeBeak as HTMLElement).style.marginLeft = null;
				(this.nativeBeak as HTMLElement).style.marginTop = null;
				(this.nativeBeak as HTMLElement).style.marginBottom = null;
			}
		}
		if (this.msCalloutMain) {
			(this.msCalloutMain.nativeElement as HTMLElement).style.maxWidth = null;
		}
	}
	open() {
		if (this.onTextEllipsis) {
			const parent = (this.nativeEl as HTMLElement).parentElement;
			if (parent) {
				const parentProps: ClientRect = parent.getBoundingClientRect();
				const calloutTriggerProps: ClientRect = (this.nativeCalloutTrigger as HTMLElement).getBoundingClientRect();
				if (parentProps.width >= calloutTriggerProps.width) {
					return;
				}
			}
		}
		if (!this.isOpen) {
			this.isOpen = true;
			this.isOpenChange.emit(this.isOpen);
		}
	}
	openCallout() {
		if (this.appendToBody) {
			this.childInDOM = this.msCalloutHost.nativeElement;
			document.body.appendChild(this.childInDOM);
		} else {
			this.childInDOM = this.msCalloutHost.nativeElement;
			this.msCalloutContainer.nativeElement.appendChild(this.childInDOM);
		}
		(this.nativeCalloutContainer as HTMLElement).classList.add('is-open');
		setTimeout(() => {
			this.initCallout();
			if (this.maxWidth) {
				(this.msCalloutMain.nativeElement as HTMLElement).style.maxWidth = this.maxWidth;
			}
			const calloutProps = (this.nativeCallout as HTMLElement).getBoundingClientRect();
			let calloutTriggerProps;
			if (this.onTextEllipsis) {
				calloutTriggerProps = (this.nativeEl as HTMLElement).parentElement.getBoundingClientRect();
			} else {
				calloutTriggerProps = (this.nativeCalloutTrigger as HTMLElement).getBoundingClientRect();
			}
			const calloutBeakProps = (this.nativeBeak as HTMLElement).getBoundingClientRect();
			switch (parseInt(this.directionalHint.toString(), 10)) {
				case UifCalloutDirectionalHint.TopLeftEdge:
					{
						const beakAdjustForCallout = 14;
						const beakPositionAdjust = 9;
						const beakAdjust = this.showArrow ? this.gap + beakAdjustForCallout : this.gap;
						const beakLeftAdjust = 30;
						const appendToBodyAdjustLeft = this.appendToBody ? calloutTriggerProps.left : 0;
						const appendToBodyAdjustBottom = this.appendToBody ? calloutTriggerProps.top - calloutTriggerProps.height : 0;
						(this.nativeCalloutContainer as HTMLElement).style.left = appendToBodyAdjustLeft + 0 + 'px';
						(this.nativeCalloutContainer as HTMLElement).style.bottom =
							appendToBodyAdjustBottom + (calloutTriggerProps.height + beakAdjust) + 'px';
						(this.nativeBeak as HTMLElement).style.left = beakLeftAdjust + 'px';
						(this.nativeBeak as HTMLElement).style.bottom = '0';
						(this.nativeBeak as HTMLElement).style.marginBottom = -beakPositionAdjust + 'px';
						break;
					}
				case UifCalloutDirectionalHint.TopCenter:
					{
						const leftAdjust = (calloutProps.width - calloutTriggerProps.width) / 2;
						const beakAdjustForCallout = 14;
						const beakPositionAdjust = 9;
						const beakAdjust = this.showArrow ? this.gap + beakAdjustForCallout : this.gap;
						const beakLeftAdjust = (calloutProps.width - calloutBeakProps.width) / 2;
						const appendToBodyAdjustLeft = this.appendToBody ?
							calloutTriggerProps.left - leftAdjust : -leftAdjust;
						const appendToBodyAdjustBottom = this.appendToBody ?
							window.innerHeight - calloutTriggerProps.bottom + calloutTriggerProps.height + beakAdjust
							: (calloutTriggerProps.height + beakAdjust);
						(this.nativeCalloutContainer as HTMLElement).style.left = appendToBodyAdjustLeft + 'px';
						(this.nativeCalloutContainer as HTMLElement).style.bottom =
							appendToBodyAdjustBottom + 'px';
						(this.nativeBeak as HTMLElement).style.left = beakLeftAdjust + 'px';
						(this.nativeBeak as HTMLElement).style.bottom = '0';
						(this.nativeBeak as HTMLElement).style.marginBottom = -beakPositionAdjust + 'px';
						break;
					}
				case UifCalloutDirectionalHint.TopRightEdge:
					{
						const beakAdjustForCallout = 14;
						const beakPositionAdjust = 9;
						const beakAdjust = this.showArrow ? this.gap + beakAdjustForCallout : this.gap;
						const beakLeftAdjust = 30;
						const appendToBodyAdjustRight = this.appendToBody ? window.innerWidth - calloutTriggerProps.right : 0;
						const appendToBodyAdjustBottom = this.appendToBody ? calloutTriggerProps.top - calloutTriggerProps.height : 0;
						(this.nativeCalloutContainer as HTMLElement).style.right = appendToBodyAdjustRight + 0 + 'px';
						(this.nativeCalloutContainer as HTMLElement).style.bottom =
							appendToBodyAdjustBottom + (calloutTriggerProps.height + beakAdjust) + 'px';
						(this.nativeBeak as HTMLElement).style.right = beakLeftAdjust + 'px';
						(this.nativeBeak as HTMLElement).style.bottom = '0';
						(this.nativeBeak as HTMLElement).style.marginBottom = -beakPositionAdjust + 'px';
						break;
					}
				case UifCalloutDirectionalHint.BottomCenter:
					{
						const leftAdjust = (calloutProps.width - calloutTriggerProps.width) / 2;
						const beakAdjustForCallout = 14;
						const beakPositionAdjust = 9;
						const beakAdjust = this.showArrow ? this.gap + beakAdjustForCallout : this.gap;
						const beakLeftAdjust = (calloutProps.width - calloutBeakProps.width) / 2;
						const appendToBodyAdjustLeft = this.appendToBody ? calloutTriggerProps.left : 0;
						const appendToBodyAdjustTop = this.appendToBody ? calloutTriggerProps.top : 0;
						(this.nativeCalloutContainer as HTMLElement).style.left = appendToBodyAdjustLeft + (-leftAdjust) + 'px';
						(this.nativeCalloutContainer as HTMLElement).style.top =
							appendToBodyAdjustTop + (calloutTriggerProps.height + beakAdjust) + 'px';
						(this.nativeBeak as HTMLElement).style.left = beakLeftAdjust + 'px';
						(this.nativeBeak as HTMLElement).style.top = '0';
						(this.nativeBeak as HTMLElement).style.marginTop = -beakPositionAdjust + 'px';
						break;
					}
				case UifCalloutDirectionalHint.BottomLeftEdge:
					{
						const beakAdjustForCallout = 14;
						const beakPositionAdjust = 9;
						const beakAdjust = this.showArrow ? this.gap + beakAdjustForCallout : this.gap;
						const beakLeftAdjust = 30;
						const appendToBodyAdjustLeft = this.appendToBody ? calloutTriggerProps.left : 0;
						const appendToBodyAdjustTop = this.appendToBody ? calloutTriggerProps.top : 0;
						(this.nativeCalloutContainer as HTMLElement).style.left = appendToBodyAdjustLeft + 0 + 'px';
						(this.nativeCalloutContainer as HTMLElement).style.top =
							appendToBodyAdjustTop + (calloutTriggerProps.height + beakAdjust) + 'px';
						(this.nativeBeak as HTMLElement).style.left = beakLeftAdjust + 'px';
						(this.nativeBeak as HTMLElement).style.top = '0';
						(this.nativeBeak as HTMLElement).style.marginTop = -beakPositionAdjust + 'px';
						break;
					}
				case UifCalloutDirectionalHint.BottomRightEdge:
					{
						const beakAdjustForCallout = 14;
						const beakPositionAdjust = 9;
						const beakAdjust = this.showArrow ? this.gap + beakAdjustForCallout : this.gap;
						const beakLeftAdjust = 30;
						const appendToBodyAdjustRight = this.appendToBody ? window.innerWidth - calloutTriggerProps.right : 0;
						const appendToBodyAdjustTop = this.appendToBody ? calloutTriggerProps.top : 0;
						(this.nativeCalloutContainer as HTMLElement).style.right = appendToBodyAdjustRight + 0 + 'px';
						(this.nativeCalloutContainer as HTMLElement).style.top =
							appendToBodyAdjustTop + (calloutTriggerProps.height + beakAdjust) + 'px';
						(this.nativeBeak as HTMLElement).style.right = beakLeftAdjust + 'px';
						(this.nativeBeak as HTMLElement).style.top = '0';
						(this.nativeBeak as HTMLElement).style.marginTop = -beakPositionAdjust + 'px';
						break;
					}
				case UifCalloutDirectionalHint.LeftCenter:
					{
						const beakAdjustForCallout = 14;
						const beakPositionAdjust = 9;
						const beakAdjust = this.showArrow ? this.gap + beakAdjustForCallout : this.gap;
						const beakLeftAdjust = (calloutProps.height - calloutBeakProps.height) / 2;
						const appendToBodyAdjustLeft = this.appendToBody ? calloutTriggerProps.left : 0;
						const appendToBodyAdjustMarginTop = this.appendToBody ? -(calloutProps.height / 2) + (calloutTriggerProps.height / 2) + 'px' : '-50%';
						(this.nativeCalloutContainer as HTMLElement).style.left = appendToBodyAdjustLeft + (-(calloutProps.width + beakAdjust)) + 'px';
						(this.nativeCalloutContainer as HTMLElement).style.marginTop = appendToBodyAdjustMarginTop;
						(this.nativeBeak as HTMLElement).style.right = '0';
						(this.nativeBeak as HTMLElement).style.top = beakLeftAdjust + 'px';
						(this.nativeBeak as HTMLElement).style.marginRight = -beakPositionAdjust + 'px';
						break;
					}
				case UifCalloutDirectionalHint.LeftTopEdge:
					{
						const beakAdjustForCallout = 14;
						const beakPositionAdjust = 9;
						const beakAdjust = this.showArrow ? this.gap + beakAdjustForCallout : this.gap;
						const beakLeftAdjust = 12;
						const appendToBodyAdjustLeft = this.appendToBody ? calloutTriggerProps.left : 0;
						const appendToBodyAdjustTop = this.appendToBody ? calloutTriggerProps.top : 0;
						(this.nativeCalloutContainer as HTMLElement).style.left = appendToBodyAdjustLeft + (-(calloutProps.width + beakAdjust)) + 'px';
						(this.nativeCalloutContainer as HTMLElement).style.top = appendToBodyAdjustTop + 0 + 'px';
						(this.nativeBeak as HTMLElement).style.right = '0';
						(this.nativeBeak as HTMLElement).style.top = beakLeftAdjust + 'px';
						(this.nativeBeak as HTMLElement).style.marginRight = -beakPositionAdjust + 'px';
						break;
					}
				case UifCalloutDirectionalHint.LeftBottomEdge:
					{
						const beakAdjustForCallout = 14;
						const beakPositionAdjust = 9;
						const beakAdjust = this.showArrow ? this.gap + beakAdjustForCallout : this.gap;
						const beakLeftAdjust = 12;
						const appendToBodyAdjustLeft = this.appendToBody ? calloutTriggerProps.left : 0;
						const appendToBodyAdjustTop = this.appendToBody ? calloutTriggerProps.top - calloutTriggerProps.height : 0;
						(this.nativeCalloutContainer as HTMLElement).style.left = appendToBodyAdjustLeft + (-(calloutProps.width + beakAdjust)) + 'px';
						(this.nativeCalloutContainer as HTMLElement).style.bottom = appendToBodyAdjustTop + 'px';
						(this.nativeBeak as HTMLElement).style.right = '0';
						(this.nativeBeak as HTMLElement).style.bottom = beakLeftAdjust + 'px';
						(this.nativeBeak as HTMLElement).style.marginRight = -beakPositionAdjust + 'px';
						break;
					}
				case UifCalloutDirectionalHint.RightCenter:
					{
						const beakAdjustForCallout = 14;
						const beakPositionAdjust = 9;
						const beakAdjust = this.showArrow ? this.gap + beakAdjustForCallout : this.gap;
						const beakLeftAdjust = (calloutProps.height - calloutBeakProps.height) / 2;
						const appendToBodyAdjustRight = this.appendToBody ?
							window.innerWidth - calloutTriggerProps.right - calloutProps.width - beakAdjust : -(calloutProps.width + beakAdjust);
						const appendToBodyAdjustMarginTop = this.appendToBody ? -(calloutProps.height / 2) + (calloutTriggerProps.height / 2) + 'px' : '-50%';
						(this.nativeCalloutContainer as HTMLElement).style.right = appendToBodyAdjustRight + 'px';
						(this.nativeCalloutContainer as HTMLElement).style.marginTop = appendToBodyAdjustMarginTop;
						(this.nativeBeak as HTMLElement).style.left = '0';
						(this.nativeBeak as HTMLElement).style.top = beakLeftAdjust + 'px';
						(this.nativeBeak as HTMLElement).style.marginLeft = -beakPositionAdjust + 'px';
						break;
					}
				case UifCalloutDirectionalHint.RightTopEdge:
					{
						const beakAdjustForCallout = 14;
						const beakPositionAdjust = 9;
						const beakAdjust = this.showArrow ? this.gap + beakAdjustForCallout : this.gap;
						const beakLeftAdjust = 12;
						const appendToBodyAdjustRight = this.appendToBody ?
							window.innerWidth - calloutTriggerProps.right - calloutProps.width - beakAdjust : -(calloutProps.width + beakAdjust);
						const appendToBodyAdjustTop = this.appendToBody ? calloutTriggerProps.top : 0;
						(this.nativeCalloutContainer as HTMLElement).style.right = appendToBodyAdjustRight + 'px';
						(this.nativeCalloutContainer as HTMLElement).style.top = appendToBodyAdjustTop + 'px';
						(this.nativeBeak as HTMLElement).style.left = '0';
						(this.nativeBeak as HTMLElement).style.top = beakLeftAdjust + 'px';
						(this.nativeBeak as HTMLElement).style.marginLeft = -beakPositionAdjust + 'px';
						break;
					}
				case UifCalloutDirectionalHint.RightBottomEdge:
					{
						const beakAdjustForCallout = 14;
						const beakPositionAdjust = 9;
						const beakAdjust = this.showArrow ? this.gap + beakAdjustForCallout : this.gap;
						const beakLeftAdjust = 12;
						const appendToBodyAdjustRight = this.appendToBody ?
							window.innerWidth - calloutTriggerProps.right - calloutProps.width - beakAdjust : -(calloutProps.width + beakAdjust);
						const appendToBodyAdjustTop = this.appendToBody ?
							calloutTriggerProps.top - calloutTriggerProps.height : 0;
						(this.nativeCalloutContainer as HTMLElement).style.right = appendToBodyAdjustRight + 'px';
						(this.nativeCalloutContainer as HTMLElement).style.bottom = appendToBodyAdjustTop + 'px';
						(this.nativeBeak as HTMLElement).style.left = '0';
						(this.nativeBeak as HTMLElement).style.bottom = beakLeftAdjust + 'px';
						(this.nativeBeak as HTMLElement).style.marginLeft = -beakPositionAdjust + 'px';
						break;
					}
			}
			(this.nativeCalloutContainer as HTMLElement).style.opacity = '1';
			if (this.showArrow) {
				(this.nativeBeak as HTMLElement).style.opacity = '1';
			}
		});
		if (this.appendToBody) {
			const scrollAndResizeHandler = this.listeners['onScrollAndResize'];
			this.scrollElm = GetScrollParent(this.elementRef.nativeElement);
			if (this.scrollElm) {
				this.scrollElm.removeEventListener('scroll', scrollAndResizeHandler);
				this.scrollElm.addEventListener('scroll', scrollAndResizeHandler);
				this.scrollElm.removeEventListener('resize', scrollAndResizeHandler);
				this.scrollElm.addEventListener('resize', scrollAndResizeHandler);
			}
			document.removeEventListener('scroll', scrollAndResizeHandler);
			document.addEventListener('scroll', scrollAndResizeHandler);
			window.removeEventListener('resize', scrollAndResizeHandler);
			window.addEventListener('resize', scrollAndResizeHandler);
		}
	}
	close() {
		if (this.isOpen) {
			this.isOpen = false;
			this.isOpenChange.emit(this.isOpen);
		}
	}
	closeCallout() {
		this.initCallout();
		if (this.nativeCalloutContainer) {
			(this.nativeCalloutContainer as HTMLElement).classList.remove('is-open');
		}
		if (this.appendToBody) {
			const scrollAndResizeHandler = this.listeners['onScrollAndResize'];
			document.removeEventListener('scroll', scrollAndResizeHandler);
			window.removeEventListener('resize', scrollAndResizeHandler);
			if (this.childInDOM) {
				document.body.removeChild(this.childInDOM);
				this.childInDOM = null;
			}
		}
	}
	toggleCallout() {
		if (!this.isOpen) {
			this.open();
		} else {
			this.close();
		}
	}
}
