import type { App } from 'vue';
import {VrxButton, VrxInput} from "@/components";
import 'flowbite';

export default {
    install: (app: App) => {
        app.component('VrxButton', VrxButton);
        app.component('VrxInput', VrxInput);
    }
};

export { VrxButton, VrxInput };
