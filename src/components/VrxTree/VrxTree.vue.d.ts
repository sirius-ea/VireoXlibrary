import { VrxTreeNode } from './VrxTree.types.ts';
declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_TypePropsToRuntimeProps<{
    data: VrxTreeNode[];
    selectable?: boolean | undefined;
    searchable?: boolean | undefined;
    returnsUserData?: boolean | undefined;
}>, {
    getSelectedNodes: () => any[];
    getNodeByText: (text: string) => undefined;
    removeNodeById: (nodeId: string, isParent?: boolean) => void;
    addNode: (nodeId: string) => void;
    removeNode: (node: VrxTreeNode) => void;
    flattenTree: (node: VrxTreeNode) => VrxTreeNode[];
    getNodeById: (id: string) => null;
    getParentNode: (toFind: VrxTreeNode) => null;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    cellClicked: (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    data: VrxTreeNode[];
    selectable?: boolean | undefined;
    searchable?: boolean | undefined;
    returnsUserData?: boolean | undefined;
}>>> & {
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
