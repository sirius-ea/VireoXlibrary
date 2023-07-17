import {IconLibraryType} from "@/components/VrxIcon/IconLibrary.ts";

export type GridConfiguration = {
    id: string;
    header: GridHeader[];
    multiselect?: boolean;
    selectable?: boolean;
}

export type GridHeader = {
    id: string;
    text: string;
    type?: "text" | "component" | undefined;
    align?: "left" | "center" | "right";
    sortable?: boolean;
    sortFunction?: ((a : GridRow, b : GridRow) => number) | undefined;
    sortDirection?: "asc" | "desc" | undefined;
    width?: number;
    filterType?: "text" | "select" | "date";
    filterPlaceholder?: string;
    customFilter?: (row: GridRow, filter: GridFilter) => boolean;
    editable?: boolean;
    editType?: "text" | "select" | "date" | "component";
    editOptions?: any[];
    icon?: IconLibraryType;
}

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
}