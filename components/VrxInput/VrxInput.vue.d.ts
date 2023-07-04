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
        type: __PropType<"mail" | "password" | "rocket" | "user-circle" | "chevron-up" | "chevron-down" | "x" | "check" | "home" | "cog" | "logout" | "chart-bar" | "hamburger" | "empty" | "shopping-bag" | undefined>;
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
        type: __PropType<"mail" | "password" | "rocket" | "user-circle" | "chevron-up" | "chevron-down" | "x" | "check" | "home" | "cog" | "logout" | "chart-bar" | "hamburger" | "empty" | "shopping-bag" | undefined>;
        required: false;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    placeholder: string | undefined;
}>;
export default _sfc_main;
