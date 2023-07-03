import type { App } from 'vue';
import {VrxButton, VrxInput, VrxIcon, VrxSelect, VrxToggle} from "@/components";
import VrxButtonsGroup from "@/components/VrxButtonsGroup/VrxButtonsGroup.vue";
import VrxModal from "@/components/VrxModal/VrxModal.vue";
export default {
    install: (app: App) => {
        app.component('VrxButton', VrxButton);
        app.component('VrxInput', VrxInput);
        app.component('VrxIcon', VrxIcon);
        app.component('VrxSelect', VrxSelect)
        app.component('VrxToggle', VrxToggle)
        app.component('VrxButtonsGroup', VrxButtonsGroup)
        app.component('VrxModal', VrxModal)
    }
};

export { VrxButton, VrxInput, VrxIcon, VrxSelect, VrxToggle, VrxButtonsGroup, VrxModal };
