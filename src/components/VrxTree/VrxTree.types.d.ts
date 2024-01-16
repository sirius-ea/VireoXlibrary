export type VrxTreeNode = {
    id: string;
    text: string;
    icon?: string;
    selected: boolean;
    open?: boolean;
    children: VrxTreeNode[];
    userData?: any;
    class?: any;
};
