

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.aa21f47e.js","_app/immutable/chunks/scheduler.6b255819.js","_app/immutable/chunks/index.23d71ce1.js","_app/immutable/chunks/store.863a048f.js","_app/immutable/chunks/index.92808898.js"];
export const stylesheets = ["_app/immutable/assets/3.1d7735eb.css"];
export const fonts = [];
