import type { App } from 'vue';
import {VrxButton, VrxInput, VrxIcon, VrxSelect, VrxToggle, VrxGrid, VrxNavbar, VrxTree} from "@/components";
import VrxButtonsGroup from "@/components/VrxButtonsGroup/VrxButtonsGroup.vue";
import VrxDatePicker from "@/components/VrxDatePicker/VrxDatePicker.vue";
import VrxDateRangePicker from "@/components/VrxDateRangePicker/VrxDateRangePicker.vue";

export default {
    install: (app: App) => {
        app.component('VrxButton', VrxButton);
        app.component('VrxInput', VrxInput);
        app.component('VrxIcon', VrxIcon);
        app.component('VrxSelect', VrxSelect)
        app.component('VrxNavbar', VrxNavbar);
        app.component('VrxToggle', VrxToggle)
        app.component('VrxButtonsGroup', VrxButtonsGroup)
        app.component('VrxGrid', VrxGrid)
        app.component('VrxDatePicker', VrxDatePicker)
        app.component('VrxDateRangePicker', VrxDateRangePicker)
        app.component('VrxTree', VrxTree)

    }
};
export {
    VrxButton,
    VrxInput,
    VrxIcon,
    VrxSelect,
    VrxToggle,
    VrxButtonsGroup,
    VrxGrid,
    VrxNavbar,
    VrxDatePicker,
    VrxDateRangePicker,
    VrxTree
};
