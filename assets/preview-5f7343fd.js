import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const{useParameter:d,addons:E,useEffect:T,useMemo:x}=__STORYBOOK_MODULE_PREVIEW_API__;var g=Object.defineProperty,f=(e,t)=>{for(var r in t)g(e,r,{get:t[r],enumerable:!0})},S={};f(S,{initializeThemeState:()=>i,pluckThemeFromContext:()=>m,useThemeParameters:()=>s});var _="@storybook/addon-styling",R=`${_}/theme-switcher`,b="theming",p="theme",v={},y={REGISTER_THEMES:`${R}/REGISTER_THEMES`};function m({globals:e}){return e[p]||""}function s(){return d(b,v)}function i(e,t){E.getChannel().emit(y.REGISTER_THEMES,{defaultTheme:t,themes:e})}var O="html",k="data-theme",I=({themes:e,defaultTheme:t,parentSelector:r=O,attributeName:a=k})=>(i(Object.keys(e),t),(l,c)=>{let{themeOverride:o}=s(),n=m(c);return T(()=>{let h=document.querySelector(r),u=o||n||t;h.setAttribute(a,e[u])},[o,n,r,a]),l()});const $={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}},A=[I({themes:{light:"light",dark:"dark"},defaultTheme:"light",attributeName:"data-mode"})];export{A as decorators,$ as default};
//# sourceMappingURL=preview-5f7343fd.js.map
