declare function __VLS_template(): {
    prefix?(_: {}): any;
    default?(_: {}): any;
    suffix?(_: {}): any;
};
declare const __VLS_component: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_TypePropsToRuntimeProps<{
    color: "default" | "alternative" | "dark" | "light" | "green" | "red" | "yellow" | "blue" | "purple";
    disabled?: boolean;
    fullRounded?: boolean;
    fullWidth?: boolean;
    size: "xs" | "sm" | "base" | "lg" | "xl";
}>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    color: "default" | "alternative" | "dark" | "light" | "green" | "red" | "yellow" | "blue" | "purple";
    disabled?: boolean;
    fullRounded?: boolean;
    fullWidth?: boolean;
    size: "xs" | "sm" | "base" | "lg" | "xl";
}>>>, {}, {}>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
