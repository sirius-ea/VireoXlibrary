import type { App } from 'vue';
import {VrxButton} from "@/components";

export default {
    install: (app: App) => {
        app.component('VrxButton', VrxButton);
    }
};

export { VrxButton };
