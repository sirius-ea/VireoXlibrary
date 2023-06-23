import {Component} from "vue";

export type GridConfiguration = {
    id: string;
    header: GridHeader[];
    data: GridRow[];
    multiselect?: boolean;
    selectable?: boolean;
}

export type GridHeader = {
    id: string;
    text: string;
    type: "text" | "component";
    align?: "left" | "center" | "right";
    sortable?: boolean;
    sortFunction?: ((a : GridRow, b : GridRow) => number) | undefined;
    sortDirection?: "asc" | "desc" | null;
    width?: number;
    filterType?: "text" | "select" | "date";
    filterPlaceholder?: string;
    customFilter?: Function;
}

export interface GridRow {
    id: string;
    textColor?: string;
    backgroundColor?: string;
    data: any;
}

export type GridFilter = {
    cellId: string;
    value: string;
}