import {IconLibraryType} from "@/components/VrxIcon/IconLibrary.ts";
import {Component} from "vue";

export interface NavbarButtonInterface {
    text: string;
    icon?: IconLibraryType;
    component?: ComponentInterface;
    selected: boolean;
    children?: NavbarSubButtonInterface[];
}

export interface NavbarSubButtonInterface {
    text: string;
    description?: string;
    icon?: IconLibraryType;
    component?: ComponentInterface;
    children?: NavbarSubButtonInterface[];
}

export interface ComponentInterface {
    name: Component,
    props: any
}