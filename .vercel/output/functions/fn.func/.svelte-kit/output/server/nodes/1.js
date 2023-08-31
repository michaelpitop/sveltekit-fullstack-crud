

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2330d793.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/index.ae027891.js","_app/immutable/chunks/singletons.f485e13f.js","_app/immutable/chunks/index.ee0540d2.js"];
export const stylesheets = [];
export const fonts = [];
