import {describe, it, expect, beforeEach} from 'vitest'
import {VrxInput} from "@/main.ts";
import {mount, VueWrapper} from "@vue/test-utils";

describe('VrxInput', () => {

    let wrapper : VueWrapper<any>;
    beforeEach(() => {
        wrapper = mount(VrxInput as any, {
            props: {
                label: 'Label',
                placeholder: 'Placeholder',
                helperText: 'Helper text',
                modelValue: '',
                multiselect: false,
                disabled: false,
                invalid: false,
                type: 'text',
            }
        });
    });

    it('renders the component', () => {
        expect(wrapper.find('[data-testid=vrx-input]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=vrx-input-label]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=vrx-input-helper]').exists()).toBe(true);
    });

    it('insert new input', async () => {
        await wrapper.find('input').setValue('test');
        expect(wrapper.find('input').element.value).toBe('test');
    });

    it('change type', async () => {
        expect(wrapper.find('input').attributes('type')).toBe('text');
        await wrapper.setProps({ type: 'password' });
        expect(wrapper.props('type')).toBe('password');
        expect(wrapper.find('input').attributes('type')).toBe('password');
    });

    it('change icon', async () => {
        await wrapper.setProps({ icon: 'mail' });
        expect(wrapper.props('icon')).toBe('mail');
        expect(wrapper.find('[data-testid=vrx-icon-mail]').exists()).toBe(true);
    });

    it('change invalid', async () => {
        await wrapper.setProps({ invalid: true });
        expect(wrapper.props('invalid')).toBe(true);
        expect(wrapper.get('[data-testid=vrx-input-field]').classes()).toContain('bg-error-50');
    })

    it('change disabled', async () => {
        await wrapper.setProps({ disabled: true });
        expect(wrapper.props('disabled')).toBe(true);
        expect(wrapper.get('[data-testid=vrx-input-field]').classes()).toContain('bg-primary-50');
    });
})