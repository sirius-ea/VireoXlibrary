import type { PropType as __PropType } from './vue/dist/vue.esm-bundler.js';
declare const _sfc_main: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    type: {
        type: __PropType<"date" | "time" | "datetime">;
        required: true;
    };
    validRange: {
        type: __PropType<[Date | undefined, Date | undefined] | undefined>;
        required: false;
    };
    dateFormat: {
        type: __PropType<string | undefined>;
        required: false;
    };
    monthsOnly: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    placeholder: {
        type: __PropType<string | undefined>;
        required: false;
    };
    invalid: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, "dayClicked"[], "dayClicked", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    type: {
        type: __PropType<"date" | "time" | "datetime">;
        required: true;
    };
    validRange: {
        type: __PropType<[Date | undefined, Date | undefined] | undefined>;
        required: false;
    };
    dateFormat: {
        type: __PropType<string | undefined>;
        required: false;
    };
    monthsOnly: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    placeholder: {
        type: __PropType<string | undefined>;
        required: false;
    };
    invalid: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
}>> & {
    onDayClicked?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
