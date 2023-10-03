export type VrxTreeNode = {
    id: string;
    text: string;
    icon?: string;
    selected: boolean;
    children: VrxTreeNode[];
};