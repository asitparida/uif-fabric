import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-checkbox-demo',
	templateUrl: './app-checkbox-demo.component.html'
})
export class CheckboxDemoComponent {
	label = 'Sample Checkbox Label';
	enabled = false;
	disabled = false;
	booleanHints = [
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
