const d={mounted:function(e,n){let o,l=!0,t=!1;n.value.length?(o=n.value[0],l=n.value[1],t=n.value[2]??!1):o=n.value,i(o),document.body.appendChild(e.parentNode),document.body.style.overflow="hidden",u(e,o,l,t)},beforeUnmount:function(e){e.parentNode?e.parentNode.remove():e.remove(),document.body.style.overflow="auto"}};function u(e,n,o=!0,l=!1){const t=n.getBoundingClientRect(),c=e.getBoundingClientRect();o&&(e.style.width=t.width+"px"),e.style.top=t.top+t.height+"px",e.style.left=l?t.left-Math.abs(Math.ceil(c.width/2)-Math.ceil(t.width/2))+"px":t.left+"px",e.style.zIndex="1000000"}function i(e){return e==null?document.body:e.scrollHeight>e.clientHeight?e:i(e.parentNode)}export{d as v};
//# sourceMappingURL=appendToBody-70f0f50f.js.map
