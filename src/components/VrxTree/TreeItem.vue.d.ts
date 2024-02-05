import { VrxTreeNode } from './VrxTree.types.ts';
declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_TypePropsToRuntimeProps<{
    node: VrxTreeNode;
    selectable: boolean;
    isParent?: boolean | undefined;
    selected?: boolean | undefined;
    selectedNodes: string[];
    addNode: (nodeId: string) => void;
    removeNodeById: (nodeId: string, isParent?: boolean) => void;
    removeNode: (node: VrxTreeNode) => void;
    parentId: string;
    siblings: VrxTreeNode[];
}>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    checkClicked: (...args: any[]) => void;
    cellClicked: (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    node: VrxTreeNode;
    selectable: boolean;
    isParent?: boolean | undefined;
    selected?: boolean | undefined;
    selectedNodes: string[];
    addNode: (nodeId: string) => void;
    removeNodeById: (nodeId: string, isParent?: boolean) => void;
    removeNode: (node: VrxTreeNode) => void;
    parentId: string;
    siblings: VrxTreeNode[];
}>>> & {
    onCheckClicked?: ((...args: any[]) => any) | undefined;
    onCellClicked?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<T[K]>;
        required: true;
    };
};
