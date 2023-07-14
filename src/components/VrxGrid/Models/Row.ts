import {GridHeader, GridRow} from "@/components/VrxGrid/GridConfiguration.ts";
import {computed} from "vue";

export class Row {
    private readonly _id: string;
    private readonly _textColor: string | undefined;
    private readonly _backgroundColor: string | undefined;
    private readonly _data: any;
    private readonly _filters: {cellId: string, value: string}[];
    private readonly _selectedRows: Row[];
    private readonly _selectable: boolean;
    private readonly _multiselect: boolean;
    private readonly _headerConfig: GridHeader[];

    constructor(row : GridRow, filters: any, selectedRows: any, selectable: boolean, multiselect: boolean, headerConfig: GridHeader[]) {
        this._id = row.id;
        this._textColor = row.textColor;
        this._backgroundColor = row.backgroundColor;
        this._data = row.data;
        this._filters = filters;
        this._selectedRows = selectedRows;
        this._selectable = selectable;
        this._multiselect = multiselect;
        this._headerConfig = headerConfig;
    }

    /**
     * Returns the content of a cell given the header ID
     * @param id
     */
    public getCellContent (id: string) : any {
        return this._data[id];
    }

    /**
     * Returns the text color of the row
     */
    public get textColor () : string | undefined {
        return this._textColor;
    }

    /**
     * Returns the background color of the row
     */
    public get backgroundColor () : string | undefined {
        return this._backgroundColor;
    }

    /**
     * Returns the ID of the row
     */
    public get id () : string {
        return this._id;
    }

    /**
     * Returns the data of the row
     */
    public get data () : any {
        return this._data;
    }

    /**
     * Returns if the row is selectable
     */
    public get selectable () : boolean {
        return this._selectable;
    }

    /**
     * Action to be executed when the row is clicked
     */
    public rowClicked () : void {
        const included = this._selectedRows.find(rowIn => rowIn.id === this._id);
        if(!this._multiselect){
            if(included){
                const index = this._selectedRows.indexOf(included);
                this._selectedRows.splice(index, 1);
                return;
            }
            this._selectedRows.splice(0, this._selectedRows.length);
            this._selectedRows.push(this);
            return;
        }

        if(!included)
            this._selectedRows.push(this);
        else {
            const index = this._selectedRows.indexOf(included);
            this._selectedRows.splice(index, 1);
        }
    }

    /**
     * Returns if the row is filtered and must be hidden
     */
    public isFiltered (){
        let isFiltered : boolean = false;
        this._filters.forEach(filter => {
            const customFilter = this._headerConfig.find(cell => cell.id === filter.cellId)?.customFilter;
            !isFiltered ? isFiltered = customFilter ? customFilter(this, filter) : this._defaultFilter(filter) : null;
        });
        return isFiltered;
    }

    /**
     * Returns if the row is in the selected ones
     */
    public isSelected () : boolean {
        const included = this._selectedRows.find(rowIn => rowIn.id === this._id);
        return !!included;
    }

    /**
     * Default filter function
     * @param filter
     * @private
     */
    private _defaultFilter(filter : {cellId: string, value: string}) : boolean {
        const value = this._data[filter.cellId].toString().toLowerCase();
        return (!value.includes(filter.value.toLowerCase()));
    }
}