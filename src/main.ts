import type { App } from 'vue';
import {VrxButton, VrxInput, VrxIcon, VrxSelect, VrxToggle, VrxGrid, VrxNavbar, VrxTree} from "@/components";
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
        app.component('VrxGrid', VrxGrid)
        app.component('VrxTree', VrxTree)
    }
};
export { VrxButton, VrxInput, VrxIcon, VrxSelect, VrxToggle, VrxButtonsGroup, VrxGrid, VrxNavbar };

