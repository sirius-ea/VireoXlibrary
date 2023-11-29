import type { Meta, StoryObj } from '@storybook/vue3'
import VrxButtonsGroup from './VrxButtonsGroup.vue'
import VrxDatePicker from "@/components/VrxDatePicker/VrxDatePicker.vue";
import {VrxButton} from "@/components";
import {dateFormatLib} from "@/components/VrxDatePicker/DatePickerLibrary.ts";

const meta : Meta<typeof VrxDatePicker> = {
    title: 'VrxDatePicker',
    component: VrxDatePicker,
    tags: ['autodocs'],
    argTypes: {
        type: {
            description: 'type of the date picker',
            control: {
                type: 'select',
            },
            options: ['date','datetime'],
            table: {
                category: 'props',
                type: {
                    summary: 'date | datetime-local | time',
                },
                defaultValue: {
                    summary: 'date',
                }
            }
        },
        label: {
            description: 'label of the date picker',
            control: {
                type: 'text',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: '',
                }
            }
        },
        validRange: {
            description: 'valid range of the date picker',
            control: {
                type: 'none',
            },
            table: {
                category: 'props',
                type: {
                    summary: '[Date | undefined, Date | undefined]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            }
        },
        dateFormat:{
            description: 'date format of the date picker',
            control: {
                type: 'text',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'DateFormat',
                },
                defaultValue: {
                    summary: 'DD-MM-YYYY',
                },
            }
        },
        monthsOnly:{
            description: 'show only months',
            control: {
                type: 'boolean',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        placeholder:{
            description: 'placeholder of the date picker',
            control: {
                type: 'text',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'Select a date',
                }
            },
        },
        invalid:{
            description: 'invalid state of the date picker',
            control: {
                type: 'boolean',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'false',
                }
            }
        },
        helperText:{
            description: 'helper text of the date picker',
            control: {
                type: 'text',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: '',
                }
            }
        },
    }

};

export default meta;

type DatePickerStories = StoryObj<typeof VrxDatePicker>;


const Template: DatePickerStories = {
    render: (args) => ({
        components: { VrxDatePicker, VrxButton },
        setup() {
            return {
                args
            };
        },
        methods: {
          setDate(date: Date){
              this.$refs.myRef.setDate(date);
          },
          setValidRange(validRange: [Date | undefined, Date | undefined]){
              this.$refs.myRef.setValidRange(validRange);
          },
            getDate(){
                alert(this.$refs.myRef.getDate());
            },
            setMonth(month: number, year: number){
                this.$refs.myRef.setMonth(month, year);
            },
            openPicker(){
                this.$refs.myRef.openPicker();
            },
            closePicker(){
                this.$refs.myRef.closePicker();
            }
        },

        template: `
          <div style="height: 400px" class="flex flex-col">
          <div style="height: 90%">
            <VrxDatePicker :type="args.type" v-bind="args" ref="myRef" />
          </div>
          <div class="bottom-0 flex flex-row gap-2">
            <VrxButton color="default" size="sm" @click="setDate(new Date())">Set Date</VrxButton>
            <VrxButton color="default" size="sm" @click="getDate()">Get Date</VrxButton>
            <VrxButton color="default" size="sm"
                       @click="setValidRange([new Date(), (new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 10)))])">
              Set Valid Range
            </VrxButton>
            <VrxButton color="default" size="sm" @click="setMonth(1, 2022)">Set Month</VrxButton>
            <VrxButton color="default" size="sm" @click="openPicker">Open</VrxButton>
            <VrxButton color="default" size="sm" @click="closePicker">Close</VrxButton>
          </div>
          </div>`
    }),
    args: {
        type: 'date',
        placeholder: 'Select a date',
        dateFormat: undefined,
        monthsOnly: false,
        invalid: false,
    },
}

export const Primary: DatePickerStories = {
    ...Template
};
