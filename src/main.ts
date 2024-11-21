import type { App } from 'vue';
import * as components from "@/components";

import "./style.css";

export default {
    install: (app: App, _ = {}) => {
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
        app.component('VrxColorPalette', components.VrxColorPalette)
        app.component('VrxMenu', components.VrxMenu)
        app.component('VrxLink', components.VrxLink)
        app.component('VrxTabbar', components.VrxTabbar)
        app.component('VrxTabList', components.VrxTabList)
        app.component('VrxTabLink', components.VrxTabLink)
        app.component('VrxTabContent', components.VrxTabContent)
        app.component('VrxNotification', components.VrxNotification)
        app.component('VrxNotificationContainer', components.VrxNotificationContainer)
    }
};
export * from "@/components";
