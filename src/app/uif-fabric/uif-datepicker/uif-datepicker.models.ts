export enum WeekDay {
	Sunday = 0,
	Monday = 1,
	Tuesday = 2,
	Wednesday = 3,
	Thursday = 4,
	Friday = 5,
	Saturday = 6
}

export enum MonthFullname {
	January = 'January',
	February = 'February',
	March = 'March',
	April = 'April',
	May = 'May',
	June = 'June',
	July = 'July',
	August = 'August',
	September = 'September',
	October = 'October',
	November = 'November',
	December = 'December'
}

export enum Month {
	January,
	February,
	March,
	April,
	May,
	June,
	July,
	August,
	September,
	October,
	November,
	December
}

export enum MonthShortname {
	January = 'Jan',
	February = 'Feb',
	March = 'Mar',
	April = 'Apr',
	May = 'May',
	June = 'Jun',
	July = 'Jul',
	August = 'Aug',
	September = 'Sep',
	October = 'Oct',
	November = 'Nov',
	December = 'Dec'
}

export class DateModel {
	date: Date;
	weekDay: WeekDay;
	monthInYear: Month;
	monthName: String;
	dateNum: number;
	monthNum: number;
	yearNum: number;
	isInFocus: Boolean | boolean = false;
	isHighlighted: Boolean | boolean = false;
	isToday: Boolean | boolean = false;
	disabled: Boolean | boolean = false;
}

export class WeekDayData {
	weekDay: WeekDay;
	char: String;
	fullName: String;
	index: Number;
}
