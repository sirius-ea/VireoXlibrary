import {describe, it, expect, beforeEach} from 'vitest'
import {VrxSelect} from "@/main.ts";
import {mount, VueWrapper} from "@vue/test-utils";
import type {SelectItemInterface} from "./SelectItemInterface.ts";

describe('VrxSelect', () => {

    let wrapper : VueWrapper<any>;
    beforeEach(() => {
        wrapper = mount(VrxSelect as any, {
            props: {
                label: 'Label',
                placeholder: 'Placeholder',
                helperText: 'Helper text',
                listData: [
                    { label: 'Option 1', value: 'option1' },
                    { label: 'Option 2', value: 'option2' },
                    { label: 'Option 3', value: 'option3' },
                  ],
                modelValue: [],
                multiselect: false,
                disabled: false,
                invalid: false,
                variant: 'default',
                "onUpdate:modelValue" : (e: SelectItemInterface[]) => {
                    wrapper.setProps({modelValue:e})
                }
            }
        });
    });

    it('renders the component', () => {
        expect(wrapper.find('[data-testid=vrx-select-label]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=vrx-select-label]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=vrx-select-helper]').exists()).toBe(true);
    });

    it('open the select', async () => {
        await wrapper.find('[data-testid=vrx-select-button]').trigger('click');
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
        expect(wrapper.get('[data-testid=vrx-select-button]').classes()).toContain('vrxselect-input-invalid-style');
    })

    it('change disabled', async () => {
        await wrapper.setProps({ disabled: true });
        expect(wrapper.props('disabled')).toBe(true);
        expect(wrapper.get('[data-testid=vrx-select-button]').classes()).toContain('vrxselect-input-disabled-style');
    });

    it('Deselect all', async () => {

        await wrapper.find('[data-testid=vrx-select-button]').trigger('click');
        expect(wrapper.find('[data-testid=vrx-select-dropdown]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=vrx-select-dropdown-0]').exists()).toBe(true);
        await wrapper.find('[data-testid=vrx-select-dropdown-0]').trigger('click');
        await wrapper.vm.$nextTick();

        expect(wrapper.find('[data-testid=vrx-deselect-button]').exists()).toBe(true);
        await wrapper.find('[data-testid=vrx-deselect-button]').trigger('mousedown');
        await wrapper.vm.$nextTick();
        expect(wrapper.props('modelValue')).toHaveLength(0);

    });
})
