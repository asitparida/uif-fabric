import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-checkbox-demo',
	templateUrl: './app-checkbox-demo.component.html'
})
export class CheckboxDemoComponent {
	label = 'Sample Checkbox Label';
	enabled = false;
}
