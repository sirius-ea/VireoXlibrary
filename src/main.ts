import type { App } from 'vue';
import {VrxButton, VrxInput, VrxIcon, VrxSelect, VrxToggle, VrxNavbar} from "@/components";
import VrxButtonsGroup from "@/components/VrxButtonsGroup/VrxButtonsGroup.vue";
export default {
    install: (app: App) => {
        app.component('VrxButton', VrxButton);
        app.component('VrxInput', VrxInput);
        app.component('VrxIcon', VrxIcon);
        app.component('VrxSelect', VrxSelect)
        app.component('VrxNavbar', VrxNavbar);
        app.component('VrxToggle', VrxToggle)
        app.component('VrxButtonsGroup', VrxButtonsGroup)
    }
};

export { VrxButton, VrxInput, VrxIcon, VrxSelect, VrxToggle, VrxButtonsGroup, VrxNavbar };
