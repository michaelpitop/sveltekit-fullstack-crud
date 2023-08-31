import { c as create_ssr_component } from "../../chunks/ssr.js";
import "../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/auth";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".mainContainer.svelte-18j2ba9{min-height:100vh;background:linear-gradient(to right, #000428, #000046);color:white;position:relative;display:flex;flex-direction:column}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="mainContainer svelte-18j2ba9">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Layout as default
};
