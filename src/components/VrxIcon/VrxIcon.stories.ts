import {Meta, StoryObj} from "@storybook/vue3";
import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
import {iconLibrary} from "@/components/VrxIcon/IconLibrary.ts";
import {VrxInput} from "@/components";
const iconLibrarySet = Object.keys(iconLibrary);

const meta : Meta<typeof VrxIcon> = {
    title: 'VrxIcon',
    component: VrxIcon,
    tags: ['autodocs'],
    argTypes: {
        icon: {
            description: 'Icon type or SVG path',
            control: {
                type: 'select',
            },
            options: iconLibrarySet,
            defaultValue: {
                summary: undefined,
            },
            table: {
                category: 'props',
                type: {
                    summary: 'IconLibraryType | string',
                },
            }
        },
        size: {
            description: 'Size of the icon (from 1 to 10)',
            control: {
                type: 'text',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'string',
                }
            },
            defaultValue: {
                summary: '5',
            }
        },
        color: {
            control: {
                type: 'color',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'string',
                }
            },
            description: 'Color',
        },
        tooltip: {
            description: 'Tooltip of the icon',
            control: {
                type: 'text',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'string',
                }
            }
        }
    }
};

export default meta;

type IconStories = StoryObj<typeof VrxIcon>;


const Template: IconStories = {
    render: (args: any) => ({
        components: { VrxIcon },
        setup() {
            return {
                args
            };
        },

        template: `
          <VrxIcon v-bind="args"/>
        `
    }),
    args: {
        icon: 'mail',
        size: '5'
    },
}

export const Primary: IconStories = {
    ...Template
};


export const AllIcons: IconStories = {
    render: (args: any) => ({
        components: { VrxIcon, VrxInput},
        setup() {
            return {
                args,
                iconLibrarySet: iconLibrarySet.sort((a, b) => a.localeCompare(b))
            };
        },
        data: () => ({
            search: '',
        }),
        computed: {
            iconLibrary() : string[] {
                return iconLibrarySet.filter((icon) => icon.toLowerCase().includes(this.search.toLowerCase()));

            }
        },
        methods: {
            copyCode(icon : string) {
                // add to clipboard the icon code

                const el = document.createElement('textarea');
                el.value = '<VrxIcon :icon="' + icon + '" size=\"5\"/>';
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);

                // show toast
                const toast = document.createElement('div');
                toast.classList.add('fixed', 'bottom-4', 'left-4', 'bg-primary-500', 'text-white', 'p-2', 'rounded-md', 'shadow-md', 'z-50');
                toast.innerText = 'Copied to clipboard';
                document.body.appendChild(toast);
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 2000);
            }
        },
        template: `
            <div class="flex flex-wrap gap-4 justify-center">
                <VrxInput v-model="search" placeholder="Search icon" class="w-full mb-4" type="text" icon="search" />
                <div 
                    v-for="icon in iconLibrary" 
                    :key="icon" 
                    class="flex flex-col items-center w-20 gap-2 border p-2 rounded-2xl justify-center hover:bg-content-light hover:text-white cursor-pointer active:bg-primary-500" 
                    @click="() => copyCode(icon)"
                >
                    <VrxIcon :key="icon" :icon="icon" :size="args.size" :tooltip="icon" />
                    <span class="text-xs text-center text-gray-400">{{ icon }}</span>
                </div>
            </div>
        `
    })
};
