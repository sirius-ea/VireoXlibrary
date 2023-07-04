import type { PropType as __PropType } from './vue/dist/vue.esm-bundler.js';
import { ComponentVariant } from '../../components/styles.ts';
import { SelectItemInterface } from "./SelectItemInterface.ts";
declare const _sfc_main: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    label: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    placeholder: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    icon: {
        type: __PropType<"mail" | "password" | "rocket" | "user-circle" | "chevron-up" | "chevron-down" | "x" | "check" | "home" | "cog" | "logout" | "chart-bar" | "hamburger" | "empty" | "shopping-bag" | undefined>;
        required: false;
    };
    disabled: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    invalid: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    helperText: {
        type: __PropType<string>;
        required: true;
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
        type: __PropType<ComponentVariant>;
        required: true;
        default: string;
    };
    multiselect: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    label: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    placeholder: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    icon: {
        type: __PropType<"mail" | "password" | "rocket" | "user-circle" | "chevron-up" | "chevron-down" | "x" | "check" | "home" | "cog" | "logout" | "chart-bar" | "hamburger" | "empty" | "shopping-bag" | undefined>;
        required: false;
    };
    disabled: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    invalid: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    helperText: {
        type: __PropType<string>;
        required: true;
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
        type: __PropType<ComponentVariant>;
        required: true;
        default: string;
    };
    multiselect: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    label: string;
    placeholder: string;
    helperText: string;
    invalid: boolean;
    variant: ComponentVariant;
    multiselect: boolean;
}>;
export default _sfc_main;
