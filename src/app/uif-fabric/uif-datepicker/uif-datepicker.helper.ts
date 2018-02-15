import { DateModel, Month, MonthFullname, MonthShortname, WeekDay, WeekDayData } from './uif-datepicker.models';

export function GetDatesInMonth(
	dt: Date,
	selectedDt: Date,
	firstDayOfWeek: WeekDay = WeekDay.Sunday,
	minDate = new Date(-8640000000000000),
	maxDate = new Date(8640000000000000)): Array<Array<DateModel>> {
	const weeks = [];
	const firstDayOfWeekIndex = Number(firstDayOfWeek);
	const originalDt = new Date(dt);
	const currDt = new Date(dt);
	currDt.setDate(1);
	const currentDate = {
		dt: currDt.getDate(),
		month: currDt.getMonth(),
		year: currDt.getFullYear(),
		index: currDt.getDay()
	};
	const today = new Date();
	const datesToAdjust = currentDate.index >= firstDayOfWeekIndex ?
		firstDayOfWeekIndex - currentDate.index : -7 + (firstDayOfWeekIndex - currentDate.index);
	const startDate = new Date(currentDate.year, currentDate.month, currentDate.dt + datesToAdjust);
	let len = 0;
	for (let wi = 0; wi < 6; wi++) {
		const week = [];
		for (let di = 0; di < 7; di++) {
			const newDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + len);
			len++;
			const dayModel = new DateModel();
			dayModel.date = newDate;
			dayModel.dateNum = newDate.getDate();
			dayModel.monthNum = newDate.getMonth();
			dayModel.yearNum = newDate.getFullYear();
			dayModel.isInFocus = newDate.getMonth() === originalDt.getMonth() ? newDate.getFullYear() === originalDt.getFullYear() : false;
			dayModel.isToday = newDate.getDate() === today.getDate()
				&& newDate.getMonth() === today.getMonth()
				&& newDate.getFullYear() === today.getFullYear();
			dayModel.isHighlighted = newDate.getDate() === selectedDt.getDate()
				&& newDate.getMonth() === selectedDt.getMonth()
				&& newDate.getFullYear() === selectedDt.getFullYear();
			dayModel.disabled = dayModel.date < minDate || dayModel.date > maxDate;
			week.push(dayModel);
		}
		weeks.push(week);
	}
	return weeks;
}

export function GetWeeksDayMap(fistDayOfWeek: WeekDay = WeekDay.Monday): WeekDayData[] {
	let weekDayMap = [];
	while (+fistDayOfWeek < 7) {
		weekDayMap.push(WeekDay[fistDayOfWeek++]);
	}
	weekDayMap = weekDayMap.concat(new Array(7 - weekDayMap.length).fill(0).map((val, iter: number) => WeekDay[iter]));
	const weekData = weekDayMap.map((day: WeekDay) => {
		const data = new WeekDayData();
		data.weekDay = day;
		data.fullName = String(day);
		data.index = Number(WeekDay[day]);
		data.char = String(day).charAt(0);
		return data;
	});
	return weekData;
}

export function GetWeekDayTitles(weekDays: WeekDay[]): WeekDayData[] {
	const weekTitles = weekDays.map((day: WeekDay) => {
		const data = new WeekDayData();
		data.weekDay = day;
		data.fullName = String(day);
		data.index = Number(WeekDay[day]);
		data.char = String(day).charAt(0);
		return data;
	});
	return weekTitles;
}

export function GetCurrentDayData(dt: Date): DateModel {
	const dm = new DateModel();
	dm.date = dt;
	dm.dateNum = dt.getDate();
	dm.monthNum = dt.getMonth();
	dm.yearNum = dt.getFullYear();
	dm.monthName = String(Month[dm.monthNum]);
	return dm;
}
