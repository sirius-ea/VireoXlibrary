import type { App } from 'vue';
import {VrxButton, VrxInput, VrxIcon, VrxSelect, VrxToggle} from "@/components";
export default {
    install: (app: App) => {
        app.component('VrxButton', VrxButton);
        app.component('VrxInput', VrxInput);
        app.component('VrxIcon', VrxIcon);
        app.component('VrxSelect', VrxSelect)
        app.component('VrxToggle', VrxToggle)
    }
};

export { VrxButton, VrxInput, VrxIcon, VrxSelect, VrxToggle };
