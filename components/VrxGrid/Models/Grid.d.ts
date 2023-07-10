import { GridConfiguration, GridFilter, GridRow } from '../../../components/VrxGrid/GridConfiguration.ts';
export declare class Grid {
    private readonly _configuration;
    private _filters;
    private _selectedRows;
    constructor(grid: GridConfiguration);
    get configuration(): GridConfiguration;
    get filters(): GridFilter[];
    get data(): GridRow[];
    get selectedRows(): GridRow[];
    set filters(value: GridFilter[]);
    set selectedRows(value: GridRow[]);
    selectAll(): void;
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
