import { IconLibraryType } from '../VrxIcon/IconLibrary.ts';
declare function __VLS_template(): Readonly<{
    default?: () => any;
    right?: () => any;
}> & {
    default?: () => any;
    right?: () => any;
};
declare const __VLS_component: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    label?: string;
    placeholder?: string;
    type: string;
    disabled?: boolean;
    modelValue: string;
    helperText?: string;
    invalid?: boolean;
    icon?: IconLibraryType;
    height?: number;
    readonly?: boolean;
}>, {
    type: string;
    placeholder: string;
}>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    label?: string;
    placeholder?: string;
    type: string;
    disabled?: boolean;
    modelValue: string;
    helperText?: string;
    invalid?: boolean;
    icon?: IconLibraryType;
    height?: number;
    readonly?: boolean;
}>, {
    type: string;
    placeholder: string;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    placeholder: string;
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
