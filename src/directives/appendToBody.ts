
const vAppendToBody = {
    mounted: function (el : any, binding:any) {
      let rect = binding.value.toggle.getBoundingClientRect();
      el.style.width = rect.width + 'px';
      el.style.top = (rect.top + rect.height) + 'px';
      el.style.left = rect.left + 'px';
      el.style.zIndex = 1000000;
      document.body.appendChild(el);
    }
}

export {vAppendToBody};