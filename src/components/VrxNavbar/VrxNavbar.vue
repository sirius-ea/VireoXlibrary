<template>
  <div class="vrx-navbar-header bg-white border-gray-200 dark:bg-gray-900" :class="{'scrolled-nav' : scrolledNav}">
    <nav class="vrx-navbar">
      <slot name="leftComponent"/>
      <ul v-show="!mobile" class="navigation font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <VrxNavbarButton v-for="button in props.buttons" :config="button" @click="buttonClicked(button) "/>
      </ul>
      <div class="icon" :class="mobileNav ? 'icon-active' : 'icon-off'"  @click="toggleMobileNav">
        <VrxIcon v-show="mobile" icon="hamburger" size="6"/>
      </div>
      <transition name="mobile-nav">
        <aside v-show="mobileNav" class="dropdown-nav">
          <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
              <VrxNavbarSideButton v-for="button in props.buttons" :config="button" @click="buttonClicked(button) "/>
            </ul>
          </div>
        </aside>
      </transition>
    </nav>
  </div>
</template>

<script setup lang="ts">

  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
  import {onMounted, ref} from "vue";
  import VrxNavbarButton from "@/components/VrxNavbar/SubComponents/VrxNavbarButton.vue";
  import {NavbarButtonInterface} from "@/components/VrxNavbar/NavbarButtonInterface.ts";
  import VrxNavbarSideButton from "@/components/VrxNavbar/SubComponents/VrxNavbarSideButton.vue";

  const scrolledNav = ref(false);
  const mobileNav = ref(false);
  const mobile = ref(false);
  const windowWidth = ref(window.innerWidth);

  const props = defineProps<{
    buttons: NavbarButtonInterface[];
    stickToTop?: boolean;
  }>()

  const buttonClicked = ( button : NavbarButtonInterface ) => {
    const btnToDeselect = props.buttons.find( btn => btn.selected );
    const btnToSelect = props.buttons.find( btn => JSON.stringify(btn) === JSON.stringify(button));

    if (btnToDeselect) {
      btnToDeselect.selected = false;
    }
    if (btnToSelect) {
      btnToSelect.selected = true;
    }
  }

  const toggleMobileNav = () => {
    mobileNav.value = !mobileNav.value;
  }

  const checkScreen = () => {
    windowWidth.value = window.innerWidth;
    if(windowWidth.value < 800) {
      mobile.value = true;
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