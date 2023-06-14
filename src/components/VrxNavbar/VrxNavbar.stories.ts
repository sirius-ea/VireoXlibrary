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
                        text: 'Normal',
                        description: 'Simple submenu',
                        action: () => {console.log('sub1 Clicked')},
                        selected: false,
                        children: [
                            {
                                text: 'Item 1',
                                action: () => {console.log('Shoes Clicked')},
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Item 2',
                                action: () => {console.log('Shoes Clicked')},
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Item 3',
                                action: () => {console.log('Shoes Clicked')},
                                selected: false,
                                children: [],
                            },
                        ],
                        icon: 'chart-bar'
                    },
                    {
                        text: 'Descriptions',
                        description: 'Submenu with description',
                        action: () => {console.log('sub2 Clicked')},
                        selected: false,
                        children: [
                            {
                                text: 'Item 1',
                                action: () => {console.log('Shoes Clicked')},
                                description: 'Description 1',
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Item 2',
                                action: () => {console.log('Shoes Clicked')},
                                description: 'Description 2',
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Item 3',
                                action: () => {console.log('Shoes Clicked')},
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
                        action: () => {console.log('sub2 Clicked')},
                        selected: false,
                        children: [
                            {
                                text: 'Item 1',
                                action: () => {console.log('Shoes Clicked')},
                                description: 'Description 1',
                                icon: 'chevron-up',
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Item 2',
                                action: () => {console.log('Shoes Clicked')},
                                description: 'Description 2',
                                icon: 'x',
                                selected: false,
                                children: [],
                            },
                            {
                                text: 'Item 3',
                                action: () => {console.log('Shoes Clicked')},
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
                icon: null,
                action: () => {console.log('Home')},
                selected: false,
                children: []
            },
            {
                text: 'Settings',
                icon: null,
                action: () => {console.log('Home')},
                selected: false,
                children: [
                    {
                        text: 'Profile',
                        icon: 'user-circle',
                        description: 'Edit Profile',
                        action: () => {console.log('Home')},
                    },
                    {
                        text: 'Configurations',
                        description: 'Edit configurations and settings',
                        icon: 'cog',
                        action: () => {console.log('Home')},
                    },
                    {
                        text: 'Logout',
                        description: 'Leave our beautiful app',
                        icon: 'logout',
                        action: () => {console.log('Home')},
                    }
                ]
            },
        ]
    },
}

export const Primary: NavbarStories = {
    ...Template
};