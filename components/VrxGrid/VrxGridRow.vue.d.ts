import type { PropType as __PropType } from './vue/dist/vue.esm-bundler.js';
import { GridHeader, GridRow } from '../../components/VrxGrid/GridConfiguration.ts';
declare const _sfc_main: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    row: {
        type: __PropType<GridRow>;
        required: true;
    };
    headerConfig: {
        type: __PropType<GridHeader[]>;
        required: true;
    };
    selectable: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    multiselect: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    row: {
        type: __PropType<GridRow>;
        required: true;
    };
    headerConfig: {
        type: __PropType<GridHeader[]>;
        required: true;
    };
    selectable: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    multiselect: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
}>>, {}, {}>;
export default _sfc_main;
