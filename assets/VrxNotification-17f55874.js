import{j as i}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-6e984899.js";import{u as e}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-1c664c88.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-7486de94.js";import"./index-356e4a49.js";function o(t){const n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",a:"a"},e(),t.components);return i.jsxs(i.Fragment,{children:[i.jsx(a,{title:"VrxNotification/About"}),`
`,i.jsx(n.h1,{id:"vireoxnotification",children:"VireoxNotification"}),`
`,i.jsx(n.p,{children:"VireoxNotification is the base component to display notifications."}),`
`,i.jsx(n.p,{children:"The component can be used to display messages. It is possible to choose the number of maximum displayed notifications;"}),`
`,i.jsx(n.p,{children:"when the number is surpassed the notification will be placed in the overflow container."}),`
`,i.jsx(n.p,{children:"Once there are less notifications than the maximum, a new notification from the overflow container will be displayed."}),`
`,i.jsx(n.p,{children:"There are two ways to close the notification, either by clicking on it or waiting out the duration."}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-js",children:`
<template>
    <VrxNotificationContainer ref="notification" />
</template>

<script setup>

    import {VrxNotification, VrxNotificationContainer} from 'vireoxlibrary';

    const notification = ref<IVrxNotificationUseCase | null>(null)
    notification.value.addNotification("Notification Test")

<\/script>
`})}),`
`,i.jsxs(n.p,{children:["For API's details and configuration please read the ",i.jsx(n.a,{href:"./?path=/docs/vrxnotification--docs",children:"documentation"})]})]})}function u(t={}){const{wrapper:n}=Object.assign({},e(),t.components);return n?i.jsx(n,Object.assign({},t,{children:i.jsx(o,t)})):o(t)}export{u as default};
