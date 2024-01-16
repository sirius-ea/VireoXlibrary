import type { PropType as __PropType } from './vue/dist/vue.esm-bundler.js';
import { Row } from '../../components/VrxGrid/Models/Row.ts';
import { GridHeader } from '../../components/VrxGrid/GridConfiguration.ts';
declare const _sfc_main: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    row: {
        type: __PropType<Row>;
        required: true;
    };
    cell: {
        type: __PropType<GridHeader>;
        required: true;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, ("cellClicked" | "cellDoubleClicked")[], "cellClicked" | "cellDoubleClicked", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    row: {
        type: __PropType<Row>;
        required: true;
    };
    cell: {
        type: __PropType<GridHeader>;
        required: true;
    };
}>> & {
    onCellClicked?: ((...args: any[]) => any) | undefined;
    onCellDoubleClicked?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
