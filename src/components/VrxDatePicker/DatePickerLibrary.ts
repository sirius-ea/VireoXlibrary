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

export function formattedDate (date: Date, format: DateFormat): string {
    const map: Record<string, string> = {
        'MM': String(date.getMonth() + 1).length === 1 ? `0${date.getMonth() + 1}` : String(date.getMonth() + 1),
        'DD': String(date.getDate()).length === 1 ? `0${date.getDate()}` : String(date.getDate()),
        'YYYY': String(date.getFullYear())
    };

    return format.replace(/MM|DD|YYYY/gi, (matched) => {
        return map[matched];
    });
}

export type DateFormat = typeof dateFormatLib[number];