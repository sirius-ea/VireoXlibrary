import { IconLibraryType } from '../components/VrxIcon/IconLibrary.ts';
export type ComponentVariant = 'default' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple';
export declare function inputStyles(invalid: boolean, disabled: boolean, iconType?: IconLibraryType): {
    input: string;
    label: string;
    helperText: string;
    icon: string;
};
export declare function selectStyles(disabled: boolean, invalid: boolean, variant: string): {
    select: string;
    label: string;
    helperText: string;
    icon: string;
    selected: any;
    selectedIcon: any;
    dropdown: string;
    dropdownItem: string;
    placeholder: string;
};
export declare function toggleStyle(variant: ComponentVariant, size: 'sm' | 'md' | 'lg'): {
    toggle: string;
    label: string;
};
