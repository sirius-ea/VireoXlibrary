import {Meta, StoryObj} from "@storybook/vue3";
import VrxNavbar from "@/components/VrxNavbar/VrxNavbar.vue";
import {VrxButton, VrxInput} from "@/main.ts";
import LinkTemplate from "@/components/VrxNavbar/subcomponents/LinkTemplate.vue";

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
        stickToTop: true,
        buttons: [
            {
                text: 'Home',
                component: {
                    name: LinkTemplate,
                    props: {
                        href: '#'
                    }
                }
            },
            {
                text: 'Products',
                children: [
                    {
                        text: 'Top',
                        description: 'Our upper parts products made with incredible materials from Italy',
                        icon: 'shopping-bag',
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
                        icon: 'shopping-bag',
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
                        icon: 'shopping-bag',
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
                        icon: 'shopping-bag',
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
                        icon: 'shopping-bag',
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
                        text: 'Configuration',
                        icon: 'cog',
                        description: 'General settings',
                    },
                    {
                        text: 'Logout',
                        icon: 'logout',
                        description: 'Leave our beautiful app',
                    }
                ]
            }
        ]
    },
}

export const Primary: NavbarStories = {
    ...Template
};