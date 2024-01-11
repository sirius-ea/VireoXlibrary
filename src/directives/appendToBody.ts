
const vAppendToBody = {
    mounted: function (el: any, args: any) {
        let elementToAttach;
        let changeWidth = true;
        let center: boolean = false;
        if(args.value.length){
            elementToAttach = args.value[0];
            changeWidth = args.value[1];
            center = args.value[2] ?? false; //TODO: Shouldn't set 'center = true' if 'changeWidth = true'
        } else {
            elementToAttach = args.value;
        }

        console.log(elementToAttach)
        const overflowParent = getScrollParent(elementToAttach);
        document.body.appendChild(el.parentNode);
        document.body.style.overflow = "hidden";
        calculatePosition(el, elementToAttach, changeWidth, center)
    },
    beforeUnmount: function (el: any) {
        if(el.parentNode)
            el.parentNode.remove();
        else
            el.remove();
        document.body.style.overflow = "auto";
    }
}

function calculatePosition(el: HTMLElement, elementToAttach : HTMLElement , changeWidth = true, center = false){
    const rect = elementToAttach.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    if(changeWidth)
        el.style.width = rect.width + 'px';

    el.style.top = (rect.top + rect.height) + 'px';
    el.style.left = center ? (rect.left - (Math.abs(Math.ceil(elRect.width/2) - Math.ceil(rect.width/2)))) + 'px' : rect.left + 'px';
    el.style.zIndex = "1000000";
}
function getScrollParent(node: HTMLElement | null) : HTMLElement {
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
