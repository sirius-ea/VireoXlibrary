// test with vitest
import {describe, it, expect, beforeEach} from 'vitest'
import {VrxColorPalette} from "@/main.ts";
import {mount, VueWrapper} from "@vue/test-utils";

describe('VrxColorPalette', () => {
    let wrapper : VueWrapper<any>;
    beforeEach(() => {
        wrapper = mount(VrxColorPalette as any, {
            props: {
                colors: {'50': '#FFF', '950': '#000'},
            }
        });
    });

    it('renders a color palette', () => {
        expect(wrapper.find('[data-testid=vrx-color-palette]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=vrx-color-palette]').find(".vrxcolor").exists()).toBe(true);
    });
})
