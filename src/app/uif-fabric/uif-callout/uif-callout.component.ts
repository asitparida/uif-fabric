import { Component, Input, ElementRef, AfterContentInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { UifCalloutDirectionalHint, UifCalloutTriggerHint } from './uif-callout.models';

@Component({
	selector: 'uif-callout',
	templateUrl: './uif-callout.component.html',
	styleUrls: [
		'./uif-callout.component.scss'
	]
})
export class UifCalloutComponent implements AfterContentInit, OnChanges {
	@Input() isOpen = false;
	@Output() isOpenChange: EventEmitter<boolean | Boolean> = new EventEmitter<boolean | Boolean>();
	nativeCallout;
	nativeCalloutTrigger;
	nativeCalloutContainer;
	nativeBeak;
	calloutTriggerHandler;
	elementIntialized = false;
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
	UifCalloutTriggerHints = UifCalloutTriggerHint;
	listeners: any = {};
	listenersPopulated = false;
	disableClicks = false;
	tabIndex = null;
	constructor(private elementRef: ElementRef) { }
	ngAfterContentInit() {
		const elRef = this.elementRef.nativeElement as HTMLElement;
		if (elRef) {
			this.nativeCalloutContainer = (elRef as HTMLElement).querySelector('.ms-ContextualHost') as HTMLElement;
			this.nativeCallout = (elRef as HTMLElement).querySelector('.ms-ContextualHost-main') as HTMLElement;
			this.nativeCalloutTrigger = (elRef as HTMLElement).querySelector('uif-open-callout') as HTMLElement;
			this.nativeBeak = (elRef as HTMLElement).querySelector('.ms-Beak') as HTMLElement;
			this.calloutTriggerHandler = (elRef as HTMLElement).querySelector('[data-tag="call-out-trigger"]') as HTMLElement;
		}
		this.elementIntialized = true;
	}
	ngOnChanges() {
		this.showArrow = JSON.parse(this.showArrow.toString());
		this.showClose = JSON.parse(this.showClose.toString());
		this.gap = parseInt(this.gap.toString(), 10);
		switch (+this.triggerHint) {
			case 2: this.triggerHint = UifCalloutTriggerHint.FocusInBlurOut; this.disableClicks = true; this.tabIndex = 0; break;
			case 3: this.triggerHint = UifCalloutTriggerHint.HoverInBlurOut; this.disableClicks = true; this.tabIndex = null; break;
			default: this.triggerHint = UifCalloutTriggerHint.ClickInClickOut; this.disableClicks = false; this.tabIndex = 0; break;
		}
		if (this.isOpen) {
			this.openCallout();
		} else {
			this.closeCallout();
		}
		this.addListeners();
	}
	addListeners() {
		const self = this;
		if (!this.listenersPopulated) {
			this.listeners['openHandler'] = function () {
				self.openCallout();
			};
			this.listeners['closeHandler'] = function () {
				self.closeCallout();
			};
			this.listeners['toggleHandler'] = function () {
				self.toggleCallout();
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
	}
	openCallout() {
		if (!this.isOpen) {
			this.isOpen = true;
			this.isOpenChange.emit(this.isOpen);
		}
		(this.nativeCalloutContainer as HTMLElement).classList.add('is-open');
		setTimeout(() => {
			const calloutProps = (this.nativeCallout as HTMLElement).getBoundingClientRect();
			const calloutTriggerProps = (this.nativeCalloutTrigger as HTMLElement).getBoundingClientRect();
			const calloutBeakProps = (this.nativeBeak as HTMLElement).getBoundingClientRect();
			this.initCallout();
			switch (parseInt(this.directionalHint.toString(), 10)) {
				case UifCalloutDirectionalHint.TopLeftEdge:
					{
						const beakAdjustForCallout = 14;
						const beakPositionAdjust = 9;
						const beakAdjust = this.showArrow ? this.gap + beakAdjustForCallout : this.gap;
						const beakLeftAdjust = 30;
						(this.nativeCalloutContainer as HTMLElement).style.left = '0px';
						(this.nativeCalloutContainer as HTMLElement).style.bottom = (calloutTriggerProps.height + beakAdjust) + 'px';
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
						(this.nativeCalloutContainer as HTMLElement).style.left = -leftAdjust + 'px';
						(this.nativeCalloutContainer as HTMLElement).style.bottom = (calloutTriggerProps.height + beakAdjust) + 'px';
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
						(this.nativeCalloutContainer as HTMLElement).style.right = '0px';
						(this.nativeCalloutContainer as HTMLElement).style.bottom = (calloutTriggerProps.height + beakAdjust) + 'px';
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
						(this.nativeCalloutContainer as HTMLElement).style.left = -leftAdjust + 'px';
						(this.nativeCalloutContainer as HTMLElement).style.top = (calloutTriggerProps.height + beakAdjust) + 'px';
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
						(this.nativeCalloutContainer as HTMLElement).style.left = '0px';
						(this.nativeCalloutContainer as HTMLElement).style.top = (calloutTriggerProps.height + beakAdjust) + 'px';
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
						(this.nativeCalloutContainer as HTMLElement).style.right = '0px';
						(this.nativeCalloutContainer as HTMLElement).style.top = (calloutTriggerProps.height + beakAdjust) + 'px';
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
						(this.nativeCalloutContainer as HTMLElement).style.left = -(calloutProps.width + beakAdjust) + 'px';
						(this.nativeCalloutContainer as HTMLElement).style.marginTop = '-50%';
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
						(this.nativeCalloutContainer as HTMLElement).style.left = -(calloutProps.width + beakAdjust) + 'px';
						(this.nativeCalloutContainer as HTMLElement).style.top = '0px';
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
						(this.nativeCalloutContainer as HTMLElement).style.left = -(calloutProps.width + beakAdjust) + 'px';
						(this.nativeCalloutContainer as HTMLElement).style.bottom = '0px';
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
						(this.nativeCalloutContainer as HTMLElement).style.right = -(calloutProps.width + beakAdjust) + 'px';
						(this.nativeCalloutContainer as HTMLElement).style.marginTop = '-50%';
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
						(this.nativeCalloutContainer as HTMLElement).style.right = -(calloutProps.width + beakAdjust) + 'px';
						(this.nativeCalloutContainer as HTMLElement).style.top = '0px';
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
						(this.nativeCalloutContainer as HTMLElement).style.right = -(calloutProps.width + beakAdjust) + 'px';
						(this.nativeCalloutContainer as HTMLElement).style.bottom = '0px';
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
	}
	closeCallout() {
		if (this.isOpen) {
			this.isOpen = false;
			this.isOpenChange.emit(this.isOpen);
		}
		this.initCallout();
		if (this.nativeCalloutContainer) {
			(this.nativeCalloutContainer as HTMLElement).classList.remove('is-open');
		}
	}
	toggleCallout() {
		if (!this.isOpen) {
			this.openCallout();
		} else {
			this.closeCallout();
		}
	}
}
