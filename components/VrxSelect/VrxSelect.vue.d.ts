import type { PropType as __PropType } from './vue/dist/vue.esm-bundler.js';
import { ComponentVariant } from '../../components/styles';
import type { SelectItemInterface } from '../../components';
declare const _sfc_main: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    label: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    placeholder: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    icon: {
        type: __PropType<"filter" | "attachment" | "battery-empty" | "battery-full" | "battery-half" | "bell" | "bell-on" | "bell-off" | "book" | "calculator" | "calendar" | "calendar-days" | "chart-bar" | "chart-pie" | "chart-curve" | "chart-bubble" | "chart-donut" | "check" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "clock" | "cloud-download" | "cloud-upload" | "cog" | "database" | "document" | "dots-horizontal" | "dots-vertical" | "empty" | "eye" | "eye-hide" | "excel" | "fingerprint" | "folder" | "folder-add" | "hamburger-menu" | "home" | "info-circle" | "language" | "list" | "link" | "logout" | "mail" | "map-pin" | "palette" | "password" | "pencil" | "plus" | "qr-code" | "qr-code-scan" | "rocket" | "search" | "settings" | "sun" | "sync" | "solar-panel" | "solar-panel-alt" | "sort-asc" | "sort-desc" | "table" | "thermometer" | "timer" | "turbine" | "turbine-alert" | "turbine-ok" | "trash" | "truck" | "user" | "users" | "user-circle" | "user-plus" | "user-minus" | "variable" | "warning-circle" | "warning-triangle" | "week" | "wind" | "x" | undefined>;
        required: false;
    };
    disabled: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    invalid: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    helperText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    listData: {
        type: __PropType<SelectItemInterface[]>;
        required: true;
    };
    modelValue: {
        type: __PropType<SelectItemInterface[]>;
        required: true;
    };
    variant: {
        type: __PropType<ComponentVariant | undefined>;
        required: false;
        default: string;
    };
    multiselect: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    height: {
        type: __PropType<number | undefined>;
        required: false;
    };
    onSelect: {
        type: __PropType<((item: SelectItemInterface) => void) | undefined>;
        required: false;
    };
    onClear: {
        type: __PropType<(() => void) | undefined>;
        required: false;
    };
    searchable: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    searchPlaceholder: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    showRemove: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    elementClass: {
        type: __PropType<string | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    label: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    placeholder: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    icon: {
        type: __PropType<"filter" | "attachment" | "battery-empty" | "battery-full" | "battery-half" | "bell" | "bell-on" | "bell-off" | "book" | "calculator" | "calendar" | "calendar-days" | "chart-bar" | "chart-pie" | "chart-curve" | "chart-bubble" | "chart-donut" | "check" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "clock" | "cloud-download" | "cloud-upload" | "cog" | "database" | "document" | "dots-horizontal" | "dots-vertical" | "empty" | "eye" | "eye-hide" | "excel" | "fingerprint" | "folder" | "folder-add" | "hamburger-menu" | "home" | "info-circle" | "language" | "list" | "link" | "logout" | "mail" | "map-pin" | "palette" | "password" | "pencil" | "plus" | "qr-code" | "qr-code-scan" | "rocket" | "search" | "settings" | "sun" | "sync" | "solar-panel" | "solar-panel-alt" | "sort-asc" | "sort-desc" | "table" | "thermometer" | "timer" | "turbine" | "turbine-alert" | "turbine-ok" | "trash" | "truck" | "user" | "users" | "user-circle" | "user-plus" | "user-minus" | "variable" | "warning-circle" | "warning-triangle" | "week" | "wind" | "x" | undefined>;
        required: false;
    };
    disabled: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    invalid: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    helperText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    listData: {
        type: __PropType<SelectItemInterface[]>;
        required: true;
    };
    modelValue: {
        type: __PropType<SelectItemInterface[]>;
        required: true;
    };
    variant: {
        type: __PropType<ComponentVariant | undefined>;
        required: false;
        default: string;
    };
    multiselect: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    height: {
        type: __PropType<number | undefined>;
        required: false;
    };
    onSelect: {
        type: __PropType<((item: SelectItemInterface) => void) | undefined>;
        required: false;
    };
    onClear: {
        type: __PropType<(() => void) | undefined>;
        required: false;
    };
    searchable: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    searchPlaceholder: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    showRemove: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    elementClass: {
        type: __PropType<string | undefined>;
        required: false;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean | undefined;
    label: string | undefined;
    placeholder: string | undefined;
    helperText: string | undefined;
    invalid: boolean | undefined;
    variant: ComponentVariant | undefined;
    multiselect: boolean | undefined;
    searchPlaceholder: string | undefined;
    showRemove: boolean | undefined;
}, {}>;
export default _sfc_main;
