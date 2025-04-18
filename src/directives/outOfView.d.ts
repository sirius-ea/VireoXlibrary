import { HTMLElement } from "happy-dom";
declare const vOutOfView: {
    mounted: (el: HTMLElement, DS: {
        value: [() => void];
    }) => void;
    beforeUnmount: (_el: HTMLElement) => void;
};
export { vOutOfView };
