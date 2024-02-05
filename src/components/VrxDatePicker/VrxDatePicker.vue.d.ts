declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<Date>;
    type: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"time" | "date" | "datetime">;
        required: true;
    };
    validRange: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<[Date | undefined, Date | undefined]>;
    };
    dateFormat: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    monthsOnly: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    placeholder: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    invalid: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    helperText: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
}, {
    setDate: (date: Date) => void;
    setValidRange: (range: [Date | undefined, Date | undefined]) => void;
    getDate: () => Date;
    setMonth: (monthIndex: number, year: number) => void;
    openPicker: () => void;
    closePicker: (event: any) => void;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    dayClicked: (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<Date>;
    type: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"time" | "date" | "datetime">;
        required: true;
    };
    validRange: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<[Date | undefined, Date | undefined]>;
    };
    dateFormat: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    monthsOnly: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    placeholder: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    invalid: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    helperText: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
}>> & {
    onDayClicked?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
