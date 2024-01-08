import type { App } from 'vue';
import * as components from "@/components";

export default {
    install: (app: App) => {
        app.component('VrxButton', components.VrxButton);
        app.component('VrxInput', components.VrxInput);
        app.component('VrxIcon', components.VrxIcon);
        app.component('VrxSelect', components.VrxSelect)
        app.component('VrxNavbar', components.VrxNavbar);
        app.component('VrxToggle', components.VrxToggle)
        app.component('VrxGrid', components.VrxGrid)
        app.component('VrxDatePicker', components.VrxDatePicker)
        app.component('VrxDateRangePicker', components.VrxDateRangePicker)
        app.component('VrxTree', components.VrxTree)
    }
};
export * from "@/components";
