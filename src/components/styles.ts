import colors from "tailwindcss/colors";
import {IconLibraryType} from "@/components/VrxIcon/IconLibrary.ts";

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

export const {theme} = resolveConfig(tailwindConfig)

export type ComponentVariant = 'default' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple';

export function inputStyles (invalid : boolean, disabled : boolean, iconType? : IconLibraryType){
    let input : string = "vrxinput-input-style"
    let label : string = "vrxinput-label-style"
    let helperText : string = "vrxinput-helperText-style"

    //TODO: Fix RecursiveKeyValuePair<string, string>
    let icon : string = theme && theme.colors ? theme.colors.icon as string : colors.gray[400];

    if(invalid){
        input = "vrxinput-input-invalid-style"
        label = "vrxinput-label-invalid-style"
        helperText = "vrxinput-helperText-invalid-style"
        icon = theme && theme.colors ? theme.colors['icon-invalid'] as string : colors.red[600];
    }

    if(disabled){
        input = "vrxinput-input-disabled-style"
        label = "vrxinput-label-disabled-style"
        helperText = "vrxinput-helperText-disabled-style"
        icon = theme && theme.colors ? theme.colors['icon-disabled'] as string : colors.gray[300];
    }

    if(iconType){
        input += " pl-10"
    }

    return { input, label, helperText, icon };
}

export function selectStyles (disabled: boolean, invalid: boolean, variant : string){
    const selectedItem  = { // TODO: Custom text color?
        'default': `text-content-dark bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`,
        'alternative': `text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`,
        'dark': `text-white bg-gray-800 hover:bg-gray-900  focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`,
        'light': `text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`,
        'green': `text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`,
        'red': `text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`,
        'yellow': `text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-900`,
        'purple': `text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900`,
    }

    const selectedIconColor = {
        // @ts-ignore
        'default': theme?.colors?.primary["700"],
        'blue': colors.blue[700],
        'alternative': colors.gray[400],
        'dark': colors.gray[900],
        'light': colors.gray[400],
        'green': colors.green[700],
        'red': colors.red[700],
        'yellow': colors.yellow[400],
        'purple': colors.purple[700],
    }

    let dropdownItem : string = "vrxselect-dropdown-item"
    let select : string = "vrxselect-input-style"
    let label: string = "vrxselect-label-style";
    let helperText : string = "vrxselect-helperText-style";
    let placeholder : string = "vrxselect-placeholder-style";
    let dropdown : string = "vrxselect-dropdown-style"
    let icon: string = theme && theme.colors ? theme.colors.icon as string : colors.gray[400];
    // @ts-ignore
    const selected = selectedItem[variant];
    // @ts-ignore
    const selectedIcon = selectedIconColor[variant];

    if(disabled){
        select = "vrxselect-input-disabled-style"
        label = "vrxselect-label-disabled-style"
        helperText = "vrxselect-helperText-disabled-style"
        placeholder = "vrxselect-placeholder-disabled-style"
        icon= theme && theme.colors ? theme.colors['icon-disabled'] as string : colors.gray[300];
    }

    if(invalid){
        select = "vrxselect-input-invalid-style"
        label = "vrxselect-label-invalid-style"
        helperText = "vrxselect-helperText-invalid-style"
        placeholder = "vrxselect-placeholder-invalid-style"
        dropdown = "vrxselect-dropdown-invalid-style"
        icon = theme && theme.colors ? theme.colors['icon-invalid'] as string : colors.red[600];
    }

    return { select, label, helperText, icon, selected, selectedIcon, dropdown, dropdownItem, placeholder };
}

export function toggleStyle(variant : ComponentVariant, size: 'sm' | 'md' | 'lg', disabled: boolean){

    let toggleColor = {
        'default': "vrxtoggle-default-style",
        'red' : "vrxtoggle-red-style",
        'green' : "vrxtoggle-green-style",
        'purple' : "vrxtoggle-purple-style",
        'yellow' : "vrxtoggle-yellow-style",
    }

    let toggleSizes = {
        'sm' : 'vrxtoggle-sm-style',
        'md' : 'vrxtoggle-md-style',
        'lg' : 'vrxtoggle-lg-style'
    }
    let label : string = disabled ? "vrxtoggle-label-disabled-style" : "vrxtoggle-label-style";

    // @ts-ignore
    let variantSelected = toggleColor[variant] ?? toggleColor['default'];
    disabled ? variantSelected += ' vrxtoggle-disabled-toggle' : null;

    // @ts-ignore
    const sizeSelected = toggleSizes[size] ?? toggleSizes['md'];

    const toggle : string = variantSelected + " vrxtoggle-style " + sizeSelected;
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

    const navbarButton: string = "rounded md:border-0 md:p-0 " + selected ?
        "vrxnavbar-navbarbutton-selected-style" :
        "vrxnavbar-navbarbutton-unselected-style";
    return { navbarButton, dropdownStyle };
}
