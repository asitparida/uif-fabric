import { Component } from '@angular/core';

@Component({
	selector: 'uif-open-callout',
	styles: [
		':host {display: inline-block;}'
	],
	template: '<ng-content></ng-content>'
})
export class UifOpenCalloutComponent {
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
