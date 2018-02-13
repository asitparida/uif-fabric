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
}
