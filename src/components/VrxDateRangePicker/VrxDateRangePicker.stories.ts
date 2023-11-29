import type { Meta, StoryObj } from '@storybook/vue3'
import VrxButtonsGroup from './VrxButtonsGroup.vue'
import VrxDatePicker from "@/components/VrxDatePicker/VrxDatePicker.vue";
import {VrxButton} from "@/components";
import {dateFormatLib} from "@/components/VrxDatePicker/DatePickerLibrary.ts";
import VrxDateRangePicker from "@/components/VrxDateRangePicker/VrxDateRangePicker.vue";

const meta : Meta<typeof VrxDateRangePicker> = {
    title: 'VrxDateRangePicker',
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
        labelStart:{
            description:'label of the start date picker',
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
        labelStop:{
            description:'label of the stop date picker',
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
        helperTextStart:{
            description:'helper text of the start date picker',
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
        helperTextStop:{
            description:'helper text of the stop date picker',
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
        dateStart: {
            description: 'reference to the start date. Must be a ref of type Date',
            control: {
                type: 'none',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'Ref<Date> | undefined',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            }
        },
        dateStop: {
            description: 'reference to the stop date. Must be a ref of type Date',
            control: {
                type: 'none',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'Ref<Date> | undefined',
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
        placeholderFrom:{
            description: 'placeholder of the first date picker',
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
        placeholderTo:{
            description: 'placeholder of the second date picker',
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
        }
    }

};

export default meta;

type DateRangePickerStories = StoryObj<typeof VrxDateRangePicker>;


const Template: DateRangePickerStories = {
    render: (args) => ({
        components: { VrxDateRangePicker, VrxButton },
        setup() {
            return {
                args
            };
        },
        methods: {
            setDates(dates: Date[]){
                this.$refs.myRef.setDates(dates);
            },
            getDates(){
                alert(this.$refs.myRef.getDates());
            },
        },

        template: `
          <div style="height: 400px" class="flex flex-col">
          <div style="height: 90%">
            <VrxDateRangePicker ref="myRef" :type="args.type" v-bind="args"/>
          </div>
          <div class="bottom-0 flex flex-row gap-2">
            <VrxButton color='default' size="sm" @click="setDates([new Date(), (new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 4)))])">Set dates</VrxButton>
            <VrxButton color='default' size="sm" @click="getDates()">Get dates</VrxButton>
          </div>
          </div>`
    }),
    args: {
        type: 'date',
        placeholderFrom: 'Start date',
        placeholderTo: 'Stop date',
        dateFormat: undefined,
        monthsOnly: false,
        invalid: false,
    },
}

export const Primary: DateRangePickerStories = {
    ...Template
};
