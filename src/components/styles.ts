import colors from "tailwindcss/colors";
import {IconLibraryType} from "@/components/VrxIcon/IconLibrary.ts";

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

export const {theme} = resolveConfig(tailwindConfig)

export type ComponentVariant = 'default' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple';
export type inputCustomColorType = {
    input: string;
    text?: string;
    label: string,
    helperText: string,
    icon: string,
}

export type InputCustomColors = {
    base: inputCustomColorType
    invalid?: inputCustomColorType
    disabled?: inputCustomColorType
}

export function inputStyles (invalid : boolean, disabled : boolean, iconType? : IconLibraryType){
    let input : string = "outline-none bg-background-lightMode border border-primary-300 text-text-lightMode dark:text-text-darkMode focus:ring-secondary-500 focus:border-secondary-500 bg-background-lightMode dark:bg-background-darkMode dark:border-primary-600 dark:placeholder-text-darkMode/30 dark:placeholder-text-darkMode/30 dark:placeholder-text-darkMode dark:focus:ring-secondary-500 dark:focus:border-secondary-500"
    let label : string = "text-text-lightMode dark:text-text-darkMode"
    let helperText : string = "text-text-lightMode/60 dark:text-text-darkMode/60"
    // @ts-ignore
    let icon : string = theme.colors.neutral['400'];

    if(invalid){
        input = "bg-error-50 border border-error-500 text-error-900 placeholder-error-700 focus:ring-error-500 dark:bg-primary-700 focus:border-error-500 dark:text-error-500 dark:placeholder-error-500 dark:border-error-500"
        label = "text-error-700 dark:text-error-500"
        helperText = "text-error-600 dark:text-error-500"
        // @ts-ignore
        icon = theme && theme.colors && theme.colors.error? theme.colors.error["600"] : colors.red[600];
    }

    if(disabled){
        input = "bg-background-lightMode/90 dark:bg-background-darkMode/80 border border-primary-50 text-text-lightMode/60 dark:text-text-darkMode/60"
        label = "text-text-lightMode/60 dark:text-text-darkMode/60"
        helperText = "text-text-lightMode/40 dark:text-text-darkMode/40"
        // @ts-ignore
        icon = theme.colors.neutral["300"];
    }

    if(iconType){
        input += " pl-10"
    }

    return { input, label, helperText, icon };
}

export function selectStyles (disabled: boolean, invalid: boolean, variant : string){
    const selectedItem  = { // TODO: Custom text color?
        'default': `text-text-darkMode bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`,
        'alternative': `text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`,
        'dark': `text-white bg-gray-800 hover:bg-gray-900  focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`,
        'light': `text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`,
        'green': `text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`,
        'red': `text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`,
        'yellow': `text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-900`,
        'purple': `text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900`,
    }

    const selectedIconColor = {
        //@ts-ignore
        'default': theme.colors.primary[700],
        'blue': colors.blue[700],
        'alternative': colors.gray[400],
        'dark': colors.gray[900],
        'light': colors.gray[400],
        'green': colors.green[700],
        'red': colors.red[700],
        'yellow': colors.yellow[400],
        'purple': colors.purple[700],
    }

    let dropdownItem : string = "hover:bg-background-lightMode/80 dark:hover:background-darkMode/80"
    let select : string = "bg-background-lightMode border border-primary-300 text-text-lightMode focus:ring-primary-500 focus:border-primary-500 dark:bg-background-darkMode dark:border-primary-600 dark:placeholder-text-darkMode/40 placeholder-text-lightMode/40 dark:text-text-darkMode dark:focus:ring-secondary-500 dark:focus:border-secondary-500"
    let label: string = "text-text-lightMode dark:text-text-darkMode";
    let helperText : string = "text-text-lightMode/40 dark:text-text-darkMode/40";
    let placeholder : string = "text-text-lightMode/30 dark:text-text-darkMode/30";
    let dropdown : string = "bg-background-lightMode border border-primary-300 text-text-lightMode dark:bg-background-darkMode dark:border-primary-600 dark:text-text-darkMode"
    // @ts-ignore
    let icon: string = theme.colors.neutral[400];
    // @ts-ignore
    const selected = selectedItem[variant];
    // @ts-ignore
    const selectedIcon = selectedIconColor[variant];

    if(disabled){
        select = "bg-background-lightMode/90 dark:bg-background-darkMode/80 border border-primary-50 text-text-lightMode/60 dark:text-text-darkMode/60"
        label = "text-text-lightMode/60 dark:text-text-darkMode/60"
        helperText = "text-text-lightMode/30 dark:text-text-darkMode/30"
        placeholder = "text-text-lightMode/20 dark:text-text-darkMode/20"
        // @ts-ignore
        icon= theme.colors.neutral[300];
    }

    if(invalid){
        select = "bg-error-50 border border-error-500 text-error-900 placeholder-error-700 focus:ring-error-500 dark:bg-primary-700 focus:border-error-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
        label = "text-error-700 dark:text-error-500"
        helperText = "text-error-600 dark:text-error-500"
        placeholder = "text-error-600 dark:text-error-600"
        dropdown = "bg-error-50 border border-error-500 text-error-900 dark:bg-background-darkMode bg-background-lightMode dark:border-error-500 dark:text-error-500"
        // @ts-ignore
        icon = theme.colors.error["600"];
    }

    return { select, label, helperText, icon, selected, selectedIcon, dropdown, dropdownItem, placeholder };
}

