import { IVrxTreeUseCase, VrxTreeNode } from '..';
declare const _default: <T>(__VLS_props: Awaited<typeof __VLS_setup>["props"], __VLS_ctx?: __VLS_Prettify<Pick<Awaited<typeof __VLS_setup>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_Prettify<__VLS_OmitKeepDiscriminatedUnion<(Partial<{}> & Omit<{
        onOnCheckNode?: ((...args: any[]) => any) | undefined;
        onOnClickNode?: ((...args: any[]) => any) | undefined;
        onOnMoveEnd?: ((...args: any[]) => any) | undefined;
    } & import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps & Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{}>> & {
        onOnCheckNode?: ((...args: any[]) => any) | undefined;
        onOnClickNode?: ((...args: any[]) => any) | undefined;
        onOnMoveEnd?: ((...args: any[]) => any) | undefined;
    }, never>) & ({
        selectable?: boolean;
        searchable?: boolean;
        searchPlaceholder?: string;
        isDraggable?: boolean;
        toolbarClass?: string;
    } & {
        modelValue: VrxTreeNode<T>[];
    }), keyof import('../../../vue/dist/vue.esm-bundler.js').VNodeProps | keyof import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps>> & {} & (import('../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps);
    expose(exposed: import('../../../vue/dist/vue.esm-bundler.js').ShallowUnwrapRef<IVrxTreeUseCase<T>>): void;
    attrs: any;
    slots: ReturnType<() => {
        toolbar?(_: {}): any;
    }>;
    emit: (event: "onCheckNode" | "onClickNode" | "onMoveEnd", ...args: any[]) => void;
}>) => import('../../../vue/dist/vue.esm-bundler.js').VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
