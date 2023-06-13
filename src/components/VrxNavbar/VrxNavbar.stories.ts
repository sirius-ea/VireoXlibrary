import {Meta, StoryObj} from "@storybook/vue3";
import VrxNavbar from "@/components/VrxNavbar/VrxNavbar.vue";

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
        components: { VrxNavbar },
        setup() {
            return {
                args
            };
        },

        template: `
          <div style="height: 400px">
              <VrxNavbar :buttons="args.buttons">
                <template v-slot:leftComponent>
                  <a href="https://flowbite.com" class="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
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
                icon: null,
                action: () => {console.log('Home')},
                selected: true,
                children: []
            },
            {
                text: 'Products',
                icon: null,
                action: () => {console.log('Home')},
                selected: false,
                children: [
                    {
                        text: 'Shoes',
                        description: 'Incredible shoes for incredible people!',
                        action: () => {console.log('Shoes Clicked')},
                        selected: false,
                        children: [],
                        icon: 'check'
                    },
                    {
                        text: 'Top',
                        description: 'Try the best shirts of all world, made with love, made for you!',
                        action: () => {console.log('Shirts Clicked')},
                        selected: false,
                        children: [
                            {
                                text: 'Shirts',
                                description: 'Try the best shirts of all world, made with love, made for you!',
                                action: () => {console.log('Shoes Clicked')},
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'T-Shirts',
                                description: 'Downtime 1',
                                action: () => {console.log('Shoes Clicked')},
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Coats',
                                description: 'Downtime 1',
                                action: () => {console.log('Shoes Clicked')},
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Jackets',
                                description: 'Downtime 1',
                                action: () => {console.log('Shoes Clicked')},
                                selected: false,
                                children: [],
                            }
                        ],
                        icon: 'rocket'
                    }
                ]
            },
            {
                text: 'Contacts',
                icon: null,
                action: () => {console.log('Home')},
                selected: false,
                children: [
                    {
                        text: 'About',
                        description: 'Let us tell you about us!',
                        action: () => {console.log('Shoes Clicked')},
                        selected: false,
                        children: [],
                    },
                    {
                        text: 'Positions',
                        description: 'Come find us in one of our centers!',
                        action: () => {console.log('Shoes Clicked')},
                        selected: false,
                        children: [],
                    },
                    {
                        text: 'Coats',
                        description: 'Downtime 1',
                        action: () => {console.log('Shoes Clicked')},
                        selected: false,
                        children: [],
                    },
                    {
                        text: 'Jackets',
                        description: 'Downtime 1',
                        action: () => {console.log('Shoes Clicked')},
                        selected: false,
                        children: [],
                    }
                ]
            },
            {
                text: 'Settings',
                icon: null,
                action: () => {console.log('Home')},
                selected: false,
                children: []
            },
        ]
    },
}

export const Primary: NavbarStories = {
    ...Template
};