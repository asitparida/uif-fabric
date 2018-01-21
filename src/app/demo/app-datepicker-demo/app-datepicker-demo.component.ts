import { Component } from '@angular/core';

@Component({
	selector: 'app-datepicker-demo',
	templateUrl: './app-datepicker-demo.component.html',
	styleUrls: ['./app-datepicker-demo.component.scss']
})
export class DatepickerComponent {
	datePickerOpened: boolean | Boolean = true;
	dt = new Date();
}
