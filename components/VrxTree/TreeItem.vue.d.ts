import type { PropType as __PropType } from './vue/dist/vue.esm-bundler.js';
import { VrxTreeNode } from '../../components/VrxTree/VrxTree.types.ts';
declare const _sfc_main: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    node: {
        type: __PropType<VrxTreeNode>;
        required: true;
    };
    selectable: {
        type: __PropType<boolean>;
        required: true;
    };
    isParent: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    selected: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    selectedNodes: {
        type: __PropType<string[]>;
        required: true;
    };
    addNode: {
        type: __PropType<(nodeId: string) => void>;
        required: true;
    };
    removeNodeById: {
        type: __PropType<(nodeId: string, isParent?: boolean) => void>;
        required: true;
    };
    removeNode: {
        type: __PropType<(node: VrxTreeNode) => void>;
        required: true;
    };
    parentId: {
        type: __PropType<string>;
        required: true;
    };
    siblings: {
        type: __PropType<VrxTreeNode[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, "checkClicked"[], "checkClicked", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    node: {
        type: __PropType<VrxTreeNode>;
        required: true;
    };
    selectable: {
        type: __PropType<boolean>;
        required: true;
    };
    isParent: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    selected: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    selectedNodes: {
        type: __PropType<string[]>;
        required: true;
    };
    addNode: {
        type: __PropType<(nodeId: string) => void>;
        required: true;
    };
    removeNodeById: {
        type: __PropType<(nodeId: string, isParent?: boolean) => void>;
        required: true;
    };
    removeNode: {
        type: __PropType<(node: VrxTreeNode) => void>;
        required: true;
    };
    parentId: {
        type: __PropType<string>;
        required: true;
    };
    siblings: {
        type: __PropType<VrxTreeNode[]>;
        required: true;
    };
}>> & {
    onCheckClicked?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
