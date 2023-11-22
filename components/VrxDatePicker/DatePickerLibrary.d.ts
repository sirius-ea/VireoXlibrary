export declare const monthsLib: string[];
export declare const monthsShortLib: string[];
export declare const daysLib: string[];
export declare const shortDaysLib: string[];
export type CalendarDay = {
    day: number;
    number: number;
    month: number;
    year: number;
    isToday: boolean;
    isCurrentMonth: boolean;
    disabled: boolean;
};
export declare const dateFormatLib: string[];
/**
 * Format the date depending on the format
 * @param date
 * @param format
 */
export declare function formattedDate(date: Date, format: string): string;
/**
 * Set the missing days in the calendar of the previous or next month
 * @param array
 * @param indexRow
 * @param before
 * @param year
 * @param month
 * @param validRange
 */
export declare function setMissingDays(array: CalendarDay[], indexRow: number, before: boolean, year: number, month: number, validRange?: [Date | undefined, Date | undefined] | undefined): void;
/**
 * Check if the date is out of the valid range
 * @param date
 * @param validRange
 */
export declare function checkDisabled(date: Date, validRange: [Date | undefined, Date | undefined] | undefined): boolean;
export declare function shortHHMMtoString(value: number): string;
export type DateFormat = typeof dateFormatLib[number];
