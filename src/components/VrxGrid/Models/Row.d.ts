import { GridHeader, GridRow } from '../../../components/VrxGrid/GridConfiguration.ts';
export declare class Row {
    private readonly _id;
    private readonly _textColor;
    private readonly _backgroundColor;
    private readonly _data;
    private readonly _filters;
    private readonly _selectedRows;
    private readonly _selectable;
    private readonly _multiselect;
    private readonly _headerConfig;
    private readonly _componentProps;
    constructor(row: GridRow, filters: any, selectedRows: any, selectable: boolean, multiselect: boolean, headerConfig: GridHeader[]);
    /**
     * Returns the content of a cell given the header ID
     * @param id
     */
    getCellContent(id: string): any;
    /**
     * Returns the text color of the row
     */
    get textColor(): string | undefined;
    /**
     * Returns the component props of the row
     */
    get componentProps(): any;
    /**
     * Returns the background color of the row
     */
    get backgroundColor(): string | undefined;
    /**
     * Returns the ID of the row
     */
    get id(): string;
    /**
     * Returns the data of the row
     */
    get data(): any;
    /**
     * Returns if the row is selectable
     */
    get selectable(): boolean;
    /**
     * Action to be executed when the row is clicked
     */
    rowClicked(): void;
    /**
     * Returns if the row is filtered and must be hidden
     */
    isFiltered(): boolean;
    /**
     * Returns if the row is in the selected ones
     */
    isSelected(): boolean;
    /**
     * Returns if the row has a template
     * @param id
     */
    hasTemplate(id: string): boolean;
    getProps(id: string): any;
    /**
     * Default filter function
     * @param filter
     * @private
     */
    private _defaultFilter;
}
