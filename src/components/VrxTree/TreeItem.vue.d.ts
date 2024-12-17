import { VrxTreeNode } from './VrxTree.types.ts';
declare const _default: <T>(__VLS_props: {
    tooltip?: string | undefined;
    onOnCheckNode?: ((...args: any[]) => any) | undefined;
    onOnClickNode?: ((...args: any[]) => any) | undefined;
    node: VrxTreeNode<T>;
    selectable: boolean;
    isParent?: boolean | undefined;
    selected?: boolean | undefined;
    parentId: string;
    siblings: VrxTreeNode<T>[];
    isDraggable?: boolean | undefined;
} & import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    slots: {};
    emit: (event: "onCheckNode" | "onClickNode", ...args: any[]) => void;
} | undefined, __VLS_expose?: ((exposed: import('../../../vue/dist/vue.esm-bundler.js').ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        tooltip?: string | undefined;
        onOnCheckNode?: ((...args: any[]) => any) | undefined;
        onOnClickNode?: ((...args: any[]) => any) | undefined;
        node: VrxTreeNode<T>;
        selectable: boolean;
        isParent?: boolean | undefined;
        selected?: boolean | undefined;
        parentId: string;
        siblings: VrxTreeNode<T>[];
        isDraggable?: boolean | undefined;
    } & import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps;
    expose(exposed: import('../../../vue/dist/vue.esm-bundler.js').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {};
    emit: (event: "onCheckNode" | "onClickNode", ...args: any[]) => void;
}>) => import('../../../vue/dist/vue.esm-bundler.js').VNode<import('../../../vue/dist/vue.esm-bundler.js').RendererNode, import('../../../vue/dist/vue.esm-bundler.js').RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            tooltip?: string | undefined;
            onOnCheckNode?: ((...args: any[]) => any) | undefined;
            onOnClickNode?: ((...args: any[]) => any) | undefined;
            node: VrxTreeNode<T>;
            selectable: boolean;
            isParent?: boolean | undefined;
            selected?: boolean | undefined;
            parentId: string;
            siblings: VrxTreeNode<T>[];
            isDraggable?: boolean | undefined;
        } & import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps;
        expose(exposed: import('../../../vue/dist/vue.esm-bundler.js').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: {};
        emit: (event: "onCheckNode" | "onClickNode", ...args: any[]) => void;
    } | undefined;
};
export default _default;
