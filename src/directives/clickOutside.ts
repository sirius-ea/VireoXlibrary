export const vClickOutside = {
    mounted(el : any, binding : any) {
        el.clickOutsideEvent = function(event : any) {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value(event, el);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el : any) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    }
}