export function toggleStyle(variant : ComponentVariant, size: 'sm' | 'md' | 'lg', disabled: boolean){

    let toggleColor = {
        'default': "bg-neutral-200 rounded-full peer dark:bg-neutral-600 peer-checked:after:translate-x-full peer-checked:after:border-neutral-50 after:content-[''] after:absolute after:bg-neutral-50 after:border-neutral-300 after:border after:rounded-full after:transition-all dark:border-neutral-600 peer-checked:bg-primary-600",
        'red' : "bg-neutral-200 rounded-full peer dark:bg-neutral-600 peer-checked:after:translate-x-full peer-checked:after:border-neutral-50 after:content-[''] after:absolute after:bg-neutral-50 after:border-neutral-300 after:border after:rounded-full after:transition-all dark:border-neutral-600 peer-checked:bg-red-600",
        'green' : "bg-neutral-200 rounded-full peer dark:bg-neutral-600 peer-checked:after:translate-x-full peer-checked:after:border-neutral-50 after:content-[''] after:absolute after:bg-neutral-50 after:border-neutral-300 after:border after:rounded-full after:transition-all dark:border-neutral-600 peer-checked:bg-green-600",
        'purple' : "bg-neutral-200 rounded-full peer dark:bg-neutral-600 peer-checked:after:translate-x-full peer-checked:after:border-neutral-50 after:content-[''] after:absolute after:bg-neutral-50 after:border-neutral-300 after:border after:rounded-full after:transition-all dark:border-neutral-600 peer-checked:bg-purple-600",
        'yellow' : "bg-neutral-200 rounded-full peer dark:bg-neutral-600 peer-checked:after:translate-x-full peer-checked:after:border-neutral-50 after:content-[''] after:absolute after:bg-neutral-50 after:border-neutral-300 after:border after:rounded-full after:transition-all dark:border-neutral-600 peer-checked:bg-yellow-400",
    }

    let toggleSizes = {
        'sm' : 'w-9 h-5 after:top-[2px] after:left-[2px] after:h-4 after:w-4',
        'md' : 'w-11 h-6 after:top-[2px] after:left-[2px] after:h-5 after:w-5',
        'lg' : 'w-14 h-7 after:top-0.5 after:left-[4px] after:h-6 after:w-6'
    }
    let label : string = disabled ? "text-text-lightMode/60 dark:text-text-darkMode/60" : "text-text-lightMode dark:text-text-darkMode";

    // @ts-ignore
    let variantSelected = toggleColor[variant] ?? toggleColor['default'];
    disabled ? variantSelected += ' disabled-toggle' : null;

    // @ts-ignore
    const sizeSelected = toggleSizes[size] ?? toggleSizes['md'];

    const toggle : string = variantSelected + " " + sizeSelected;
    return { toggle, label };
}

export function navbarButtonStyle(selected : boolean, hasChildren : boolean){

    let dropdownStyle = {
        mainContainer: "dropdown-half-width",
        leftPanel: 'w-full',
        rightPanel: 'w-0',
    };

    if(hasChildren){
        dropdownStyle = {
            mainContainer: "dropdown-full-width",
            leftPanel: 'w-1/2',
            rightPanel: 'w-1/2',
        };
    }

    const navbarButton: string =  selected ?
        "text-text-darkMode bg-secondary-700 rounded md:bg-transparent md:text-secondary-700 md:p-0 dark:text-text-darkMode md:dark:text-secondary-500" :
        "text-primary-900 rounded hover:bg-primary-100 md:hover:bg-transparent md:border-0 md:hover:text-secondary-700 md:p-0 dark:text-text-darkMode md:dark:hover:text-secondary-500 dark:hover:bg-primary-700 dark:hover:text-text-darkMode md:dark:hover:bg-transparent";
    return { navbarButton, dropdownStyle };
}

export function buttonsGroupStyle (){
    const firstButton : string  = "text-text-lightMode dark:text-text-darkMode bg-primary-50 border border-primary-200 rounded-l-lg hover:bg-primary-100 hover:text-secondary-700 focus:z-10  focus:text-secondary-700 dark:bg-primary-700 dark:border-primary-600 dark:text-text-darkMode dark:hover:text-text-darkMode dark:hover:bg-primary-600 dark:focus:text-text-darkMode";
    const middleButton : string = "text-primary-900 bg-primary-50 border-t border-b border-r border-primary-200 hover:bg-primary-100 hover:text-secondary-700 focus:z-10 focus:text-secondary-700 dark:bg-primary-700 dark:border-primary-600 dark:text-text-darkMode dark:hover:text-text-darkMode dark:hover:bg-primary-600 dark:focus:text-text-darkMode";
    const lastButton : string = "text-primary-900 bg-primary-50 border-t border-b border-r border-primary-200 rounded-r-md hover:bg-primary-100 hover:text-secondary-700 focus:z-10 focus:text-secondary-700 dark:bg-primary-700 dark:border-primary-600 dark:text-text-darkMode dark:hover:text-text-darkMode dark:hover:bg-primary-600 dark:focus:text-text-darkMode";
    const singleButton : string = "text-primary-900 bg-primary-50 border border-primary-200 rounded-md hover:bg-primary-100 hover:text-secondary-700 focus:z-10 focus:text-secondary-700 dark:bg-primary-700 dark:border-primary-600 dark:text-text-darkMode dark:hover:text-text-darkMode dark:hover:bg-primary-600 dark:focus:text-text-darkMode"


    return { firstButton, middleButton, lastButton, singleButton };
}