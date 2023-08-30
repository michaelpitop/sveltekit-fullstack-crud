import { c as create_ssr_component, a as validate_store, b as subscribe, f as each, e as escape, d as add_attribute, n as null_to_empty } from "../../../chunks/ssr.js";
import "../../../chunks/firebase.js";
import "firebase/auth";
import { w as writable } from "../../../chunks/index.js";
import "firebase/firestore";
const authStore = writable({
  user: null,
  loading: true,
  data: {}
});
const TodoItem_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".mainContainer.s-jZJiUkwef1J0.s-jZJiUkwef1J0{display:flex;flex-direction:column;min-height:100vh;gap:24px;padding:24px;width:100%;max-width:1000px;margin:0 auto}.headerContainer.s-jZJiUkwef1J0.s-jZJiUkwef1J0{display:flex;align-items:center;justify-content:space-between}.headerBtns.s-jZJiUkwef1J0.s-jZJiUkwef1J0{display:flex;align-items:center;gap:14px}.headerContainer.s-jZJiUkwef1J0 button.s-jZJiUkwef1J0{background:#003c5b;color:white;padding:10px 18px;border:none;border-radius:4px;font-weight:700;display:flex;align-items:center;gap:10px;cursor:pointer}.headerContainer.s-jZJiUkwef1J0 button i.s-jZJiUkwef1J0{font-size:1.1rem}.headerContainer.s-jZJiUkwef1J0 button.s-jZJiUkwef1J0:hover{opacity:0.7}main.s-jZJiUkwef1J0.s-jZJiUkwef1J0{display:flex;flex-direction:column;gap:8px;flex:1}.actions.s-jZJiUkwef1J0.s-jZJiUkwef1J0{display:flex;align-items:center;gap:14px;font-size:1.3rem}.actions.s-jZJiUkwef1J0 i.s-jZJiUkwef1J0{cursor:pointer}.actions.s-jZJiUkwef1J0 i.s-jZJiUkwef1J0:hover{color:coral}.enterTodo.s-jZJiUkwef1J0.s-jZJiUkwef1J0{display:flex;align-items:stretch;border:1px solid #0891b2;border-radius:5px;overflow:hidden}.enterTodo.s-jZJiUkwef1J0 input.s-jZJiUkwef1J0{background:transparent;border:none;padding:14px;color:white;flex:1}.enterTodo.s-jZJiUkwef1J0 input.s-jZJiUkwef1J0:focus{outline:none}.enterTodo.s-jZJiUkwef1J0 button.s-jZJiUkwef1J0{padding:0 28px;background:#003c5b;border:none;color:cyan;font-weight:600;cursor:pointer}.enterTodo.s-jZJiUkwef1J0 button.s-jZJiUkwef1J0:hover{background:transparent}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  validate_store(authStore, "authStore");
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let todoList = [];
  let currTodo = "";
  authStore.subscribe((curr) => {
    todoList = curr.data.todos;
  });
  $$result.css.add(css);
  $$unsubscribe_authStore();
  return `${!$authStore.loading ? `<div class="mainContainer s-jZJiUkwef1J0"><div class="headerContainer s-jZJiUkwef1J0"><h1 data-svelte-h="svelte-uky5qm">To do list</h1> <div class="headerBtns s-jZJiUkwef1J0"><button class="s-jZJiUkwef1J0"><i class="fa-regular fa-floppy-disk s-jZJiUkwef1J0"></i> <p data-svelte-h="svelte-5ce4c3">Save</p></button> <button class="s-jZJiUkwef1J0"><i class="fa-solid fa-right-from-bracket s-jZJiUkwef1J0"></i> <p data-svelte-h="svelte-1eb7go6">Logout</p></button></div></div> <main class="s-jZJiUkwef1J0">${todoList.length === 0 ? `<p data-svelte-h="svelte-1jtqiij">You have nothing to do!</p>` : ``} ${each(todoList, (todo, index) => {
    return `<div class="todo"><p>${escape(index + 1)}. ${escape(todo)}</p> <div class="actions s-jZJiUkwef1J0"><i class="fa-regular fa-pen-to-square s-jZJiUkwef1J0"></i> <i class="fa-regular fa-trash-can s-jZJiUkwef1J0"></i></div> </div>`;
  })}</main> <div class="${escape(null_to_empty("enterTodo"), true) + " s-jZJiUkwef1J0"}"><input type="text" placeholder="enter to do" class="s-jZJiUkwef1J0"${add_attribute("value", currTodo, 0)}> <button class="s-jZJiUkwef1J0" data-svelte-h="svelte-o5h7g0">ADD</button></div></div>` : ``}`;
});
export {
  Page as default
};
