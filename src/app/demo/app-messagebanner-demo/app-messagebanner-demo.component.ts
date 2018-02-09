import { Component } from '@angular/core';

@Component({
	selector: 'app-messagebanner-demo',
	templateUrl: './app-messagebanner-demo.component.html'
})
export class MessageBannerDemoComponent {
	isMessagBannerOpen = false;
	hasOverlay = true;
	isBannerClosable = true;
	hasOverlayHints = [
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
