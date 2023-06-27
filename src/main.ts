import type { App } from 'vue';

import {VrxButton, VrxInput, VrxIcon, VrxSelect, VrxToggle, VrxGrid} from "@/components";
import VrxButtonsGroup from "@/components/VrxButtonsGroup/VrxButtonsGroup.vue";

export default {
    install: (app: App) => {
        app.component('VrxButton', VrxButton);
        app.component('VrxInput', VrxInput);
        app.component('VrxIcon', VrxIcon);
        app.component('VrxSelect', VrxSelect);
        app.component('VrxToggle', VrxToggle)
        app.component('VrxButtonsGroup', VrxButtonsGroup)
        app.component('VrxGrid', VrxGrid)
    }
};
export { VrxButton, VrxInput, VrxIcon, VrxSelect, VrxToggle, VrxButtonsGroup, VrxGrid };
