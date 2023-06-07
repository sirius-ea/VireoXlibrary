import colors from "tailwindcss/colors";
import {IconLibraryType} from "@/components/VrxIcon/IconLibrary.ts";

export type ComponentVariant = 'default' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple';
export function inputStyles (invalid : boolean, disabled : boolean, iconType? : IconLibraryType){
    let input : string = "bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    let label : string = "text-gray-900 dark:text-white"
    let helperText : string = "text-gray-500 dark:text-gray-300"
    let icon : string = colors.gray[400];

    if(invalid){
        input = "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
        label = "text-red-700 dark:text-red-500"
        helperText = "text-red-600 dark:text-red-500"
        icon = colors.red[600]
    }

    if(disabled){
        input = "bg-gray-10 border border-gray-00 text-gray-300"
        label = "text-gray-300 dark:text-white"
        helperText = "text-gray-300 dark:text-gray-300"
        icon = colors.gray[300]
    }

    if(iconType){
        input += " pl-10"
    }

    return { input, label, helperText, icon };
}

export function selectStyles (disabled: boolean, invalid: boolean, variant : string){
    const selectedItem  = {
        'default': `text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`,
        'alternative': `text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`,
        'dark': `text-white bg-gray-800 hover:bg-gray-900  focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`,
        'light': `text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`,
        'green': `text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`,
        'red': `text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`,
        'yellow': `text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-900`,
        'purple': `text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900`,
    }

    const selectedIconColor = {
        'default': colors.blue[700],
        'alternative': colors.gray[400],
        'dark': colors.gray[900],
        'light': colors.gray[400],
        'green': colors.green[700],
        'red': colors.red[700],
        'yellow': colors.yellow[400],
        'purple': colors.purple[700],
    }

    // @ts-ignore
    let dropdownItem : string = "hover:bg-gray-100 dark:hover:bg-gray-800"
    let select : string = "bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    let label: string = "text-gray-900 dark:text-white";
    let helperText : string = "text-gray-500 dark:text-gray-300";
    let placeholder : string = "text-gray-500 dark:text-gray-300";
    let dropdown : string = "bg-white border border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    let icon: string = colors.gray[400];
    // @ts-ignore
    const selected = selectedItem[variant];
    // @ts-ignore
    const selectedIcon = selectedIconColor[variant];

    if(disabled){
        select = "bg-gray-10 border border-gray-00 text-gray-300"
        label = "text-gray-300 dark:text-white"
        helperText = "text-gray-300 dark:text-gray-300"
        placeholder = "text-gray-300 dark:text-gray-300"
        icon = colors.gray[300]
    }

    if(invalid){
        select = "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
        label = "text-red-700 dark:text-red-500"
        helperText = "text-red-600 dark:text-red-500"
        placeholder = "text-red-600 dark:text-red-600"
        dropdown = "bg-red-50 border border-red-500 text-red-900 dark:bg-gray-700 dark:border-red-500 dark:text-red-500"
        icon = colors.red[600]
    }

    return { select, label, helperText, icon, selected, selectedIcon, dropdown, dropdownItem, placeholder };
}

