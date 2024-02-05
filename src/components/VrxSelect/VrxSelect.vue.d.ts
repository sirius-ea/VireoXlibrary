import { ComponentVariant } from '../styles';
import type { SelectItemInterface } from '..';
declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    label?: string | undefined;
    placeholder?: string | undefined;
    icon?: "filter" | "link" | "table" | "attachment" | "battery-empty" | "battery-full" | "battery-half" | "bell" | "bell-on" | "bell-off" | "book" | "calculator" | "calendar" | "calendar-days" | "chart-bar" | "chart-pie" | "chart-curve" | "chart-bubble" | "chart-donut" | "check" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "clock" | "cloud-download" | "cloud-upload" | "cog" | "database" | "document" | "dots-horizontal" | "dots-vertical" | "empty" | "eye" | "eye-hide" | "excel" | "fingerprint" | "folder" | "folder-add" | "hamburger-menu" | "home" | "info-circle" | "language" | "list" | "logout" | "mail" | "map-pin" | "palette" | "password" | "pencil" | "plus" | "qr-code" | "qr-code-scan" | "rocket" | "search" | "settings" | "sun" | "sync" | "solar-panel" | "solar-panel-alt" | "sort-asc" | "sort-desc" | "thermometer" | "timer" | "turbine" | "turbine-alert" | "turbine-ok" | "trash" | "truck" | "user" | "users" | "user-circle" | "user-plus" | "user-minus" | "variable" | "warning-circle" | "warning-triangle" | "week" | "wind" | "x" | undefined;
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
    icon?: "filter" | "link" | "table" | "attachment" | "battery-empty" | "battery-full" | "battery-half" | "bell" | "bell-on" | "bell-off" | "book" | "calculator" | "calendar" | "calendar-days" | "chart-bar" | "chart-pie" | "chart-curve" | "chart-bubble" | "chart-donut" | "check" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "clock" | "cloud-download" | "cloud-upload" | "cog" | "database" | "document" | "dots-horizontal" | "dots-vertical" | "empty" | "eye" | "eye-hide" | "excel" | "fingerprint" | "folder" | "folder-add" | "hamburger-menu" | "home" | "info-circle" | "language" | "list" | "logout" | "mail" | "map-pin" | "palette" | "password" | "pencil" | "plus" | "qr-code" | "qr-code-scan" | "rocket" | "search" | "settings" | "sun" | "sync" | "solar-panel" | "solar-panel-alt" | "sort-asc" | "sort-desc" | "thermometer" | "timer" | "turbine" | "turbine-alert" | "turbine-ok" | "trash" | "truck" | "user" | "users" | "user-circle" | "user-plus" | "user-minus" | "variable" | "warning-circle" | "warning-triangle" | "week" | "wind" | "x" | undefined;
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
    variant: ComponentVariant;
    placeholder: string;
    helperText: string;
    invalid: boolean;
    multiselect: boolean;
    searchPlaceholder: string;
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
