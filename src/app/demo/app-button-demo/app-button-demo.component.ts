import { Component } from '@angular/core';

@Component({
	selector: 'app-button-demo',
	templateUrl: './app-button-demo.component.html',
})
export class ButtonDemoComponent {
	description = 'This is a sample button description';
	showAlert($event) {
		window.alert('Button clicked');
	}
}
