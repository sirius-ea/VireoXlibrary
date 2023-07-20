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

export function toggleStyle(variant : ComponentVariant, size: 'sm' | 'md' | 'lg'){

    let toggleColor = {
        'default': "bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-blue-600",
        'red' : "bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-red-600",
        'green' : "bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-green-600",
        'purple' : "bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-purple-600",
        'yellow' : "bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"
    }

    let toggleSizes = {
        'sm' : 'w-9 h-5 after:top-[2px] after:left-[2px] after:h-4 after:w-4',
        'md' : 'w-11 h-6 after:top-[2px] after:left-[2px] after:h-5 after:w-5',
        'lg' : 'w-14 h-7 after:top-0.5 after:left-[4px] after:h-6 after:w-6'
    }
    let label : string = "text-gray-900 dark:text-white"

    // @ts-ignore
    const variantSelected = toggleColor[variant] ?? toggleColor['default'];
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
        "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" :
        "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
    return { navbarButton, dropdownStyle };
}

export function buttonsGroupStyle (){
    const firstButton : string  = "text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:text-white";
    const middleButton : string = "text-gray-900 bg-white border-t border-b border-r border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:text-white";
    const lastButton : string = "text-gray-900 bg-white border-t border-b border-r border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:text-white";
    const singleButton : string = "text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:text-white"


    return { firstButton, middleButton, lastButton, singleButton };
}