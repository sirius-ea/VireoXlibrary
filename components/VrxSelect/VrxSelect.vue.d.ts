import type { PropType as __PropType } from './vue/dist/vue.esm-bundler.js';
import { ComponentVariant } from '../../components/styles.ts';
import { SelectItemInterface } from "./SelectItemInterface.ts";
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
        type: __PropType<"mail" | "password" | "rocket" | "user-circle" | "chevron-up" | "chevron-down" | "x" | "check" | "sort-order" | "home" | "cog" | "logout" | "chart-bar" | "hamburger" | "empty" | "shopping-bag" | undefined>;
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
        type: __PropType<"mail" | "password" | "rocket" | "user-circle" | "chevron-up" | "chevron-down" | "x" | "check" | "sort-order" | "home" | "cog" | "logout" | "chart-bar" | "hamburger" | "empty" | "shopping-bag" | undefined>;
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
}, {}>;
export default _sfc_main;
