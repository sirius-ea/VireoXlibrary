import {Meta, StoryObj} from "@storybook/vue3";
import VrxNavbar from "@/components/VrxNavbar/VrxNavbar.vue";
import {VrxButton, VrxInput} from "@/main.ts";
import LinkTemplate from "@/components/VrxNavbar/SubComponents/LinkTemplate.vue";

const meta : Meta<typeof VrxNavbar> = {
    title: 'VrxNavbar',
    component: VrxNavbar,
    tags: ['autodocs'],
    argTypes: {

    }
};

export default meta;

type NavbarStories = StoryObj<typeof VrxNavbar>;


const Template: NavbarStories = {
    render: (args) => ({
        components: { VrxNavbar, LinkTemplate },
        setup() {
            return {
                args
            };
        },

        template: `
          <div style="height: 300px; width: 100%">
            <VrxNavbar :buttons="args.buttons" :stick-to-top="args.stickToTop">
              <template v-slot:leftComponent>
                <a href="https://www.sirius.to.it/" class="flex items-center">
                  <img src="https://avatars.githubusercontent.com/u/108472933?s=200&v=4" class="h-8 mr-3" alt="Flowbite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VireoXlibrary</span>
                </a>
              </template>
            </VrxNavbar>
          </div>
        `
    }),
    args: {
        stickToTop: true,
        buttons: [
            {
                text: 'Home',
                selected: true,
                children: [],
            },
            {
                text: 'Analysis',
                selected: false,
                children: [
                    {
                        text: 'Downtimes',
                        description: 'Manage and edit devices downtimes',
                        component: {
                            name: LinkTemplate,
                            props: {
                                href: 'https://www.sirius.to.it/',
                            }
                        },
                        selected: false,
                        children: [
                            {
                                text: 'Downtime Manager',
                                component: {
                                    name: LinkTemplate,
                                    props: {
                                        href: 'https://www.sirius.to.it/',
                                    }
                                },
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Contractual Downtime Manager',
                                component: {
                                    name: LinkTemplate,
                                    props: {
                                        href: 'https://www.sirius.to.it/',
                                    }
                                },
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Device Status',
                                component: {
                                    name: LinkTemplate,
                                    props: {
                                        href: 'https://www.sirius.to.it/',
                                    }
                                },
                                selected: false,
                                children: [],
                            },
                        ],
                        icon: 'chart-bar'
                    },
                    {
                        text: 'Data Analysis',
                        icon: 'password',
                        description: 'Analyze data from devices',
                        component: {
                            name: LinkTemplate,
                            props: {
                                href: 'https://www.sirius.to.it/',
                            }
                        },
                    },
                    {
                        text: 'Trends',
                        description: 'Inspect measures trends',
                        selected: false,
                        children: [
                            {
                                text: 'Item 1',
                                description: 'Description 1',
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Item 2',
                                description: 'Description 2',
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Item 3',
                                description: 'Description 3',
                                selected: false,
                                children: [],
                            },
                        ],
                        icon: 'rocket'
                    },
                    {
                        text: 'Data Management',
                        description: 'Manage data from devices',
                        selected: false,
                        children: [
                            {
                                text: 'Item 1',
                                description: 'Description 1',
                                icon: 'chevron-up',
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Item 2',
                                description: 'Description 2',
                                icon: 'x',
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Item 3',
                                description: 'Description 3',
                                icon: 'chevron-down',
                                selected: false,
                                children: [],
                            },
                        ],
                        icon: 'mail'
                    }
                ]
            },
            {
                text: 'KPI',
                selected: false,
                children: [
                    {
                        text: 'Faults and Downtimes',
                        description: 'Manage and edit devices downtimes',
                        component: {
                            name: LinkTemplate,
                            props: {
                                href: 'https://www.sirius.to.it/',
                            }
                        },
                        selected: false,
                        children: [
                            {
                                text: 'Fault Inspector',
                                component: {
                                    name: LinkTemplate,
                                    props: {
                                        href: 'https://www.sirius.to.it/',
                                    }
                                },
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Downtime List',
                                component: {
                                    name: LinkTemplate,
                                    props: {
                                        href: 'https://www.sirius.to.it/',
                                    }
                                },
                                selected: false,
                                children: [],
                            },
                        ],
                        icon: 'chart-bar'
                    },
                    {
                        text: 'Availability',
                        icon: 'password',
                        description: 'Analyze data from devices',
                        children: [
                            {
                                text: 'Availability WPP',
                                description: 'Description 1',
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Availability PVP',
                                description: 'Description 1',
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Contractual Availability',
                                description: 'Description 1',
                                selected: false,
                                children: [],
                            },
                        ]
                    },
                    {
                        text: 'Energy',
                        description: 'Inspect measures trends',
                        selected: false,
                        children: [
                            {
                                text: 'Energy Production',
                                description: 'Description 1',
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Actual vs Budget',
                                description: 'Description 2',
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'MPE',
                                description: 'Description 3',
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Energy Loss',
                                description: 'Description 3',
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Equivalent Hours',
                                description: 'Description 3',
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Indice Affidabilità',
                                description: 'Description 3',
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Under-Over Performance',
                                description: 'Description 3',
                                selected: false,
                                children: [],
                            },
                        ],
                        icon: 'rocket'
                    },
                    {
                        text: 'Performance',
                        description: 'Manage data from devices',
                        selected: false,
                        children: [
                            {
                                text: 'Power Curves',
                                description: 'Description 1',
                                icon: 'chevron-up',
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Performance Ratio',
                                description: 'Description 2',
                                icon: 'x',
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Smart Data Mining',
                                description: 'Description 3',
                                icon: 'chevron-down',
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Power Curve Evaluator',
                                description: 'Description 3',
                                icon: 'chevron-down',
                                selected: false,
                                children: [],
                            },
                        ],
                        icon: 'mail'
                    }
                ]
            },
            {
                text: 'Settings',
                selected: false,
                children: [
                    {
                        text: 'Profile',
                        icon: 'user-circle',
                        description: 'Edit Profile',
                    },
                    {
                        text: 'Configurations',
                        description: 'Edit configurations and settings',
                        icon: 'cog',
                    },
                    {
                        text: 'Logout',
                        description: 'Leave our beautiful app',
                        icon: 'logout',
                    }
                ]
            },
        ]
    },
}

export const Primary: NavbarStories = {
    ...Template
};