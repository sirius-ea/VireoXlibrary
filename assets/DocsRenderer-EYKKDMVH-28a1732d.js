import{_ as h}from"./iframe-f639c3d1.js";import{R as o,r as a}from"./index-c013ead5.js";import{r as l,C as d,A as E,H as R,D as x}from"./index-ab47cf8c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-cba466d5.js";import"./index-356e4a49.js";var i={},m=l;i.createRoot=m.createRoot,i.hydrateRoot=m.hydrateRoot;var n=new Map,y=({callback:t,children:e})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==t&&(r.current=t,t())},[t]),e},_=async(t,e)=>{let r=await v(e);return new Promise(s=>{r.render(o.createElement(y,{callback:()=>s(null)},t))})},f=(t,e)=>{let r=n.get(t);r&&(r.unmount(),n.delete(t))},v=async t=>{let e=n.get(t);return e||(e=i.createRoot(t),n.set(t,e)),e},w={code:d,a:E,...R},D=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:e}},F=class{constructor(){this.render=async(t,e,r)=>{let s={...w,...e==null?void 0:e.components};return new Promise((c,u)=>{h(()=>import("./index-3685aeb7.js"),["./index-3685aeb7.js","./index-dc1d5b46.js","./index-c013ead5.js","./_commonjsHelpers-725317a4.js"],import.meta.url).then(({MDXProvider:p})=>_(o.createElement(D,{showException:u,key:Math.random()},o.createElement(p,{components:s},o.createElement(x,{context:t,docsParameter:e}))),r)).then(c)})},this.unmount=t=>{f(t)}}};export{F as DocsRenderer,w as defaultComponents};
//# sourceMappingURL=DocsRenderer-EYKKDMVH-28a1732d.js.map