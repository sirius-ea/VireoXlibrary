import { IconLibraryType } from '../../components/VrxIcon/IconLibrary.ts';
import { Component } from './vue/dist/vue.esm-bundler.js';
export type NavbarButton = {
    text: string;
    icon?: IconLibraryType | string;
    component?: ComponentInterface;
    children?: NavbarFirstLayerButton[];
};
export type NavbarFirstLayerButton = {
    text: string;
    description?: string;
    icon?: IconLibraryType | string;
    component?: ComponentInterface;
    children?: NavbarFirstLayerButton[];
};
export type NavbarSecondLayerButton = {
    text: string;
    component?: ComponentInterface;
};
export type ComponentInterface = {
    name: Component;
    props: any;
};
