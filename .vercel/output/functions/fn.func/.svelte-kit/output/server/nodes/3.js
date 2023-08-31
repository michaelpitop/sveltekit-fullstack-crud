

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.e19ba80c.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/index.ae027891.js","_app/immutable/chunks/store.e2207534.js","_app/immutable/chunks/index.ee0540d2.js"];
export const stylesheets = ["_app/immutable/assets/3.b89a5d6a.css"];
export const fonts = [];
