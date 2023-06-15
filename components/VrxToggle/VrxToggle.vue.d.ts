import type { PropType as __PropType } from './vue/dist/vue.esm-bundler.js';
import { ComponentVariant } from '../../components/styles.ts';
declare const _sfc_main: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    size: {
        type: __PropType<"sm" | "md" | "lg" | undefined>;
        required: false;
        default: string;
    };
    variant: {
        type: __PropType<ComponentVariant | undefined>;
        required: false;
        default: string;
    };
    label: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    disabled: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    size: {
        type: __PropType<"sm" | "md" | "lg" | undefined>;
        required: false;
        default: string;
    };
    variant: {
        type: __PropType<ComponentVariant | undefined>;
        required: false;
        default: string;
    };
    label: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    disabled: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    modelValue: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean | undefined;
    size: "sm" | "md" | "lg" | undefined;
    label: string | undefined;
    modelValue: boolean | undefined;
    variant: ComponentVariant | undefined;
}>;
export default _sfc_main;
