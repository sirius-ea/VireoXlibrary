import {GridConfiguration, GridFilter, GridHeader, GridRow} from "@/components/VrxGrid/GridConfiguration.ts";
import type {SelectItemInterface} from "@/components/VrxSelect";
import {IconLibraryType} from "@/components/VrxIcon/IconLibrary.ts";

export class Header {
    private readonly _id: string;
    private readonly _text: string;
    private _type: "text" | "component" | "static" | "boolean" | "button" | undefined;
    private readonly _align?: "left" | "center" | "right";
    private readonly _sortable?: boolean;
    private readonly _sortFunction?: ((a : GridRow, b : GridRow) => number) | undefined;
    private _sortDirection?: "asc" | "desc" | undefined;
    private readonly _width?: number | undefined;
    private readonly _filterType?: "text" | "select" | "date" | undefined;
    private readonly _filterPlaceholder?: string | undefined;
    private _customFilter?: Function | undefined;
    private _headerConfig?: GridHeader;
    private readonly _icon?: IconLibraryType | undefined;
    private _colspan?: number | undefined;

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
        this._headerConfig = header;
        this._icon = header.icon;
        this._colspan = header.colspan;
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

    public get icon(): IconLibraryType | null {
        return this._icon ?? null;
    }

    public get colspan(): number | undefined {
        return this._colspan ?? undefined;
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

    public get width(): number | undefined {
        return this._width;
    }

    public sortClicked (gridConfig : GridConfiguration, gridData: GridRow[]): void {
        if(!this._sortable) return;
        this._sortDirection = this._sortDirection === "asc" ? "desc" : "asc";
        this._headerConfig!.sortDirection = this._sortDirection;

        this._resetSortDirection(gridConfig, [this._id]);
        this._sortFunction ? this._useCustomSorting(gridData) : this._useDefaultSorting(gridData);
    }

    private _useDefaultSorting (gridData: GridRow[]) : void {
        gridData.sort((a : GridRow, b : GridRow) => {
            if(a.data[this._id] < b.data[this._id]) return this._sortDirection === 'asc' ? 1 :  -1;
            if(a.data[this._id] > b.data[this._id]) return this._sortDirection === 'asc' ? -1 :  1;
            return 0;
        });
    }

    private _useCustomSorting (gridData: GridRow[]) : void {
        if(this._sortFunction && gridData){
            gridData.sort(this._sortFunction);
        }
    }

    private _resetSortDirection (gridConfig : GridConfiguration, toExclude : string[] = []) : void {
        gridConfig.header.forEach((h : GridHeader) => {
            if(!toExclude.includes(h.id)){
                h.sortDirection = undefined;
            }
        })
    }

    public  getSelectableItems(gridData: GridRow[]) : SelectItemInterface[] {
        const data : SelectItemInterface[] = [];
        if(!gridData) return data;
        gridData.forEach((d : GridRow) => {
            if(!data.find((v : any) => v.value === d.data[this._id]) && d.data[this._id] !== null && d.data[this._id] !== undefined){
                if(typeof d.data[this._id] === 'boolean'){
                    data.push({value: d.data[this._id], label: d.data[this._id] ? 'true' : 'false'})
                } else {
                    data.push({value: d.data[this._id], label: d.data[this._id]});
                }
            }
        });
        return data.sort((a : SelectItemInterface, b : SelectItemInterface) => a.label.localeCompare(b.label));
    }

    public filterByValue (filters : GridFilter [], value : string){
        const exist = filters.find((f) => f.cellId === this._id);
        if(exist && value === '') filters.splice(filters.indexOf(exist), 1);
        exist ? exist.value = value : filters.push({ cellId: this._id , value });
    }
}
