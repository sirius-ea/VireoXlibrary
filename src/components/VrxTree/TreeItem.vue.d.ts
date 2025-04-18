import { VrxTreeNode } from './VrxTree.types.ts';
declare const _default: <T>(__VLS_props: Awaited<typeof __VLS_setup>["props"], __VLS_ctx?: __VLS_Prettify<Pick<Awaited<typeof __VLS_setup>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_Prettify<__VLS_OmitKeepDiscriminatedUnion<(Partial<{}> & Omit<{
        onOnCheckNode?: ((...args: any[]) => any) | undefined;
        onOnClickNode?: ((...args: any[]) => any) | undefined;
    } & import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps & Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{}>> & {
        onOnCheckNode?: ((...args: any[]) => any) | undefined;
        onOnClickNode?: ((...args: any[]) => any) | undefined;
    }, never>) & {
        node: VrxTreeNode<T>;
        selectable: boolean;
        isParent?: boolean;
        selected?: boolean;
        parentId: string;
        tooltip?: string;
        siblings: VrxTreeNode<T>[];
        isDraggable?: boolean;
        class?: string;
    }, keyof import('../../../vue/dist/vue.esm-bundler.js').VNodeProps | keyof import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps>> & {} & (import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps);
    expose(exposed: import('../../../vue/dist/vue.esm-bundler.js').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: ReturnType<() => {}>;
    emit: (event: "onCheckNode" | "onClickNode", ...args: any[]) => void;
}>) => import('../../../vue/dist/vue.esm-bundler.js').VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
