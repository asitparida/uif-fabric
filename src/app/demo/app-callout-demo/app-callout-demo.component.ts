import { Component } from '@angular/core';

@Component({
	selector: 'app-callout-demo',
	templateUrl: './app-callout-demo.component.html',
})
export class CalloutDemoComponent {
	showCallout() {
		console.log('showCallout');
	}
}
