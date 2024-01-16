import type { PropType as __PropType } from './vue/dist/vue.esm-bundler.js';
declare const _sfc_main: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    label: {
        type: __PropType<string | undefined>;
        required: false;
    };
    placeholder: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    type: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    disabled: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    modelValue: {
        type: __PropType<string>;
        required: true;
    };
    helperText: {
        type: __PropType<string | undefined>;
        required: false;
    };
    invalid: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    icon: {
        type: __PropType<"search" | "link" | "filter" | "attachment" | "battery-empty" | "battery-full" | "battery-half" | "bell" | "bell-on" | "bell-off" | "book" | "calculator" | "calendar" | "calendar-days" | "chart-bar" | "chart-pie" | "chart-curve" | "chart-bubble" | "chart-donut" | "check" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "clock" | "cloud-download" | "cloud-upload" | "cog" | "database" | "document" | "dots-horizontal" | "dots-vertical" | "empty" | "eye" | "eye-hide" | "excel" | "fingerprint" | "folder" | "folder-add" | "hamburger-menu" | "home" | "info-circle" | "language" | "list" | "logout" | "mail" | "map-pin" | "palette" | "password" | "pencil" | "plus" | "qr-code" | "qr-code-scan" | "rocket" | "settings" | "sun" | "sync" | "solar-panel" | "solar-panel-alt" | "sort-asc" | "sort-desc" | "table" | "thermometer" | "timer" | "turbine" | "turbine-alert" | "turbine-ok" | "trash" | "truck" | "user" | "users" | "user-circle" | "user-plus" | "user-minus" | "variable" | "warning-circle" | "warning-triangle" | "week" | "wind" | "x" | undefined>;
        required: false;
    };
    height: {
        type: __PropType<number | undefined>;
        required: false;
    };
    readonly: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    label: {
        type: __PropType<string | undefined>;
        required: false;
    };
    placeholder: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    type: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    disabled: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    modelValue: {
        type: __PropType<string>;
        required: true;
    };
    helperText: {
        type: __PropType<string | undefined>;
        required: false;
    };
    invalid: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    icon: {
        type: __PropType<"search" | "link" | "filter" | "attachment" | "battery-empty" | "battery-full" | "battery-half" | "bell" | "bell-on" | "bell-off" | "book" | "calculator" | "calendar" | "calendar-days" | "chart-bar" | "chart-pie" | "chart-curve" | "chart-bubble" | "chart-donut" | "check" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "clock" | "cloud-download" | "cloud-upload" | "cog" | "database" | "document" | "dots-horizontal" | "dots-vertical" | "empty" | "eye" | "eye-hide" | "excel" | "fingerprint" | "folder" | "folder-add" | "hamburger-menu" | "home" | "info-circle" | "language" | "list" | "logout" | "mail" | "map-pin" | "palette" | "password" | "pencil" | "plus" | "qr-code" | "qr-code-scan" | "rocket" | "settings" | "sun" | "sync" | "solar-panel" | "solar-panel-alt" | "sort-asc" | "sort-desc" | "table" | "thermometer" | "timer" | "turbine" | "turbine-alert" | "turbine-ok" | "trash" | "truck" | "user" | "users" | "user-circle" | "user-plus" | "user-minus" | "variable" | "warning-circle" | "warning-triangle" | "week" | "wind" | "x" | undefined>;
        required: false;
    };
    height: {
        type: __PropType<number | undefined>;
        required: false;
    };
    readonly: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    placeholder: string | undefined;
}, {}>;
export default _sfc_main;
