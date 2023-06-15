export interface GridConfigurationInterface {
    id: string;
    header: GridHeaderInterface[];
    data: GridRowInterface[];
}

export interface GridHeaderInterface {
    text: string;
    align: "left" | "center" | "right";
    sortable: boolean;
    sortFunction: Function;
    sortDirection: "asc" | "desc";
}

export interface GridRowInterface {
    textColor?: string;
    backgroundColor?: string;
    data: Object;
}