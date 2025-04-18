declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_TypePropsToRuntimeProps<{
    month: number;
    year: number;
    selectedDate?: Date;
    validRange?: [Date | undefined, Date | undefined];
    timeEnabled?: boolean;
}>, {}, unknown, {}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    changeMinute: (...args: any[]) => void;
    changeHour: (...args: any[]) => void;
    changeMonth: (...args: any[]) => void;
    changeStage: (...args: any[]) => void;
    dayClicked: (...args: any[]) => void;
}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    month: number;
    year: number;
    selectedDate?: Date;
    validRange?: [Date | undefined, Date | undefined];
    timeEnabled?: boolean;
}>>> & {
    onChangeMinute?: ((...args: any[]) => any) | undefined;
    onChangeHour?: ((...args: any[]) => any) | undefined;
    onChangeMonth?: ((...args: any[]) => any) | undefined;
    onChangeStage?: ((...args: any[]) => any) | undefined;
    onDayClicked?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('../../../../vue/dist/vue.esm-bundler.js').PropType<T[K]>;
        required: true;
    };
};
