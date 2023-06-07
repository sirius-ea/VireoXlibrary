import type { App } from 'vue';
import {VrxButton, VrxInput, VrxIcon, VrxSelect} from "@/components";
import 'flowbite';

export default {
    install: (app: App) => {
        app.component('VrxButton', VrxButton);
        app.component('VrxInput', VrxInput);
        app.component('VrxIcon', VrxIcon);
        app.component('VrxSelect', VrxSelect)
    }
};

export { VrxButton, VrxInput, VrxIcon, VrxSelect };
