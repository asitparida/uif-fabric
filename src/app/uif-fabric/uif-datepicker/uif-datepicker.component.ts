import { Component, Input, OnChanges } from '@angular/core';
import * as Models from './uif-datepicker.models';
import { DateModel } from './uif-datepicker.models';

@Component({
	selector: 'uif-datepicker',
	templateUrl: './uif-datepicker.component.html',
	styleUrls: ['./uif-datepicker.component.scss']
})
export class UifDatepickerComponent implements OnChanges {
	@Input() isOpen: boolean | Boolean = false;
	@Input() date: Date;
	@Input() firstDayOfWeek: Models.WeekDay = Models.WeekDay.Sunday;
	weekCollection: Array<Array<DateModel>> = [];
	ngOnChanges() {
		console.log(this);
	}
}
