export type VrxTreeNode = {
    text: string;
    icon?: string;
    selected: boolean;
    children: VrxTreeNode[];
};