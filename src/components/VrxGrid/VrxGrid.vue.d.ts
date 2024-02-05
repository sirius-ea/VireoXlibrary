import { GridConfiguration, GridRow } from '..';
declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_TypePropsToRuntimeProps<{
    gridConfiguration: GridConfiguration;
    gridData: GridRow[];
}>, {
    getSelectedRows: () => GridRow[];
    getFilters: () => import('..').GridFilter[];
    setData: (data: GridRow[]) => void;
    resetFilters: () => void;
    deselectAll: () => void;
    selectAll: () => void;
    clearData: () => void;
    updateData: (data: GridRow[]) => void;
    selectRange: (start: number, end: number) => void;
    getData: () => GridRow[];
    getRowById: (id: string | number) => GridRow | undefined;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    cellClicked: (...args: any[]) => void;
    cellDoubleClicked: (...args: any[]) => void;
    rowClicked: (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    gridConfiguration: GridConfiguration;
    gridData: GridRow[];
}>>> & {
    onCellClicked?: ((...args: any[]) => any) | undefined;
    onCellDoubleClicked?: ((...args: any[]) => any) | undefined;
    onRowClicked?: ((...args: any[]) => any) | undefined;
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
