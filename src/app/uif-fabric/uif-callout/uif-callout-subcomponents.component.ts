import { Component, Inject, ElementRef } from '@angular/core';
import { Element } from '@angular/compiler';

@Component({
	selector: 'uif-open-callout, [uifOpenCallout]',
	styles: [
		':host {display: inline-block; }'
	],
	template: '<ng-content></ng-content>'
})
export class UifOpenCalloutComponent {
	element;
	constructor(public elementRef: ElementRef) {
		this.element = this.elementRef.nativeElement;
	}
}

@Component({
	selector: 'uif-callout-header',
	template: '<ng-content></ng-content>'
})
export class UifCalloutHeaderComponent {
}

@Component({
	selector: 'uif-callout-content',
	template: '<ng-content></ng-content>'
})
export class UifCalloutContentComponent {
}

@Component({
	selector: 'uif-callout-actions',
	template: '<ng-content></ng-content>'
})
export class UifCalloutActionComponent {
}
