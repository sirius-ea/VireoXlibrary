<template>
  <div class="vrx-navbar-header bg-white border-gray-200 dark:bg-gray-900" :class="{'scrolled-nav' : scrolledNav}" v-click-outside="clickOutside">

    <nav class="vrx-navbar">
      <slot name="leftComponent"/>

      <ul v-show="!mobile" class="navigation font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <NavButton v-for="button in props.buttons" :config="button" @click="buttonClicked(button)" :is-selected="JSON.stringify(button) === JSON.stringify(selectedButton) && showBottomNav"/>
      </ul>

      <!-- Mobile -->
      <div class="icon" :class="mobileNav ? 'icon-active' : 'icon-off'"  @click="toggleMobileNav">
        <VrxIcon v-show="mobile" icon="hamburger" size="6"/>
      </div>
      <transition name="mobile-nav">
        <aside v-show="mobileNav" class="dropdown-nav">
          <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
              <NavSideButton v-for="button in props.buttons" :config="button" @click="buttonClicked(button) "/>
            </ul>
          </div>
        </aside>
      </transition>
      <!-- End Mobile -->

    </nav>

    <transition name="bottom">
      <div
          v-show="showBottomNav && !mobile"
          class="bottom-nav border-b bg-white dark:bg-gray-900"
      >
        <FirstLayerButton v-for="config in selectedButton.children" :config="config"/>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">

  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
  import {onMounted, ref} from "vue";
  import {NavbarButton} from "@/components/VrxNavbar/NavbarButton.ts";
  import NavButton from "@/components/VrxNavbar/subcomponents/desktop/NavButton.vue";
  import NavSideButton from "@/components/VrxNavbar/subcomponents/mobile/NavSideButton.vue";
  import FirstLayerButton from "@/components/VrxNavbar/subcomponents/desktop/FirstLayerButton.vue";

  const props = defineProps<{
    buttons: NavbarButton[];
    stickToTop?: boolean;
  }>()


  const scrolledNav = ref(false);
  const mobileNav = ref(false);
  const mobile = ref(false);
  const windowWidth = ref(window.innerWidth);
  const showBottomNav = ref(false);
  const selectedButton = ref(props.buttons[0]);

  const buttonClicked = ( button : NavbarButton ) => {
    const btnToDeselect = props.buttons.find( btn => btn.selected );
    const btnToSelect = props.buttons.find( btn => JSON.stringify(btn) === JSON.stringify(button));

    if (btnToDeselect) {
      btnToDeselect.selected = false;
    }
    if (btnToSelect) {
      btnToSelect.selected = true;
    }

    if(button.children && button.children?.length <= 0){
      return;
    }

    if(selectedButton.value === button){
      showBottomNav.value = !showBottomNav.value;
      return;
    }

    if(showBottomNav.value){
      selectedButton.value = button;
      return;
    }

    showBottomNav.value = !showBottomNav.value;
    selectedButton.value = button;
  }

  const toggleMobileNav = () => {
    mobileNav.value = !mobileNav.value;
  }

  const vClickOutside = {
    mounted(el : any, binding : any) {
      el.clickOutsideEvent = function(event : any) {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event, el);
        }
      };
      document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el : any) {
      document.body.removeEventListener('click', el.clickOutsideEvent);
    }
  }

  const clickOutside = () => {
      showBottomNav.value = false;
  }

  const checkScreen = () => {
    windowWidth.value = window.innerWidth;
    if(windowWidth.value < 800) {
      mobile.value = true;
      showBottomNav.value = false;
      return;
    }
    mobile.value = false;
    mobileNav.value = false;
    return;
  }

  const updateScroll = () => {
    const scrollPosition = window.scrollY;
    if(scrollPosition > 50){
      scrolledNav.value = true;
      return;
    }
    scrolledNav.value = false;
    return;
  }

  onMounted(() => {
    window.addEventListener('resize', checkScreen);
    window.addEventListener('scroll', updateScroll);
    checkScreen();
  })

</script>

<style scoped>
  .vrx-navbar-header{
   z-index: 99;
   width: 100%;
   position: sticky;
    top: 0;
   transition: .5s ease all;
   box-sizing: border-box;
 }

  .bottom-nav{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    position: absolute;
    padding-inline: 2rem;
    padding-block: 1rem;
    font-weight: 600;
    flex-wrap: wrap;
  }

 .vrx-navbar{
   display: flex;
   position: relative;
   flex-direction: row;
   padding: 12px 0;
   transition: .5s ease all;
   width: 90%;
   margin: 0 auto;
   align-items: center;
 }

 .branding{
   display: flex;
   align-items: center;
 }

 .navigation{
   display: flex;
   align-items: center;
   flex: 1;
   justify-content: flex-end;
 }

 .icon{
   display: flex;
   position: absolute;
   top: 0;
   align-items: center;
   right: 24px;
   height: 100%;
   cursor: pointer;
 }

 .icon-active{
   transform: rotate(180deg);
   transition: .5s ease all;
 }

 .icon-off{
   transform: rotate(0deg);
   transition: .5s ease all;
 }


 .dropdown-nav{
   display: flex;
   flex-direction: column;
   position: fixed;
   width: 100%;
   max-width: 250px;
   height: 100%;
   top: 0;
   left: 0;
   gap: 0.25rem;
 }

 .bottom-enter-active, .bottom-leave-active{
   transition: all 1s ease;
 }

  .bottom-enter-from, .bottom-leave-to{
    transform: translateY(-400px)
  }

  .bottom-enter-to{
    transform: translateY(0px)
  }

 .mobile-nav-enter-active, .mobile-nav-leave-active {
   transition: all 1s ease;
 }

 .mobile-nav-enter-from, .mobile-nav-leave-to{
   transform: translateX(-250px)
 }

 .mobile-nav-enter-to{
   transform: translateX(0)
 }

 .scrolled-nav{
   box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
 }

</style>