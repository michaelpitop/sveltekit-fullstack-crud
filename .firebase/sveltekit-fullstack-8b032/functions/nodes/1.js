

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ce8a430a.js","_app/immutable/chunks/scheduler.6b255819.js","_app/immutable/chunks/index.23d71ce1.js","_app/immutable/chunks/singletons.27eb9ee3.js","_app/immutable/chunks/index.92808898.js"];
export const stylesheets = [];
export const fonts = [];
