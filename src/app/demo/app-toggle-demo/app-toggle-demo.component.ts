import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-toggle-demo',
	templateUrl: './app-toggle-demo.component.html'
})
export class ToggleDemoComponent {
	description = 'Let apps use my location';
	onLabel = 'On';
	offLabel = 'Off';
	enabled = false;
	booleanHints = [
		{ key: true, text: 'Yes'},
		{ key: false, text: 'No'}
	];
	disabled = false;
	getBoolean(val): boolean {
		if (typeof val === 'boolean') {
			return val;
		} else {
			return val === 'false' ? false : true;
		}
	}
}
