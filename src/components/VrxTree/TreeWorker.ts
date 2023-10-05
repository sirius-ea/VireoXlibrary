import {VrxTreeNode} from "@/components/VrxTree/VrxTree.types.ts";

self.onmessage = function (e){
    const data = JSON.parse(e.data);

    manageSelectedNodesWR(data.node, data.value ? "add" : "remove", data.selectedNodes);
    selectAllChildrenWR(data.node, data.value, data.selectedNodes);

    self.postMessage(data.selectedNodes);
}


const selectAllChildrenWR = (node: VrxTreeNode, value: boolean, selectedNodes: string[]) => {
    node.children.forEach((child: VrxTreeNode) => {
        value ? manageSelectedNodesWR(child, "add", selectedNodes) : manageSelectedNodesWR(child, "remove", selectedNodes);
        selectAllChildrenWR(child, value, selectedNodes);
    })
}

const manageSelectedNodesWR = (node: VrxTreeNode, action: string, selectedNodes: string[]) => {
    if (action === "add") {
        selectedNodes.push(node.id);
    } else {
        selectedNodes.splice(selectedNodes.indexOf(node.id), 1);
    }
}