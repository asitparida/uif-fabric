import { Component, Input, ElementRef, AfterContentInit } from '@angular/core';
import { setTestabilityGetter } from '@angular/core/src/testability/testability';

@Component({
	selector: 'uif-callout',
	templateUrl: './uif-callout.component.html',
	styleUrls: [
		'./uif-callout.component.scss'
	]
})
export class UifCalloutComponent implements AfterContentInit {
	showCallout = false;
	nativeCallout;
	nativeCalloutTrigger;
	nativeBeak;
	elementIntialized = false;
	@Input() position = 'left';
	@Input() showBeak = true;
	@Input() showClose = false;
	constructor(private elementRef: ElementRef) {}
	ngAfterContentInit() {
		const elRef = this.elementRef.nativeElement as HTMLElement;
		if (elRef) {
			this.nativeCallout = (elRef as HTMLElement).querySelector('.ms-ContextualHost') as HTMLElement;
			this.nativeCalloutTrigger = (elRef as HTMLElement).querySelector('uif-open-callout') as HTMLElement;
			this.nativeBeak = (elRef as HTMLElement).querySelector('.ms-ContextualHost-beak') as HTMLElement;
		}
		this.elementIntialized = true;
	}
	toggleCallout() {
		let currentStatus = this.showCallout;
		currentStatus = !currentStatus;
		this.showCallout = currentStatus;
		setTimeout(() => {
			if (currentStatus) {
				const calloutProps = (this.nativeCallout as HTMLElement).getBoundingClientRect();
				const calloutTriggerProps = (this.nativeCalloutTrigger as HTMLElement).getBoundingClientRect();
				const calloutBeakProps = (this.nativeBeak as HTMLElement).getBoundingClientRect();
				const beakAdjust = this.showBeak ? 20 : 0;
				(this.nativeCallout as HTMLElement).style.left = calloutTriggerProps.width + beakAdjust + 'px';
				const calloutBeakTop = (calloutProps.height - calloutBeakProps.height ) / 2;
				(this.nativeBeak as HTMLElement).style.top = (calloutBeakTop) + 'px';
				const calloutTop = (calloutProps.height - calloutTriggerProps.height ) / 2;
				(this.nativeCallout as HTMLElement).style.top = - (calloutTop) + 'px';
				(this.nativeCallout as HTMLElement).style.opacity = '1';

			}
		});
	}
}
