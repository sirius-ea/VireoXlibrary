import type { PropType as __PropType } from './vue/dist/vue.esm-bundler.js';
declare const _sfc_main: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    month: {
        type: __PropType<number>;
        required: true;
    };
    year: {
        type: __PropType<number>;
        required: true;
    };
    selectedDate: {
        type: __PropType<Date | undefined>;
        required: false;
    };
    validRange: {
        type: __PropType<[Date | undefined, Date | undefined] | undefined>;
        required: false;
    };
    timeEnabled: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, ("dayClicked" | "changeMonth" | "changeStage" | "changeMinute" | "changeHour")[], "dayClicked" | "changeMonth" | "changeStage" | "changeMinute" | "changeHour", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    month: {
        type: __PropType<number>;
        required: true;
    };
    year: {
        type: __PropType<number>;
        required: true;
    };
    selectedDate: {
        type: __PropType<Date | undefined>;
        required: false;
    };
    validRange: {
        type: __PropType<[Date | undefined, Date | undefined] | undefined>;
        required: false;
    };
    timeEnabled: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
}>> & {
    onDayClicked?: ((...args: any[]) => any) | undefined;
    onChangeMonth?: ((...args: any[]) => any) | undefined;
    onChangeStage?: ((...args: any[]) => any) | undefined;
    onChangeMinute?: ((...args: any[]) => any) | undefined;
    onChangeHour?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
