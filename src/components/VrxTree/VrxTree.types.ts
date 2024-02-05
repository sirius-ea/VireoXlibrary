import {VueElementConstructor} from "vue";

export type VrxTreeNode = {
    id: string;
    text: string;
    icon?: string;
    selected: boolean;
    open?: boolean;
    children: VrxTreeNode[];
    userData?: any;
    class?: any;
    asComponent?: boolean;
    component?: string | object;
    componentProps?: () => any;
    componentSlots?: any;
    rightSlot?: boolean;
    rightComponent?: string | object;
    rightComponentProps?: () => any;
};
