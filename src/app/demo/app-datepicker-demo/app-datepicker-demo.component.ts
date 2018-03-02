import { Component } from '@angular/core';
import { WeekDay } from '../../../../lib/uif-fabric';

@Component({
	selector: 'app-datepicker-demo',
	templateUrl: './app-datepicker-demo.component.html',
	styleUrls: ['./app-datepicker-demo.component.scss']
})
export class DatepickerComponent {
	datePickerOpened1: boolean | Boolean = false;
	datePickerOpened2: boolean | Boolean = false;
	dt;
	minDate;
	maxDate;
	weekDayHints = [
		{ key: WeekDay.Sunday, text: 'Sunday' },
		{ key: WeekDay.Monday, text: 'Monday' },
		{ key: WeekDay.Tuesday, text: 'Tuesday' },
		{ key: WeekDay.Wednesday, text: 'Wednesday' },
		{ key: WeekDay.Thursday, text: 'Thursday' },
		{ key: WeekDay.Friday, text: 'Friday' },
		{ key: WeekDay.Saturday, text: 'Saturday' },
	];
	selectedWeekDay: WeekDay = WeekDay.Sunday;
	constructor() {
		this.dt = new Date();
		this.minDate = new Date();
		this.maxDate = new Date();
		this.minDate.setMonth(this.minDate.getMonth() - 1);
		this.maxDate.setMonth(this.maxDate.getMonth() + 1);
	}
}
