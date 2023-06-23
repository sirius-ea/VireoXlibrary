import {GridConfiguration, GridFilter, GridHeader, GridRow} from "@/components/VrxGrid/GridConfiguration.ts";
import {SelectItemInterface} from "@/components/VrxSelect/SelectItemInterface.ts";

export class Header {
    private _id: string;
    private _text: string;
    private _type: "text" | "component";
    private _align?: "left" | "center" | "right";
    private _sortable?: boolean;
    private _sortFunction?: ((a : GridRow, b : GridRow) => number) | undefined;
    private _sortDirection?: "asc" | "desc" | null;
    private _width?: number;
    private _filterType?: "text" | "select" | "date";
    private _filterPlaceholder?: string;
    private _customFilter?: Function;

    constructor (header: GridHeader) {
        this._id = header.id;
        this._text = header.text;
        this._type = header.type;
        this._align = header.align;
        this._sortable = header.sortable;
        this._sortFunction = header.sortFunction;
        this._sortDirection = header.sortDirection;
        this._width = header.width;
        this._filterType = header.filterType;
        this._filterPlaceholder = header.filterPlaceholder;
        this._customFilter = header.customFilter;
    }

    public get id(): string {
        return this._id;
    }

    public get text(): string {
        return this._text;
    }

    public get filterType(): "text" | "select" | "date" | null {
        return this._filterType ?? null;
    }

    public get filterPlaceholder(): string | null {
        return this._filterPlaceholder ?? null;
    }

    public get sortable(): boolean {
        return this._sortable ?? false;
    }

    public get sortDirection(): "asc" | "desc" | null {
        return this._sortDirection ?? null;
    }

    public get textAlignmentClass(): string | null {
        switch (this._align) {
            case "left":
                return "text-left";
            case "center":
                return "text-center";
            case "right":
                return "text-right";
            default:
                return null;
        }
    }

    public get headerWidth(): string | null {
        return this._width ? `width: ${this._width}px` : null;
    }

    public sortClicked (gridConfig : GridConfiguration): void {
        if(!this._sortable) return;
        this._sortDirection = this._sortDirection === "asc" ? "desc" : "asc";

        this._resetSortDirection(gridConfig, [this._id]);
        this._sortFunction ? this.useCustomSorting(gridConfig) : this.useDefaultSorting(gridConfig);
    }

    private useDefaultSorting (gridConfig : GridConfiguration) : void {
        gridConfig.data.sort((a : GridRow, b : GridRow) => {
            if(a.data[this._id] < b.data[this._id]) return this._sortDirection === 'asc' ? 1 :  -1;
            if(a.data[this._id] > b.data[this._id]) return this._sortDirection === 'asc' ? -1 :  1;
            return 0;
        });
    }

    private useCustomSorting (gridConfig : GridConfiguration) : void {
        if(this._sortFunction && gridConfig){
            gridConfig.data.sort(this._sortFunction);
        }
    }

    private _resetSortDirection (gridConfig : GridConfiguration, toExclude : string[] = []) : void {
        gridConfig.header.forEach((h : GridHeader) => {
            if(!toExclude.includes(h.id)){
                h.sortDirection = null;
            }
        })
    }

    public  getSelectableItems(gridConfig : GridConfiguration) : SelectItemInterface[] {
        const data : SelectItemInterface[] = [];
        gridConfig.data.forEach((d : GridRow) => {
            if(!data.find((v : any) => v.value === d.data[this._id])){
                data.push({value: d.data[this._id], label: d.data[this._id]});
            }
        });
        return data;
    }

    public filterByValue (filters : GridFilter [], value : string){
        const exist = filters.find((f : any) => f.cellId === this._id);
        if(exist && value === '') filters.splice(filters.indexOf(exist), 1);
        exist ? exist.value = value : filters.push({ cellId: this._id , value });
    }
}