import type { PropType as __PropType } from './vue/dist/vue.esm-bundler.js';
import { GridConfiguration, GridRow } from '../../components';
declare const _sfc_main: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    gridConfiguration: {
        type: __PropType<GridConfiguration>;
        required: true;
    };
    gridData: {
        type: __PropType<GridRow[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, ("rowClicked" | "cellClicked" | "cellDoubleClicked")[], "rowClicked" | "cellClicked" | "cellDoubleClicked", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    gridConfiguration: {
        type: __PropType<GridConfiguration>;
        required: true;
    };
    gridData: {
        type: __PropType<GridRow[]>;
        required: true;
    };
}>> & {
    onRowClicked?: ((...args: any[]) => any) | undefined;
    onCellClicked?: ((...args: any[]) => any) | undefined;
    onCellDoubleClicked?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
