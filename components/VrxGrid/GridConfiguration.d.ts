import { IconLibraryType } from '../../components/VrxIcon/IconLibrary.ts';
import { Component } from './vue/dist/vue.esm-bundler.js';
export type GridConfiguration = {
    id: string;
    header: GridHeader[];
    multiselect?: boolean;
    selectable?: boolean;
};
export type GridHeader = {
    id: string;
    text: string;
    type?: "text" | "component" | "static" | "boolean" | "button" | undefined;
    align?: "left" | "center" | "right";
    sortable?: boolean;
    sortFunction?: ((a: GridRow, b: GridRow) => number) | undefined;
    sortDirection?: "asc" | "desc" | undefined;
    width?: number;
    filterType?: "text" | "select" | "date";
    filterPlaceholder?: string;
    customFilter?: (row: GridRow, filter: GridFilter) => boolean;
    editable?: boolean;
    editType?: "text" | "select" | "date" | "component";
    editOptions?: any[];
    icon?: IconLibraryType;
    staticHTML?: string;
    colspan?: number;
    template?: (value: GridRow) => any;
    component?: string | Component;
    componentProps?: (value: GridRow) => any;
};
export interface GridRow {
    id: string;
    textColor?: string;
    backgroundColor?: string;
    componentProps?: any;
    data: any;
}
export type GridFilter = {
    cellId: string;
    value: string;
};
