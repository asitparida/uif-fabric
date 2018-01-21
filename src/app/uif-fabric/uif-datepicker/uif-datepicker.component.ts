import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import * as Models from './uif-datepicker.models';
import { DateModel, WeekDayData, Month, MonthShortname } from './uif-datepicker.models';
import { GetDatesInMonth, GetWeeksDayMap, GetWeekDayTitles, GetCurrentDayData } from './uif-datepicker.helper';

@Component({
	selector: 'uif-datepicker',
	templateUrl: './uif-datepicker.component.html',
	styleUrls: ['./uif-datepicker.component.scss']
})
export class UifDatepickerComponent implements OnChanges {
	@Input() isOpen: boolean | Boolean = false;
	@Input() date: Date;
	@Output() dateChange: EventEmitter<Date> = new EventEmitter<Date>();
	@Input() firstDayOfWeek: Models.WeekDay = Models.WeekDay.Monday;
	weekDayMap: WeekDayData[] = [];
	weekDays: WeekDayData[] = [];
	weekCollection: Array<Array<DateModel>> = [];
	currentDayData: DateModel = null;
	currentDtContext: Date;
	currentDtContextData: DateModel = null;
	searchContext = {
		dt: new Date(),
		year: 1901,
		month: 0,
		decadeStart: 1901,
		decadeEnd: 1910,
		months: [],
		years: []
	};
	isPickingYears: boolean | Boolean = false;
	ngOnChanges() {
		this.currentDtContext = new Date(this.date);
		this.processForDt();
		this.processSearchContext(this.currentDtContext);
	}
	processForDt() {
		this.currentDayData = GetCurrentDayData(this.currentDtContext);
		this.currentDtContextData = GetCurrentDayData(this.currentDtContext);
		this.weekDays = GetWeeksDayMap(this.firstDayOfWeek);
		this.weekCollection = GetDatesInMonth(this.currentDtContext, new Date(this.date), this.firstDayOfWeek);
	}
	processSearchContext(dt: Date) {
		this.searchContext = {
			dt: dt,
			year: dt.getFullYear(),
			month: dt.getMonth(),
			decadeStart: (Math.floor(dt.getFullYear() / 10) * 10),
			decadeEnd: (Math.floor(dt.getFullYear() / 10) * 10) + 11,
			months: [].concat(new Array(12).fill('').map((val, index: number) => {
				return MonthShortname[Month[index]];
			})),
			years: []
		};
		for (let i = 0; i < 12; i++) {
			this.searchContext.years.push(this.searchContext.decadeStart + i);
		}
	}
	loadMonthByIncrement(increment: number) {
		const dt = this.searchContext.dt;
		dt.setMonth(dt.getMonth() + increment);
		this.processSearchContext(dt);
		this.currentDtContext = dt;
		this.processForDt();
	}
	loadDecadeInSearch(increment: number) {
		const dt = this.searchContext.dt;
		dt.setFullYear(dt.getFullYear() + (10 * increment));
		this.processSearchContext(dt);
		this.currentDtContext = dt;
		this.processForDt();
	}
	loadYearInSearch(increment: number) {
		const dt = this.searchContext.dt;
		dt.setMonth(dt.getMonth() + increment);
		this.processSearchContext(dt);
		this.currentDtContext = dt;
		this.processForDt();
	}
	goToToday() {
		this.currentDtContext = new Date();
		const dt = this.currentDtContext;
		this.processSearchContext(dt);
		this.currentDtContext = dt;
		this.processForDt();
	}
	switchOnYearPicking() {
		this.isPickingYears = true;
	}
	switchOnMonthPicking() {
		this.isPickingYears = false;
	}
	loadYear(year) {
		const dt = this.searchContext.dt;
		dt.setFullYear(year);
		this.processSearchContext(dt);
		this.switchOnMonthPicking();
		this.currentDtContext = dt;
		this.processForDt();
	}
	loadMonth(index) {
		const dt = this.searchContext.dt;
		dt.setMonth(index);
		this.processSearchContext(dt);
		this.currentDtContext = dt;
		this.processForDt();
	}
	selectDate(dt: Date) {
		this.date = dt;
		this.dateChange.emit(this.date);
	}
}
