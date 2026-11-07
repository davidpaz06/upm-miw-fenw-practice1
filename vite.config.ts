import { defineConfig } from "vite-plus";

// Permite abrir dist/index.html con doble clic (file://): los scripts de tipo
// módulo y el atributo crossorigin son bloqueados por el navegador en ese caso.
const openFromDisk = {
  name: "open-from-disk",
  enforce: "post" as const,
  transformIndexHtml(html: string) {
    return html.replace(/ type="module"/g, " defer").replace(/ crossorigin/g, "");
  },
};

export default defineConfig({
  base: "./",
  plugins: [openFromDisk],
  build: { rollupOptions: { output: { format: "iife" } } },
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
});
