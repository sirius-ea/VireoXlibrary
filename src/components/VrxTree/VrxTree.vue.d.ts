import { IVrxTreeUseCase, VrxTreeNode } from '..';
declare const _default: <T>(__VLS_props: {
    modelValue: VrxTreeNode<T>[];
    onOnCheckNode?: ((...args: any[]) => any) | undefined;
    onOnClickNode?: ((...args: any[]) => any) | undefined;
    selectable?: boolean | undefined;
    isDraggable?: boolean | undefined;
    onOnMoveEnd?: ((...args: any[]) => any) | undefined;
    searchable?: boolean | undefined;
    toolbarClass?: string | undefined;
} & import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    slots: {
        toolbar?(_: {}): any;
    };
    emit: (event: "onCheckNode" | "onClickNode" | "onMoveEnd", ...args: any[]) => void;
} | undefined, __VLS_expose?: ((exposed: import('../../../vue/dist/vue.esm-bundler.js').ShallowUnwrapRef<IVrxTreeUseCase<T>>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        modelValue: VrxTreeNode<T>[];
        onOnCheckNode?: ((...args: any[]) => any) | undefined;
        onOnClickNode?: ((...args: any[]) => any) | undefined;
        selectable?: boolean | undefined;
        isDraggable?: boolean | undefined;
        onOnMoveEnd?: ((...args: any[]) => any) | undefined;
        searchable?: boolean | undefined;
        toolbarClass?: string | undefined;
    } & import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps;
    expose(exposed: import('../../../vue/dist/vue.esm-bundler.js').ShallowUnwrapRef<IVrxTreeUseCase<T>>): void;
    attrs: any;
    slots: {
        toolbar?(_: {}): any;
    };
    emit: (event: "onCheckNode" | "onClickNode" | "onMoveEnd", ...args: any[]) => void;
}>) => import('../../../vue/dist/vue.esm-bundler.js').VNode<import('../../../vue/dist/vue.esm-bundler.js').RendererNode, import('../../../vue/dist/vue.esm-bundler.js').RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            modelValue: VrxTreeNode<T>[];
            onOnCheckNode?: ((...args: any[]) => any) | undefined;
            onOnClickNode?: ((...args: any[]) => any) | undefined;
            selectable?: boolean | undefined;
            isDraggable?: boolean | undefined;
            onOnMoveEnd?: ((...args: any[]) => any) | undefined;
            searchable?: boolean | undefined;
            toolbarClass?: string | undefined;
        } & import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps;
        expose(exposed: import('../../../vue/dist/vue.esm-bundler.js').ShallowUnwrapRef<IVrxTreeUseCase<T>>): void;
        attrs: any;
        slots: {
            toolbar?(_: {}): any;
        };
        emit: (event: "onCheckNode" | "onClickNode" | "onMoveEnd", ...args: any[]) => void;
    } | undefined;
};
export default _default;
