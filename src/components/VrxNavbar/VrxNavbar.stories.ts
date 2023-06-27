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
          <div style="height: 500px">
            <VrxNavbar :buttons="args.buttons" :stick-to-top="args.stickToTop">
              <template v-slot:rightComponent>
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
                children: []
            },
            {
                text: 'Products',
                selected: false,
                children: [
                    {
                        text: 'Normal',
                        description: 'Simple submenu',
                        component: {
                            name: LinkTemplate,
                            props: {
                                href: 'https://www.sirius.to.it/',
                            }
                        },
                        selected: false,
                        children: [
                            {
                                text: 'Item 1',
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
                                text: 'Item 2',
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
                                text: 'Item 3',
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
                        text: 'Descriptions',
                        description: 'Submenu with description',
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
                        text: 'Descriptions + Icons',
                        description: 'Icons & descriptions',
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
                text: 'Contacts',
                component: {
                    name: LinkTemplate,
                    props: {
                        href: 'https://www.sirius.to.it/',
                    }
                },
                selected: false,
                children: []
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