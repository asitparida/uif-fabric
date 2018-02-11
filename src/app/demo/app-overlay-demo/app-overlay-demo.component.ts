import { Component } from '@angular/core';

@Component({
	selector: 'app-overlay-demo',
	templateUrl: './app-overlay-demo.component.html'
})
export class OverlayDemoComponent {
	isOverlayOpen = false;
	isOverlayDark = true;
	isOverlayDarkHints = [
		{ key: true, text: 'Yes'},
		{ key: false, text: 'No'}
	];
	getBoolean(val): boolean {
		if (typeof val === 'boolean') {
			return val;
		} else {
			return val === 'false' ? false : true;
		}
	}
}
