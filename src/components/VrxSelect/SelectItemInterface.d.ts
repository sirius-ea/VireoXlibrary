import { IconLibraryType } from '../VrxIcon/IconLibrary.ts';
export interface SelectItemInterface {
    value: string | number;
    label: string;
    icon?: IconLibraryType;
}
