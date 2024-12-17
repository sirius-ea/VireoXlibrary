import {Meta, StoryObj} from "@storybook/vue3";
import VrxNavbar from "@/components/VrxNavbar/VrxNavbar.vue";
import LinkTemplate from "@/components/VrxNavbar/subcomponents/LinkTemplate.vue";

const meta : Meta<typeof VrxNavbar> = {
    title: 'VrxNavbar',
    component: VrxNavbar,
    tags: ['autodocs'],
    argTypes: {
        leftComponent: {
            description: 'left component slot',
            control: {
            },
            table: {
                category: 'slots',
                type: {
                    summary: 'string',
                }
            }
        },
        buttons: {
            description: 'Buttons configuration',
            table: {
                category: 'props',
                type: {
                    summary: 'NavbarButton[]',
                }
            }
        },
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
          <div style="height: 500px; width: 100%">
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
        buttons: [
            {
                text: 'Home',
                icon: 'M12 2C13.1 2 14 2.9 14 4S13.1 6 12 6 10 5.1 10 4 10.9 2 12 2M15.9 8.1C15.5 7.7 14.8 7 13.5 7H11C8.2 7 6 4.8 6 2H4C4 5.2 6.1 7.8 9 8.7V22H11V16H13V22H15V10.1L19 14L20.4 12.6L15.9 8.1Z'
            },
            {
                text: 'Products',
                children: [
                    {
                        text: 'Top',
                        description: 'Our upper parts products made with incredible materials from Italy',
                        icon: 'palette',
                        children: [
                            {
                                text: 'T-shirts',
                                component: {
                                    name: LinkTemplate,
                                    props: {
                                        href: 'https://www.sirius.to.it'
                                    }
                                }
                            },
                            {
                                text: 'Shirts',
                            },
                            {
                                text: 'Jackets',
                            },
                            {
                                text: 'Polo',
                            }
                        ]
                    },
                    {
                        text: 'Bottom',
                        description: 'Our bottom parts products',
                        icon: 'palette',
                        children: [
                            {
                                text: 'Jeans',
                            },
                            {
                                text: 'Shorts',
                            },
                            {
                                text: 'Cargos',
                            },
                            {
                                text: 'Chinos',
                            }
                        ]
                    },
                    {
                        text: 'Shoes',
                        description: 'Our beautiful shoes',
                        icon: 'palette',
                        children: [
                            {
                                text: 'Sneakers',
                            },
                            {
                                text: 'Shorts',
                            },
                            {
                                text: 'Trainers',
                            },
                            {
                                text: 'Splippers',
                            }
                        ]
                    },
                    {
                        text: 'Accessories',
                        description: 'Shining accessories for shining people',
                        icon: 'palette',
                        children: [
                            {
                                text: 'Watches',
                            },
                            {
                                text: 'Sun-glasses',
                            },
                            {
                                text: 'Hats',
                            },
                            {
                                text: 'Belts',
                            }
                        ]
                    },
                    {
                        text: 'More',
                        description: 'This will open an external link',
                        icon: 'palette',
                        component: {
                            name: LinkTemplate,
                            props: {
                                href: 'https://www.sirius.to.it'
                            }
                        }
                    }
                ]
            },
            {
                text: 'About',
                component: {
                    name: LinkTemplate,
                    props: {
                        href: '#'
                    }
                }
            },
            {
                text: 'Settings',
                children: [
                    {
                        text: 'Profile',
                        icon: 'user-circle',
                        description: 'Your profile settings',
                    },
                    {
                        text: 'Logout',
                        icon: 'logout',
                    }
                ]
            }
        ],
    },
}

export const Primary: NavbarStories = {
    ...Template
};