import {GridConfiguration, GridFilter, GridHeader, GridRow} from "@/components/VrxGrid/GridConfiguration.ts";
import {reactive} from "vue";

export class Grid {
    private readonly _configuration: GridConfiguration;
    private _filters: GridFilter[];
    private _selectedRows: GridRow[];

    constructor(grid: GridConfiguration) {
        this._configuration = grid;
        this._filters = reactive([]);
        this._selectedRows = reactive([]);
    }

    public get configuration(): GridConfiguration {
        return this._configuration;
    }

    public get filters(): GridFilter[] {
        return this._filters;
    }

    public get selectedRows(): GridRow[] {
        return this._selectedRows;
    }

    public set filters(value: GridFilter[]) {
        this._filters = value;
    }

    public set selectedRows(value: GridRow[]) {
        this._selectedRows = value;
    }

    public selectAll() : void {
        this._configuration.data.forEach((row : GridRow) => {
            this._selectedRows.push(row);
        });
    }

    public deselectAll() : void {
        this._selectedRows.splice(0, this._selectedRows.length);
    }

    public resetFilters() : void {
        this._filters.splice(0, this._filters.length);
    }

    public clearData() : void {
        this.deselectAll();
        this.resetFilters();
        this._configuration.data.splice(0, this._configuration.data.length);
    }

    public updateData(data : any[]) : void {
        data.forEach((row : any) => {
            const exist = this._configuration.data.find((r : any) => r.id === row.id);
            if(exist){
                const index = this._configuration.data.indexOf(exist);
                this._configuration.data.splice(index, 1);
                console.log(row);
                this._configuration.data.splice(index, 0, row);
                console.log(row);
                console.log(this._configuration.data);
            } else {
                this._configuration.data.push(row);
            }
        });
    }

    public setData(data : any[]) : void {
        this.clearData();
        this._configuration.data.splice(0, this._configuration.data.length);
        data.forEach((row : any) => {
            this._configuration.data.push(row);
        });
    }

}