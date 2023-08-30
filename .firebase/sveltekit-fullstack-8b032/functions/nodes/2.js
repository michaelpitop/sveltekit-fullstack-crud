

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.84e51857.js","_app/immutable/chunks/scheduler.6b255819.js","_app/immutable/chunks/index.23d71ce1.js","_app/immutable/chunks/store.863a048f.js","_app/immutable/chunks/index.92808898.js"];
export const stylesheets = ["_app/immutable/assets/2.de74b647.css"];
export const fonts = [];
