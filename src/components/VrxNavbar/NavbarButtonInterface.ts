import {IconLibraryType} from "@/components/VrxIcon/IconLibrary.ts";

export interface NavbarButtonInterface {
    text: string;
    icon?: IconLibraryType;
    action?: () => void;
    selected: boolean;
    children?: NavbarSubButtonInterface[];
}

export interface NavbarSubButtonInterface {
    text: string;
    description?: string;
    icon?: IconLibraryType;
    action?: () => void;
    children?: NavbarButtonInterface[];
}