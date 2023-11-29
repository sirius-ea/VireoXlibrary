
/*
██╗░░░░░██╗██████╗░██████╗░░█████╗░██████╗░██╗░░░██╗
██║░░░░░██║██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚██╗░██╔╝
██║░░░░░██║██████╦╝██████╔╝███████║██████╔╝░╚████╔╝░
██║░░░░░██║██╔══██╗██╔══██╗██╔══██║██╔══██╗░░╚██╔╝░░
███████╗██║██████╦╝██║░░██║██║░░██║██║░░██║░░░██║░░░
╚══════╝╚═╝╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░
*/
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

export const monthsShortLib : string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
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

/*
███████╗██╗░░░██╗███╗░░██╗░█████╗░████████╗██╗░█████╗░███╗░░██╗░██████╗
██╔════╝██║░░░██║████╗░██║██╔══██╗╚══██╔══╝██║██╔══██╗████╗░██║██╔════╝
█████╗░░██║░░░██║██╔██╗██║██║░░╚═╝░░░██║░░░██║██║░░██║██╔██╗██║╚█████╗░
██╔══╝░░██║░░░██║██║╚████║██║░░██╗░░░██║░░░██║██║░░██║██║╚████║░╚═══██╗
██║░░░░░╚██████╔╝██║░╚███║╚█████╔╝░░░██║░░░██║╚█████╔╝██║░╚███║██████╔╝
╚═╝░░░░░░╚═════╝░╚═╝░░╚══╝░╚════╝░░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚══╝╚═════╝░
 */

/**
 * Format the date depending on the format
 * @param date
 * @param format
 */
export function formattedDate (date: Date, format: string): string {
    const map: Record<string, string> = {
        'MM': String(date.getMonth() + 1).length === 1 ? `0${date.getMonth() + 1}` : String(date.getMonth() + 1),
        'Month': monthsLib[date.getMonth()],
        'DD': String(date.getDate()).length === 1 ? `0${date.getDate()}` : String(date.getDate()),
        'YYYY': String(date.getFullYear()),
        'HH': String(date.getHours()).length === 1 ? `0${date.getHours()}` : String(date.getHours()),
        'mm': String(date.getMinutes()).length === 1 ? `0${date.getMinutes()}` : String(date.getMinutes()),
    };

    return format.replace(/MM|Month|DD|YYYY|HH|mm/gi, (matched) => {
        return map[matched];
    });
}

/**
 * Set the missing days in the calendar of the previous or next month
 * @param array
 * @param indexRow
 * @param before
 * @param year
 * @param month
 * @param validRange
 */
export function setMissingDays(array: CalendarDay[], indexRow: number, before: boolean, year: number, month: number, validRange?: [Date | undefined, Date | undefined] | undefined){
    array.forEach((day, index) => {
        let date;
        if (before){
            if(index <= indexRow){
                date = new Date(year, month, day.number);
                date.setDate(date.getDate() - (indexRow - index));
            }
        } else {
            if (index >= indexRow) {
                date = new Date(year, month + 1, day.number);
                date.setDate(date.getDate() + (index - indexRow + 1));
            }
        }
        if(date){
            array[index] = {
                day: date.getDay(),
                number: date.getDate(),
                month: date.getMonth(),
                year: date.getFullYear(),
                isToday: date.toDateString() === new Date().toDateString(),
                isCurrentMonth: date.getMonth() === month,
                disabled: checkDisabled(date, validRange)
            }
        }
    })
}

/**
 * Check if the date is out of the valid range
 * @param date
 * @param validRange
 */
export function checkDisabled (date: Date, validRange: [Date | undefined, Date | undefined] | undefined) {
    if (!validRange) return false;
    if (validRange[0]) {
        if (date.getTime() < validRange[0]?.getTime()) return true;
    }
    if (validRange[1]) {
        if (date.getTime() > validRange[1]?.getTime()) return true;
    }
    return false;
}

export function pad(value: number){
    return value < 10 ? `0${value}` : `${value}`;
}


export type DateFormat = typeof dateFormatLib[number];
