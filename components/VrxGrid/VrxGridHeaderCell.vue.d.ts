import type { PropType as __PropType } from './vue/dist/vue.esm-bundler.js';
import { GridConfiguration, GridHeader, GridRow } from '../../components/VrxGrid/GridConfiguration.ts';
import { ReactiveVariable } from './vue/dist/vue.esm-bundler.js/macros';
declare const _sfc_main: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    gridConfig: {
        type: __PropType<GridConfiguration>;
        required: true;
    };
    headerConfig: {
        type: __PropType<GridHeader>;
        required: true;
    };
    gridData: {
        type: __PropType<ReactiveVariable<GridRow[]>>;
        required: true;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    gridConfig: {
        type: __PropType<GridConfiguration>;
        required: true;
    };
    headerConfig: {
        type: __PropType<GridHeader>;
        required: true;
    };
    gridData: {
        type: __PropType<ReactiveVariable<GridRow[]>>;
        required: true;
    };
}>>, {}, {}>;
export default _sfc_main;
