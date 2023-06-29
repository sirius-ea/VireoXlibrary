import {IconLibraryType} from "@/components/VrxIcon/IconLibrary.ts";

export interface IVrxTreeItem {
    id: string,
    label: string,
    children: IVrxTreeItem[]
    userdata: any
    state: IVrxTreeState,
    config?: IVrxTreeConfig
}

interface IVrxTreeConfig {
    selectable?: boolean
    icon?: IconLibraryType
    baseSize?: number
}

interface IVrxTreeState {
    checked: boolean
    indeterminate: boolean
    expanded: boolean
}


export interface IVrxTreeSelectedItem {
    id: string,
    data?: any | IVrxTreeItem
}
