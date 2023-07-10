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

    public get data(): GridRow[] {
        return this._configuration.data;
    }

    public get selectedRows(): GridRow[] {
        return this._selectedRows;
    }

    public set filters(value: GridFilter[]) {
        this.deselectAll();
        this._filters = value;
    }

    public set selectedRows(value: GridRow[]) {
        this._selectedRows = value;
    }

    public selectAll() : void {
        if(this._configuration.multiselect === false){
            console.warn(`Multiselection in grid "${this._configuration.id}" is disabled. No rows will be selected`);
            return;
        }
        this.deselectAll();
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

    public updateData(data :  (any & {id:number|string})[]) : void {
        data.forEach((row : (any & {id:number|string})) => {
            const exist = this._configuration.data.find((r : (any & {id:number|string})) => r.id === row.id);
            if(exist){
                const index = this._configuration.data.indexOf(exist);
                this._configuration.data.splice(index, 1);
                this._configuration.data.splice(index, 0, row);
            } else {
                this._configuration.data.push(row);
            }
        });
    }

    public setData(data :  (any & {id:number|string})[]) : void {
        this.clearData();
        this._configuration.data.splice(0, this._configuration.data.length);
        data.forEach((row : (any & {id:number|string})) => {
            this._configuration.data.push(row);
        });
    }

    public selectRange(start : number, end : number) : void {
        let actStart = start;
        let actEnd = end;
        if(start > end){
            actStart = end;
            actEnd = start;
        }

        this._filters.splice(0, this._filters.length);
        this.deselectAll();
        for(let i = actStart; i <= actEnd; i++){
            this._selectedRows.push(this._configuration.data[i]);
        }
    }

}