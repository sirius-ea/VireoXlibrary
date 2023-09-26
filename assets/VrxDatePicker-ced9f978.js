import{j as e}from"./jsx-runtime-6eef64cc.js";import{M as r}from"./index-e0644344.js";import{u as s}from"./index-dc1d5b46.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-d6870be3.js";import"../sb-preview/runtime.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";function d(n){const t=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",h2:"h2",blockquote:"blockquote",a:"a"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"VrxDatePicker/About"}),`
`,e.jsx(t.h1,{id:"vireoxdatepicker",children:"VireoxDatePicker"}),`
`,e.jsx(t.p,{children:`VireoxDatePicker is a "calendar" component for date selection.
The component exclusively utilizes the Date class in Javascript for date handling.`}),`
`,e.jsx(t.p,{children:"To use it, import it as follows:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import {VrxDatePicker} from 'vireoxlibrary';

<VrxDatePicker type="date" />
`})}),`
`,e.jsx(t.h2,{id:"-api",children:"📜 API"}),`
`,e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Method"})}),e.jsx("td",{children:e.jsx("b",{children:"Params"})}),e.jsx("td",{children:e.jsx("b",{children:"Return"})}),e.jsx("td",{children:e.jsx("b",{children:"Description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"getDate"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(t.code,{children:"Date"})}),e.jsx("td",{children:"Returns the selected Date"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"closePicker"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Close the picker dropdown"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"openPicker"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Open the picker dropdown"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"setDate"}),e.jsx("td",{children:e.jsx(t.code,{children:"date: Date"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Set the passed Date as selected"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"setMonth"}),e.jsx("td",{children:e.jsx(t.code,{children:"monthIndex : number, year: number "})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"If 'monthsOnly' props is enabled, allows the user to set a specific month of the specified year"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"setValidRange"}),e.jsx("td",{children:e.jsx(t.code,{children:"validRange: [Date | undefined, Date | undefined]"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Set the interval between the user can select a date"})]})]})]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["When the ",e.jsx(t.code,{children:"monthsOnly"})," prop is enabled, using the ",e.jsx(t.code,{children:"setMonth()"})," method will automatically set the date to the 1st day of that month."]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"-custom-events",children:"🪄 Custom Events"}),`
`,e.jsxs(t.p,{children:["The following custom events are emitted by the component and can be used with ",e.jsx(t.code,{children:'@event-name="..."'}),":"]}),`
`,e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Event"})}),e.jsx("td",{children:e.jsx("b",{children:"Params"})}),e.jsx("td",{children:e.jsx("b",{children:"Return"})}),e.jsx("td",{children:e.jsx("b",{children:"Description"})})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"@day-clicked"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(t.code,{children:"date: Date"})}),e.jsx("td",{children:"Returns the selected date"})]})})]}),`
`,e.jsx("br",{}),`
`,e.jsxs(t.p,{children:["For API's details and configuration please read the ",e.jsx(t.a,{href:"./?path=/docs/vrxdatepicker--docs",children:"documentation"})]})]})}function u(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(d,n)})):d(n)}export{u as default};
//# sourceMappingURL=VrxDatePicker-ced9f978.js.map
