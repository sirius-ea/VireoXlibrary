import { GridConfiguration, GridFilter, GridRow } from '../GridConfiguration.ts';
export declare class Grid {
    private readonly _configuration;
    private _filters;
    private _selectedRows;
    private readonly _data;
    constructor(grid: GridConfiguration, gridData: GridRow[]);
    get configuration(): GridConfiguration;
    get filters(): GridFilter[];
    get data(): GridRow[];
    get selectedRows(): GridRow[];
    set filters(value: GridFilter[]);
    set selectedRows(value: GridRow[]);
    selectAll(): void;
    getRowById(id: number | string): GridRow | undefined;
    deselectAll(): void;
    resetFilters(): void;
    clearData(): void;
    updateData(data: (any & {
        id: number | string;
    })[]): void;
    setData(data: (any & {
        id: number | string;
    })[]): void;
    selectRange(start: number, end: number): void;
}
