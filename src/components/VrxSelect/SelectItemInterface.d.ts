import { IconLibraryType } from '../../components/VrxIcon/IconLibrary.ts';
export interface SelectItemInterface {
    value: string | number;
    label: string;
    icon?: IconLibraryType;
}
