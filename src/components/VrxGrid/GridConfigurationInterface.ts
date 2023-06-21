import {Component} from "vue";

export interface GridConfigurationInterface {
    id: string;
    header: GridHeaderInterface[];
    data: GridRowInterface[];
    multiselect?: boolean;
    selectable?: boolean;
}

export interface GridHeaderInterface {
    id: string;
    text: string;
    type: "text" | "component";
    align?: "left" | "center" | "right";
    sortable?: boolean;
    sortFunction?: Function;
    sortDirection?: "asc" | "desc" | null;
    width?: number;
    filterType?: "text" | "select" | "date";
    filterPlaceholder?: string;
}

export interface GridRowInterface {
    id: string;
    textColor?: string;
    backgroundColor?: string;
    data: any;
}