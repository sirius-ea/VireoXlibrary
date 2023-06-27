import type { App } from 'vue';
import {VrxButton, VrxInput, VrxIcon, VrxSelect, VrxGrid} from "@/components";
export default {
    install: (app: App) => {
        app.component('VrxButton', VrxButton);
        app.component('VrxInput', VrxInput);
        app.component('VrxIcon', VrxIcon);
        app.component('VrxSelect', VrxSelect)
        app.component('VrxGrid', VrxGrid)
    }
};

export { VrxButton, VrxInput, VrxIcon, VrxSelect, VrxGrid };
