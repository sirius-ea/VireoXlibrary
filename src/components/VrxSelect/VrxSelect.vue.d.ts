import { ComponentVariant } from '../styles';
import { IconLibraryType } from '../VrxIcon/IconLibrary';
import type { SelectItemInterface } from '..';
declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    label?: string;
    placeholder?: string;
    icon?: IconLibraryType;
    disabled?: boolean;
    invalid?: boolean;
    helperText?: string;
    listData: SelectItemInterface[];
    modelValue: SelectItemInterface[];
    variant?: ComponentVariant;
    multiselect?: boolean;
    height?: number;
    onSelect?: (item: SelectItemInterface) => void;
    onClear?: () => void;
    searchable?: boolean;
    searchPlaceholder?: string;
    showRemove?: boolean;
    elementClass?: string;
}>, {
    disabled: boolean;
    invalid: boolean;
    multiselect: boolean;
    showRemove: boolean;
    label: string;
    helperText: string;
    placeholder: string;
    variant: string;
    searchPlaceholder: string;
}>, {}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    label?: string;
    placeholder?: string;
    icon?: IconLibraryType;
    disabled?: boolean;
    invalid?: boolean;
    helperText?: string;
    listData: SelectItemInterface[];
    modelValue: SelectItemInterface[];
    variant?: ComponentVariant;
    multiselect?: boolean;
    height?: number;
    onSelect?: (item: SelectItemInterface) => void;
    onClear?: () => void;
    searchable?: boolean;
    searchPlaceholder?: string;
    showRemove?: boolean;
    elementClass?: string;
}>, {
    disabled: boolean;
    invalid: boolean;
    multiselect: boolean;
    showRemove: boolean;
    label: string;
    helperText: string;
    placeholder: string;
    variant: string;
    searchPlaceholder: string;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    label: string;
    placeholder: string;
    helperText: string;
    invalid: boolean;
    variant: ComponentVariant;
    searchPlaceholder: string;
    multiselect: boolean;
    showRemove: boolean;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
