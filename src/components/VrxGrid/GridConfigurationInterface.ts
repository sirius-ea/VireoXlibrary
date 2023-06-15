export interface GridConfigurationInterface {
    id: string;
    header: GridHeaderInterface[];
    data: GridRowInterface[];
}

export interface GridHeaderInterface {
    id: string;
    text: string;
    align?: "left" | "center" | "right";
    sortable?: boolean;
    sortFunction?: Function;
    sortDirection?: "asc" | "desc" | null;
}

export interface GridRowInterface {
    id: string;
    textColor?: string;
    backgroundColor?: string;
    data: any;
}