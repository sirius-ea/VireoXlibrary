import type { App } from 'vue';
import {VrxButton, VrxInput, VrxIcon, VrxSelect, VrxNavbar} from "@/components";
export default {
    install: (app: App) => {
        app.component('VrxButton', VrxButton);
        app.component('VrxInput', VrxInput);
        app.component('VrxIcon', VrxIcon);
        app.component('VrxSelect', VrxSelect)
        app.component('VrxNavbar', VrxNavbar);
    }
};

export { VrxButton, VrxInput, VrxIcon, VrxSelect, VrxNavbar };
