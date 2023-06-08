import {IconLibraryType} from "@/components/VrxIcon/IconLibrary.ts";

export interface VrxTreeItemInterface<T> {
    id: string,
    label: string,
    children?: VrxTreeItemInterface<T>[]
    data?: T
    icon?: IconLibraryType
    checked?: boolean
    expanded?: boolean
    selectable?: boolean
}
