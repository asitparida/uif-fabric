import { DateModel, WeekDay, WeekDayData } from './uif-datepicker.models';
export declare function GetDatesInMonth(dt: Date, selectedDt: Date, firstDayOfWeek?: WeekDay, minDate?: Date, maxDate?: Date): Array<Array<DateModel>>;
export declare function GetWeeksDayMap(fistDayOfWeek?: WeekDay): WeekDayData[];
export declare function GetWeekDayTitles(weekDays: WeekDay[]): WeekDayData[];
export declare function GetCurrentDayData(dt: Date): DateModel;
