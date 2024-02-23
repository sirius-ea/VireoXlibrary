export type VrxTreeNode<T> = {
    id: string;
    text: string;
    icon?: string;
    selected: boolean;
    open: boolean;
    children: VrxTreeNode<T>[];
    userData?: T;
    class?: any;
    filtered?: boolean;
    asComponent?: boolean;
    component?: string | object;
    componentProps?: () => any;
    componentSlots?: any;
    rightSlot?: boolean;
    rightComponent?: string | object;
    rightComponentProps?: () => any;
};
export interface IVrxTreeUseCase<T> {
    getSelectedNodes: () => VrxTreeNode<T>[];
    getNodeByText: (text: string) => VrxTreeNode<T> | undefined;
    getNodeById: (nodeId: string) => VrxTreeNode<T> | null;
    getNodePath: (nodeId: string) => String[];
    removeNodeById: (nodeId: string, isParent?: boolean) => void;
    addNode: (nodeId: string) => void;
    removeNode: (node: VrxTreeNode<T>) => void;
    flattenTree: (node: VrxTreeNode<T>) => VrxTreeNode<T>[];
    getParentNode: (toFind: VrxTreeNode<T>) => VrxTreeNode<T> | null;
    clearSelectedNodes: () => void;
    setSelectedNode: (nodeId: string, select: boolean) => void;
    expandAll: () => void;
    collapseAll: () => void;
}
