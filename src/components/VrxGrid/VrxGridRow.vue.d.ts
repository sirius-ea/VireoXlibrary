import { GridHeader, GridRow } from './GridConfiguration.ts';
declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_TypePropsToRuntimeProps<{
    row: GridRow;
    headerConfig: GridHeader[];
    selectable?: boolean;
    multiselect?: boolean;
}>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    cellClicked: (...args: any[]) => void;
    cellDoubleClicked: (...args: any[]) => void;
    rowClicked: (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    row: GridRow;
    headerConfig: GridHeader[];
    selectable?: boolean;
    multiselect?: boolean;
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
