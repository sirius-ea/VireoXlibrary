
const vAppendToBody = {
    mounted: function (el: any, args: any) {
        let elementToAttach;
        let changeWidth = true;
        if(args.value.length){
            elementToAttach = args.value[0];
            changeWidth = args.value[1]
        } else {
            elementToAttach = args.value;
        }

        console.log(elementToAttach)
        const overflowParent = getScrollParent(elementToAttach);
        document.body.appendChild(el.parentNode);
        document.body.style.overflow = "hidden";
        calculatePosition(el, elementToAttach, changeWidth)
    },
    beforeUnmount: function (el: any) {
        el.remove()
        document.body.style.overflow = "auto";
    }
}

function calculatePosition(el: HTMLElement, elementToAttach : HTMLElement , changeWidth = true){
    const rect = elementToAttach.getBoundingClientRect() ;
    if(changeWidth)
        el.style.width = rect.width + 'px';

    el.style.top = (rect.top + rect.height) + 'px';
    el.style.left = rect.left + 'px';
    el.style.zIndex = "1000000";
}
function getScrollParent(node: HTMLElement | null) {
    if (node == null) {
        return document.body;
    }

    if (node.scrollHeight > node.clientHeight) {
        return node;
    } else {
        return getScrollParent(node.parentNode as HTMLElement | null);
    }
}

export {vAppendToBody};
