export enum WeekDay {
	Sunday,
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday
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
	dateNum: number;
	monthNum: number;
	yearNum: number;
}
