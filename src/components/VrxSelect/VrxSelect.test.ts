import {describe, it, expect, beforeEach} from 'vitest'
import {VrxSelect} from "@/main.ts";
import {mount, VueWrapper} from "@vue/test-utils";
import {SelectItemInterface} from "./SelectItemInterface.ts";

describe('VrxSelect', () => {

    let wrapper : VueWrapper<any>;
    beforeEach(() => {
        wrapper = mount(VrxSelect as any, {
            props: {
                label: 'Label',
                placeholder: 'Placeholder',
                helperText: 'Helper text',
                listData: [],
                modelValue: [],
                multiselect: false,
                disabled: false,
                invalid: false,
                variant: 'default',
            }
        });
    });

    it('renders the component', () => {
        expect(wrapper.find('[data-testid=vrx-select-label]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=vrx-select-label]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=vrx-select-helper]').exists()).toBe(true);
    });

    it('open the select', async () => {
        await wrapper.trigger('focus');
        expect(wrapper.find('[data-testid=vrx-select-dropdown]').exists()).toBe(true);
    });

    it('change listData', async () => {

        // testing on component props
        const data : SelectItemInterface[] = [
            {label: 'Label', value: 'Value'},
            {label: 'Label2', value: 'Value2'},
            {label: 'Label3', value: 'Value3'}
        ];

        await wrapper.setProps({ listData: data });
        expect(wrapper.props('listData')).toStrictEqual(data);
    });

    it('change variant', async () => {
        await wrapper.setProps({ variant: 'alternative' });
        expect(wrapper.props('variant')).toBe('alternative');
    });

    it('change icon', async () => {
        await wrapper.setProps({ icon: 'mail' });
        expect(wrapper.props('icon')).toBe('mail');
        expect(wrapper.find('[data-testid=vrx-icon-mail]').exists()).toBe(true);
    });

    it('change multiselect', async () => {
        await wrapper.setProps({ multiselect: true });
        expect(wrapper.props('multiselect')).toBe(true);
    });

    it('change invalid', async () => {
        await wrapper.setProps({ invalid: true });
        expect(wrapper.props('invalid')).toBe(true);
        expect(wrapper.get('[data-testid=vrx-select-button]').classes()).toContain('bg-red-50');
    })

    it('change disabled', async () => {
        await wrapper.setProps({ disabled: true });
        expect(wrapper.props('disabled')).toBe(true);
        expect(wrapper.get('[data-testid=vrx-select-button]').classes()).toContain('bg-gray-10');
    });
})
