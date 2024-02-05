declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    dataStart: import('../../../vue/dist/vue.esm-bundler.js').PropType<Date | undefined>;
    dataStop: import('../../../vue/dist/vue.esm-bundler.js').PropType<Date | undefined>;
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
    placeholderFrom: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    placeholderTo: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    width: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
    };
    invalid: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    labelStart: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    labelStop: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    helperTextStart: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    helperTextStop: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
}, {
    getDates: () => any[];
    setDates: (dates: [Date | undefined, Date | undefined]) => void;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    dataStart: import('../../../vue/dist/vue.esm-bundler.js').PropType<Date | undefined>;
    dataStop: import('../../../vue/dist/vue.esm-bundler.js').PropType<Date | undefined>;
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
    placeholderFrom: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    placeholderTo: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    width: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
    };
    invalid: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
    };
    labelStart: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    labelStop: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    helperTextStart: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    helperTextStop: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
}>>, {}, {}>;
export default _default;
