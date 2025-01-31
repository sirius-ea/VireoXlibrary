import {HTMLElement} from "happy-dom";

let destroySelf: null | (() => void) = null;
let element: HTMLElement | null = null;
const callback = () => {
    if(!element || checkIfOutOfView_Event(element)) if(destroySelf) destroySelf();
}
const vOutOfView = {
    mounted: function (el: HTMLElement, DS: {value: [() => void]}) {
        destroySelf = DS.value[0];
        element = el;
        window.addEventListener("scroll",callback)
    },
    beforeUnmount: function (_el: HTMLElement) {
        window.removeEventListener("scroll",callback)
    }
}

const checkIfOutOfView_Event = (el: HTMLElement): boolean => {
    const elRect = el.getBoundingClientRect();

    const windowTop = 0;
    const windowLeft = 0;
    const windowBottom = window.innerHeight;
    const windowRight = window.innerWidth;

    return elRect.top >= windowBottom || elRect.left >= windowRight || elRect.bottom <= windowTop || elRect.right <= windowLeft

}



export {vOutOfView};
