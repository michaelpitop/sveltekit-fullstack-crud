import { c as create_ssr_component, a as subscribe, d as each, e as escape, b as add_attribute, n as null_to_empty } from "../../../chunks/ssr.js";
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
  code: ".mainContainer.svelte-16haw1n.svelte-16haw1n{display:flex;flex-direction:column;min-height:100vh;gap:24px;padding:24px;width:100%;max-width:1000px;margin:0 auto}.headerContainer.svelte-16haw1n.svelte-16haw1n{display:flex;align-items:center;justify-content:space-between}.headerBtns.svelte-16haw1n.svelte-16haw1n{display:flex;align-items:center;gap:14px}.headerContainer.svelte-16haw1n button.svelte-16haw1n{background:#003c5b;color:white;padding:10px 18px;border:none;border-radius:4px;font-weight:700;display:flex;align-items:center;gap:10px;cursor:pointer}.headerContainer.svelte-16haw1n button i.svelte-16haw1n{font-size:1.1rem}.headerContainer.svelte-16haw1n button.svelte-16haw1n:hover{opacity:0.7}main.svelte-16haw1n.svelte-16haw1n{display:flex;flex-direction:column;gap:8px;flex:1}.actions.svelte-16haw1n.svelte-16haw1n{display:flex;align-items:center;gap:14px;font-size:1.3rem}.actions.svelte-16haw1n i.svelte-16haw1n{cursor:pointer}.actions.svelte-16haw1n i.svelte-16haw1n:hover{color:coral}.enterTodo.svelte-16haw1n.svelte-16haw1n{display:flex;align-items:stretch;border:1px solid #0891b2;border-radius:5px;overflow:hidden}.enterTodo.svelte-16haw1n input.svelte-16haw1n{background:transparent;border:none;padding:14px;color:white;flex:1}.enterTodo.svelte-16haw1n input.svelte-16haw1n:focus{outline:none}.enterTodo.svelte-16haw1n button.svelte-16haw1n{padding:0 28px;background:#003c5b;border:none;color:cyan;font-weight:600;cursor:pointer}.enterTodo.svelte-16haw1n button.svelte-16haw1n:hover{background:transparent}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let todoList = [];
  let currTodo = "";
  authStore.subscribe((curr) => {
    todoList = curr.data.todos;
  });
  $$result.css.add(css);
  $$unsubscribe_authStore();
  return `${!$authStore.loading ? `<div class="mainContainer svelte-16haw1n"><div class="headerContainer svelte-16haw1n"><h1 data-svelte-h="svelte-uky5qm">To do list</h1> <div class="headerBtns svelte-16haw1n"><button class="svelte-16haw1n" data-svelte-h="svelte-htde8o"><i class="fa-regular fa-floppy-disk svelte-16haw1n"></i> <p>Save</p></button> <button class="svelte-16haw1n" data-svelte-h="svelte-fctx9k"><i class="fa-solid fa-right-from-bracket svelte-16haw1n"></i> <p>Logout</p></button></div></div> <main class="svelte-16haw1n">${todoList.length === 0 ? `<p data-svelte-h="svelte-1jtqiij">You have nothing to do!</p>` : ``} ${each(todoList, (todo, index) => {
    return `<div class="todo"><p>${escape(index + 1)}. ${escape(todo)}</p> <div class="actions svelte-16haw1n"><i class="fa-regular fa-pen-to-square svelte-16haw1n"></i> <i class="fa-regular fa-trash-can svelte-16haw1n"></i></div> </div>`;
  })}</main> <div class="${escape(null_to_empty("enterTodo"), true) + " svelte-16haw1n"}"><input type="text" placeholder="enter to do" class="svelte-16haw1n"${add_attribute("value", currTodo, 0)}> <button class="svelte-16haw1n" data-svelte-h="svelte-o5h7g0">ADD</button></div></div>` : ``}`;
});
export {
  Page as default
};
