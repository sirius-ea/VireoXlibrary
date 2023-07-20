export const monthsLib : string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export const daysLib : string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

export const shortDaysLib : string[] = [
    'Su',
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa'
];

export type CalendarDay = {
    day: number;
    number: number;
    month: number;
    year: number;
    isToday: boolean;
    isCurrentMonth: boolean;
    disabled: boolean;
}

export const dateFormatLib: string[] = [
    'YYYY-MM-DD',
    'DD-MM-YYYY',
    'MM-DD-YYYY',
    'YYYY/MM/DD',
    'DD/MM/YYYY',
    'MM/DD/YYYY',
    'YYYY.MM.DD',
    'DD.MM.YYYY',
    'MM.DD.YYYY'
];

export type DateFormat = typeof dateFormatLib[number];