export declare enum WeekDay {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
}
export declare enum MonthFullname {
    January = "January",
    February = "February",
    March = "March",
    April = "April",
    May = "May",
    June = "June",
    July = "July",
    August = "August",
    September = "September",
    October = "October",
    November = "November",
    December = "December",
}
export declare enum Month {
    January = 0,
    February = 1,
    March = 2,
    April = 3,
    May = 4,
    June = 5,
    July = 6,
    August = 7,
    September = 8,
    October = 9,
    November = 10,
    December = 11,
}
export declare enum MonthShortname {
    January = "Jan",
    February = "Feb",
    March = "Mar",
    April = "Apr",
    May = "May",
    June = "Jun",
    July = "Jul",
    August = "Aug",
    September = "Sep",
    October = "Oct",
    November = "Nov",
    December = "Dec",
}
export declare class DateModel {
    date: Date;
    weekDay: WeekDay;
    monthInYear: Month;
    monthName: String;
    dateNum: number;
    monthNum: number;
    yearNum: number;
    isInFocus: Boolean | boolean;
    isHighlighted: Boolean | boolean;
    isToday: Boolean | boolean;
    disabled: Boolean | boolean;
}
export declare class WeekDayData {
    weekDay: WeekDay;
    char: String;
    fullName: String;
    index: Number;
}
