import { Component, Input, ElementRef, AfterContentInit, OnChanges } from '@angular/core';
import { UifCalloutDirectionalHint } from './uif-callout.models';

@Component({
	selector: 'uif-callout',
	templateUrl: './uif-callout.component.html',
	styleUrls: [
		'./uif-callout.component.scss'
	]
})
export class UifCalloutComponent implements AfterContentInit, OnChanges {
	showCallout = false;
	nativeCallout;
	nativeCalloutTrigger;
	nativeCalloutContainer;
	nativeBeak;
	elementIntialized = false;
	@Input() position = 'left';
	@Input() showArrow = true;
	@Input() showClose = false;
	@Input() directionalHint: UifCalloutDirectionalHint = UifCalloutDirectionalHint.TopCenter;
	constructor(private elementRef: ElementRef) { }
	ngAfterContentInit() {
		const elRef = this.elementRef.nativeElement as HTMLElement;
		if (elRef) {
			this.nativeCalloutContainer = (elRef as HTMLElement).querySelector('.ms-ContextualHost') as HTMLElement;
			this.nativeCallout = (elRef as HTMLElement).querySelector('.ms-ContextualHost-main') as HTMLElement;
			this.nativeCalloutTrigger = (elRef as HTMLElement).querySelector('uif-open-callout') as HTMLElement;
			this.nativeBeak = (elRef as HTMLElement).querySelector('.ms-ContextualHost-beak') as HTMLElement;
		}
		this.elementIntialized = true;
	}
	ngOnChanges() {
		if (this.showCallout) {
			this.toggleCallout();
		}
	}
	toggleCallout() {
		let currentStatus = this.showCallout;
		currentStatus = !currentStatus;
		this.showCallout = currentStatus;
		if (this.showCallout) {
			(this.nativeCalloutContainer as HTMLElement).classList.add('is-open');
		} else {
			(this.nativeCalloutContainer as HTMLElement).classList.remove('is-open');
		}
		setTimeout(() => {
			if (currentStatus) {
				const calloutProps = (this.nativeCallout as HTMLElement).getBoundingClientRect();
				const calloutTriggerProps = (this.nativeCalloutTrigger as HTMLElement).getBoundingClientRect();
				const calloutBeakProps = (this.nativeBeak as HTMLElement).getBoundingClientRect();
				(this.nativeCalloutContainer as HTMLElement).style.removeProperty('left');
				(this.nativeCalloutContainer as HTMLElement).style.removeProperty('bottom');
				(this.nativeCalloutContainer as HTMLElement).style.removeProperty('top');
				(this.nativeCalloutContainer as HTMLElement).style.removeProperty('right');
				(this.nativeCalloutContainer as HTMLElement).style.removeProperty('marginRight');
				(this.nativeCalloutContainer as HTMLElement).style.removeProperty('marginLeft');
				(this.nativeCalloutContainer as HTMLElement).style.removeProperty('marginTop');
				(this.nativeCalloutContainer as HTMLElement).style.removeProperty('marginBottom');
				switch (parseInt(this.directionalHint.toString(), 10)) {
					case UifCalloutDirectionalHint.TopLeftEdge:
						{
							(this.nativeCalloutContainer as HTMLElement).style.left = '0px';
							(this.nativeCalloutContainer as HTMLElement).style.bottom = (calloutTriggerProps.height) + 'px';
							break;
						}
					case UifCalloutDirectionalHint.TopCenter:
						{
							const leftAdjust = (calloutProps.width - calloutTriggerProps.width) / 2;
							(this.nativeCalloutContainer as HTMLElement).style.left = -leftAdjust + 'px';
							(this.nativeCalloutContainer as HTMLElement).style.bottom = (calloutTriggerProps.height) + 'px';
							break;
						}
					case UifCalloutDirectionalHint.TopRightEdge:
						{
							(this.nativeCalloutContainer as HTMLElement).style.right = '0px';
							(this.nativeCalloutContainer as HTMLElement).style.bottom = (calloutTriggerProps.height) + 'px';
							break;
						}
					case UifCalloutDirectionalHint.BottomCenter:
						{
							const leftAdjust = (calloutProps.width - calloutTriggerProps.width) / 2;
							(this.nativeCalloutContainer as HTMLElement).style.left = -leftAdjust + 'px';
							(this.nativeCalloutContainer as HTMLElement).style.top = (calloutTriggerProps.height) + 'px';
							break;
						}
					case UifCalloutDirectionalHint.BottomLeftEdge:
						{
							(this.nativeCalloutContainer as HTMLElement).style.left = '0px';
							(this.nativeCalloutContainer as HTMLElement).style.top = (calloutTriggerProps.height) + 'px';
							break;
						}
					case UifCalloutDirectionalHint.BottomRightEdge:
						{
							(this.nativeCalloutContainer as HTMLElement).style.right = '0px';
							(this.nativeCalloutContainer as HTMLElement).style.top = (calloutTriggerProps.height) + 'px';
							break;
						}
					case UifCalloutDirectionalHint.LeftCenter:
						{
							(this.nativeCalloutContainer as HTMLElement).style.left = -(calloutProps.width) + 'px';
							(this.nativeCalloutContainer as HTMLElement).style.marginTop = '-50%';
							// const calloutTop = (calloutProps.height - calloutTriggerProps.height) / 2;
							// (this.nativeCallout as HTMLElement).style.top = - (calloutTop) + 'px';
							break;
						}
					case UifCalloutDirectionalHint.LeftTopEdge:
						{
							(this.nativeCalloutContainer as HTMLElement).style.left = -(calloutProps.width) + 'px';
							(this.nativeCalloutContainer as HTMLElement).style.top = '0px';
							break;
						}
					case UifCalloutDirectionalHint.LeftBottomEdge:
						{
							(this.nativeCalloutContainer as HTMLElement).style.left = -(calloutProps.width) + 'px';
							(this.nativeCalloutContainer as HTMLElement).style.bottom = '0px';
							break;
						}
					case UifCalloutDirectionalHint.RightCenter:
						{
							(this.nativeCalloutContainer as HTMLElement).style.right = -(calloutProps.width) + 'px';
							(this.nativeCalloutContainer as HTMLElement).style.marginTop = '-50%';
							break;
						}
					case UifCalloutDirectionalHint.RightTopEdge:
						{
							(this.nativeCalloutContainer as HTMLElement).style.right = -(calloutProps.width) + 'px';
							(this.nativeCalloutContainer as HTMLElement).style.top = '0px';
							break;
						}
					case UifCalloutDirectionalHint.RightBottomEdge: {
						(this.nativeCalloutContainer as HTMLElement).style.right = -(calloutProps.width) + 'px';
							(this.nativeCalloutContainer as HTMLElement).style.bottom = '0px';
						break;
					}
				}
				(this.nativeCalloutContainer as HTMLElement).style.opacity = '1';
			}
		});
	}
}
