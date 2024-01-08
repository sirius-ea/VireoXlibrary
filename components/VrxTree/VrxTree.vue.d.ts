import type { PropType as __PropType } from './vue/dist/vue.esm-bundler.js';
import { VrxTreeNode } from '../../components/VrxTree/VrxTree.types.ts';
declare const _sfc_main: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    data: {
        type: __PropType<VrxTreeNode[]>;
        required: true;
    };
    selectable: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    searchable: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    returnsUserData: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, "cellClicked"[], "cellClicked", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    data: {
        type: __PropType<VrxTreeNode[]>;
        required: true;
    };
    selectable: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    searchable: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    returnsUserData: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
}>> & {
    onCellClicked?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
