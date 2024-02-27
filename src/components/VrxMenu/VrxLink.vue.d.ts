declare const _default: __VLS_WithTemplateSlots<import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_TypePropsToRuntimeProps<{
    class?: string | undefined;
    testid?: string | undefined;
    fatherShowDropdown?: boolean | undefined;
    component?: string | undefined;
    componentProps?: Record<string, any> | undefined;
    collapsed?: boolean | undefined;
}>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    class?: string | undefined;
    testid?: string | undefined;
    fatherShowDropdown?: boolean | undefined;
    component?: string | undefined;
    componentProps?: Record<string, any> | undefined;
    collapsed?: boolean | undefined;
}>>>, {}, {}>, {
    default?(_: {}): any;
    child?(_: {}): any;
}>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
