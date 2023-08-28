import VrxToast from "@/components/VrxToast/VrxToast.vue";
import {Meta, StoryObj} from "@storybook/vue3";
import {VrxButton} from "@/components";

const meta : Meta<typeof VrxToast> = {
    title: 'VrxToast',
    component: VrxToast,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: {
                type: null,
            },
            defaultValue: 'success',
            table: {
                category: 'props',
                type: {
                    summary: 'string',
                }
            }
        },
    }
}

export default meta;
type ToastStories = StoryObj<typeof VrxToast>;

const Template: ToastStories = {
    render: (args) => ({
        components: { VrxToast, VrxButton },
        setup() {
            return { args };
        },
        methods: {
            show(){
                this.$refs.myRef.show();
            },
            hide(){
                this.$refs.myRef.hide();
            },
            setType(val: string){
                this.$refs.myRef.setType(val);
            },
            setTitle(val: string){
                this.$refs.myRef.setTitle(val);
            },
            setMessage(val: string){
                this.$refs.myRef.setMessage(val);
            },
        },
        mounted() {
          this.show();
        },
        template: `
          <div style="height: 100px">
            <VrxToast ref="myRef" :type="args.type" title="Success" message="This is a success Toast!"/>
          </div>
          <div style="padding-top: 30px; display: flex; flex-direction: row; gap: 5px">
            <VrxButton color="default" size="sm" @click="show" >Show</VrxButton>
            <VrxButton color="default" size="sm" @click="setType('error')" >Set Type</VrxButton>
            <VrxButton color="default" size="sm" @click="setTitle('New Title')" >Set Title</VrxButton>
            <VrxButton color="default" size="sm" @click="setMessage('This is new message set by the user')" >Set Message</VrxButton>
          </div>
        `
    }),
    args: {
        type:'success'
    }
}

export const Primary : ToastStories = {
    ...Template,
}

export const Types : ToastStories = {
    render: (args) => ({
        components: { VrxToast, VrxButton },
        setup() {
            return { args };
        },
        methods: {
            show(){
                this.$refs.myRef1.show();
                this.$refs.myRef2.show();
                this.$refs.myRef3.show();
                this.$refs.myRef4.show();
            }
        },
        mounted() {
            this.show();
        },
        template: `
          <div style="height: 180px">
            <VrxToast ref="myRef1" type="success" title="Success" message="Operation successful."/>
            <VrxToast ref="myRef2" type="warning" title="Error" message="Some things may not be completed." style="left: 350px" />
            <VrxToast ref="myRef3" type="error" title="Warning" message="Error during operation." style="top: 100px" />
            <VrxToast ref="myRef4" type="info" title="Info" message="Uncompleted operation." style="left: 350px; top: 100px" />
          </div>

        `
    }),
    args: {
    }
}