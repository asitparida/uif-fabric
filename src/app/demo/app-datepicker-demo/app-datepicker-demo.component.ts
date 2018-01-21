import { Component } from '@angular/core';

@Component({
	selector: 'app-datepicker-demo',
	templateUrl: './app-datepicker-demo.component.html',
	styleUrls: ['./app-datepicker-demo.component.scss']
})
export class DatepickerComponent {
	datePickerOpened: boolean | Boolean = false;
	dt = new Date('01/01/2018');
}
