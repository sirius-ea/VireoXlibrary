import { ComponentVariant } from '../styles.ts';
declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: {
        required: true;
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    disabled: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    size: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"sm" | "lg" | "md">;
        default: string;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    variant: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<ComponentVariant>;
        default: string;
    };
}, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: {
        required: true;
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    disabled: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    size: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"sm" | "lg" | "md">;
        default: string;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    variant: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<ComponentVariant>;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    size: "sm" | "md" | "lg";
    label: string;
    variant: ComponentVariant;
}, {}>;
export default _default;
