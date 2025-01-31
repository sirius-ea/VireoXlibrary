import {HTMLElement} from "happy-dom";

let calcPosition: (() => void) | null = null;

const vAppendToBody = {
    mounted: function (el: any, args: any) {
        let elementToAttach: any | null = null;
        let changeWidth = true;
        let center: boolean = false;
        if(args.value.length){
            elementToAttach = args.value[0];
            changeWidth = args.value[1];
            center = args.value[2] ?? false; //TODO: Shouldn't set 'center = true' if 'changeWidth = true'
        } else {
            elementToAttach = args.value;
        }

        calcPosition = () => calculatePosition(el, elementToAttach, changeWidth, center);

        document.body.appendChild(el.parentNode);
        window.addEventListener("scroll", calcPosition)
        calculatePosition(el, elementToAttach, changeWidth, center)
    },
    beforeUnmount: function (el: any) {
        if(el.parentNode)
            el.parentNode.remove();
        else
            el.remove();
        if(calcPosition)
         window.removeEventListener("scroll", calcPosition)
    }
}

function calculatePosition(el: HTMLElement, elementToAttach : HTMLElement , changeWidth = true, center = false){
    const rect = elementToAttach.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    const windowHeight = window.innerHeight;

    if(changeWidth)
        el.style.width = rect.width + 'px';

    if(rect.top + rect.height + elRect.height > windowHeight) {
        if(rect.top - elRect.height < 0) {
            el.style.maxHeight = Math.min(rect.top, 300) + "px";
            el.style.top = 0 + 'px';
        }else {
            el.style.top = (rect.top - elRect.height) + 'px';
        }
    }
    else {
        el.style.top = (rect.top + rect.height) + 'px';
    }

    el.style.left = center ? (rect.left - (Math.abs(Math.ceil(elRect.width/2) - Math.ceil(rect.width/2)))) + 'px' : rect.left + 'px';
    el.style.zIndex = "1000000";
}

export {vAppendToBody};
