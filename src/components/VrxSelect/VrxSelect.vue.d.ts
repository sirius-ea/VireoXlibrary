import { ComponentVariant } from '../styles';
import type { SelectItemInterface } from '..';
declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    label?: string | undefined;
    placeholder?: string | undefined;
    icon?: "function" | "filter" | "link" | "table" | "account-filled" | "account" | "attachment" | "battery-empty" | "battery-filled" | "battery-full" | "battery-half" | "battery-outline" | "bell" | "bell-off" | "bell-on-outline" | "bell-on-filled" | "book" | "calculator" | "calendar" | "calendar-filled" | "calendar-days" | "chart-area" | "chart-area-filled" | "chart-bar" | "chart-bar-filled" | "chart-box" | "chart-box-filled" | "chart-pie" | "chart-pie-filled" | "chart-curve" | "chart-bubble" | "chart-donut" | "check" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "clock" | "clock-alert" | "clock-alert-filled" | "clock-filled" | "cloud-download" | "cloud-upload" | "cog" | "copy" | "cog-filled" | "database" | "document" | "dots-circle" | "dots-circle-filled" | "dots-horizontal" | "dots-vertical" | "empty" | "eye" | "eye-hide" | "excel" | "export" | "file-check" | "file-check-filled" | "file-document" | "file-document-filled" | "fingerprint" | "folder" | "folder-add" | "folder-filled" | "hamburger-menu" | "home" | "info-circle" | "language" | "lightning-bolt" | "lightning-bolt-filled" | "list" | "logout" | "mail" | "map-pin" | "message-alert" | "message-alert-filled" | "note" | "note-filled" | "palette" | "password" | "pencil" | "plus" | "png" | "pin" | "qr-code" | "qr-code-scan" | "reload" | "rocket" | "save" | "search" | "settings" | "sun" | "sync" | "solar-panel" | "solar-panel-alt" | "sort-asc" | "sort-desc" | "thermometer" | "timer" | "turbine" | "turbine-alert" | "turbine-ok" | "trash" | "tree" | "truck" | "user" | "users" | "user-circle" | "user-plus" | "user-minus" | "unpin" | "variable" | "view-list" | "view-list-filled" | "warning-circle" | "warning-triangle" | "week" | "wind" | "wrench" | "wrench-filled" | "x" | undefined;
    disabled?: boolean | undefined;
    invalid?: boolean | undefined;
    helperText?: string | undefined;
    listData: SelectItemInterface[];
    modelValue: SelectItemInterface[];
    variant?: ComponentVariant | undefined;
    multiselect?: boolean | undefined;
    height?: number | undefined;
    onSelect?: ((item: SelectItemInterface) => void) | undefined;
    onClear?: (() => void) | undefined;
    searchable?: boolean | undefined;
    searchPlaceholder?: string | undefined;
    showRemove?: boolean | undefined;
    elementClass?: string | undefined;
}>, {
    disabled: boolean;
    invalid: boolean;
    multiselect: boolean;
    showRemove: boolean;
    label: string;
    helperText: string;
    placeholder: string;
    variant: string;
    searchPlaceholder: string;
}>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    label?: string | undefined;
    placeholder?: string | undefined;
    icon?: "function" | "filter" | "link" | "table" | "account-filled" | "account" | "attachment" | "battery-empty" | "battery-filled" | "battery-full" | "battery-half" | "battery-outline" | "bell" | "bell-off" | "bell-on-outline" | "bell-on-filled" | "book" | "calculator" | "calendar" | "calendar-filled" | "calendar-days" | "chart-area" | "chart-area-filled" | "chart-bar" | "chart-bar-filled" | "chart-box" | "chart-box-filled" | "chart-pie" | "chart-pie-filled" | "chart-curve" | "chart-bubble" | "chart-donut" | "check" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "clock" | "clock-alert" | "clock-alert-filled" | "clock-filled" | "cloud-download" | "cloud-upload" | "cog" | "copy" | "cog-filled" | "database" | "document" | "dots-circle" | "dots-circle-filled" | "dots-horizontal" | "dots-vertical" | "empty" | "eye" | "eye-hide" | "excel" | "export" | "file-check" | "file-check-filled" | "file-document" | "file-document-filled" | "fingerprint" | "folder" | "folder-add" | "folder-filled" | "hamburger-menu" | "home" | "info-circle" | "language" | "lightning-bolt" | "lightning-bolt-filled" | "list" | "logout" | "mail" | "map-pin" | "message-alert" | "message-alert-filled" | "note" | "note-filled" | "palette" | "password" | "pencil" | "plus" | "png" | "pin" | "qr-code" | "qr-code-scan" | "reload" | "rocket" | "save" | "search" | "settings" | "sun" | "sync" | "solar-panel" | "solar-panel-alt" | "sort-asc" | "sort-desc" | "thermometer" | "timer" | "turbine" | "turbine-alert" | "turbine-ok" | "trash" | "tree" | "truck" | "user" | "users" | "user-circle" | "user-plus" | "user-minus" | "unpin" | "variable" | "view-list" | "view-list-filled" | "warning-circle" | "warning-triangle" | "week" | "wind" | "wrench" | "wrench-filled" | "x" | undefined;
    disabled?: boolean | undefined;
    invalid?: boolean | undefined;
    helperText?: string | undefined;
    listData: SelectItemInterface[];
    modelValue: SelectItemInterface[];
    variant?: ComponentVariant | undefined;
    multiselect?: boolean | undefined;
    height?: number | undefined;
    onSelect?: ((item: SelectItemInterface) => void) | undefined;
    onClear?: (() => void) | undefined;
    searchable?: boolean | undefined;
    searchPlaceholder?: string | undefined;
    showRemove?: boolean | undefined;
    elementClass?: string | undefined;
}>, {
    disabled: boolean;
    invalid: boolean;
    multiselect: boolean;
    showRemove: boolean;
    label: string;
    helperText: string;
    placeholder: string;
    variant: string;
    searchPlaceholder: string;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    label: string;
    placeholder: string;
    helperText: string;
    invalid: boolean;
    variant: ComponentVariant;
    searchPlaceholder: string;
    multiselect: boolean;
    showRemove: boolean;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
