// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///Users/chris/projects/vue-github-calendar/node_modules/.pnpm/vite@3.2.3_ajklay5k626t46b6fyghkbup3i/node_modules/vite/dist/node/index.js";
import Vue from "file:///Users/chris/projects/vue-github-calendar/node_modules/.pnpm/@vitejs+plugin-vue@3.2.0_vite@3.2.3+vue@3.2.45/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Unocss from "file:///Users/chris/projects/vue-github-calendar/node_modules/.pnpm/unocss@0.46.4_rollup@2.79.1+vite@3.2.3/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///Users/chris/projects/vue-github-calendar/node_modules/.pnpm/unplugin-auto-import@0.11.4_mzriwbjum4j5a7cktevzuvc2c4/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///Users/chris/projects/vue-github-calendar/node_modules/.pnpm/unplugin-vue-components@0.22.9_rollup@2.79.1+vue@3.2.45/node_modules/unplugin-vue-components/dist/vite.mjs";
import Pages from "file:///Users/chris/projects/vue-github-calendar/node_modules/.pnpm/vite-plugin-pages@0.27.1_vite@3.2.3/node_modules/vite-plugin-pages/dist/index.mjs";
import Layouts from "file:///Users/chris/projects/vue-github-calendar/node_modules/.pnpm/vite-plugin-vue-layouts@0.7.0_mx5yx4jnawtus5acnzhmknmkc4/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Markdown from "file:///Users/chris/projects/vue-github-calendar/node_modules/.pnpm/vite-plugin-md@0.20.4_sdvfgryl4f3cxck7gt4hqkegeq/node_modules/vite-plugin-md/dist/index.js";
import VueSetupExtend from "file:///Users/chris/projects/vue-github-calendar/node_modules/.pnpm/vite-plugin-vue-setup-extend@0.4.0_vite@3.2.3/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import VueI18n from "file:///Users/chris/projects/vue-github-calendar/node_modules/.pnpm/@intlify+vite-plugin-vue-i18n@6.0.3_vite@3.2.3+vue-i18n@9.2.2/node_modules/@intlify/vite-plugin-vue-i18n/lib/index.mjs";
var __vite_injected_original_dirname = "/Users/chris/projects/vue-github-calendar";
var r = (src) => resolve(__vite_injected_original_dirname, src);
var vite_config_default = defineConfig({
  plugins: [
    Vue({ reactivityTransform: true, include: [/\.vue$/, /\.md$/] }),
    Unocss(),
    Pages({ extensions: ["vue", "md"] }),
    Layouts(),
    AutoImport({
      imports: ["vue", "pinia", "vue-router", "@vueuse/core", "vue-i18n"],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/composables", "src/store"],
      vueTemplate: true
    }),
    Components({
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts"
    }),
    Markdown(),
    VueSetupExtend(),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [r("locales/**")]
    })
  ],
  resolve: {
    alias: {
      "~": r("src")
    }
  },
  optimizeDeps: {
    include: ["vue", "vue-router", "@vueuse/core", "pinia"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2hyaXMvcHJvamVjdHMvdnVlLWdpdGh1Yi1jYWxlbmRhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2NocmlzL3Byb2plY3RzL3Z1ZS1naXRodWItY2FsZW5kYXIvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2NocmlzL3Byb2plY3RzL3Z1ZS1naXRodWItY2FsZW5kYXIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBVbm9jc3MgZnJvbSAndW5vY3NzL3ZpdGUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCBQYWdlcyBmcm9tICd2aXRlLXBsdWdpbi1wYWdlcydcbmltcG9ydCBMYXlvdXRzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzJ1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3ZpdGUtcGx1Z2luLW1kJ1xuaW1wb3J0IFZ1ZVNldHVwRXh0ZW5kIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1zZXR1cC1leHRlbmQnXG5cbmltcG9ydCBWdWVJMThuIGZyb20gJ0BpbnRsaWZ5L3ZpdGUtcGx1Z2luLXZ1ZS1pMThuJ1xuXG5jb25zdCByID0gKHNyYzogc3RyaW5nKSA9PiByZXNvbHZlKF9fZGlybmFtZSwgc3JjKVxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBWdWUoeyByZWFjdGl2aXR5VHJhbnNmb3JtOiB0cnVlLCBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10gfSksXG4gICAgVW5vY3NzKCksXG4gICAgUGFnZXMoeyBleHRlbnNpb25zOiBbJ3Z1ZScsICdtZCddIH0pLFxuICAgIExheW91dHMoKSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFsndnVlJywgJ3BpbmlhJywgJ3Z1ZS1yb3V0ZXInLCAnQHZ1ZXVzZS9jb3JlJywgJ3Z1ZS1pMThuJ10sXG4gICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnRzLmQudHMnLFxuICAgICAgZGlyczogWydzcmMvY29tcG9zYWJsZXMnLCAnc3JjL3N0b3JlJ10sXG4gICAgICB2dWVUZW1wbGF0ZTogdHJ1ZSxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLm1kJC9dLFxuICAgICAgZHRzOiAnc3JjL2NvbXBvbmVudHMuZC50cycsXG4gICAgfSksXG4gICAgTWFya2Rvd24oKSxcbiAgICBWdWVTZXR1cEV4dGVuZCgpLFxuICAgIFZ1ZUkxOG4oe1xuICAgICAgcnVudGltZU9ubHk6IHRydWUsXG4gICAgICBjb21wb3NpdGlvbk9ubHk6IHRydWUsXG4gICAgICBpbmNsdWRlOiBbcignbG9jYWxlcy8qKicpXSxcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnfic6IHIoJ3NyYycpLFxuICAgIH0sXG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFsndnVlJywgJ3Z1ZS1yb3V0ZXInLCAnQHZ1ZXVzZS9jb3JlJywgJ3BpbmlhJ10sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2UyxTQUFTLGVBQWU7QUFDclUsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sY0FBYztBQUNyQixPQUFPLG9CQUFvQjtBQUUzQixPQUFPLGFBQWE7QUFYcEIsSUFBTSxtQ0FBbUM7QUFhekMsSUFBTSxJQUFJLENBQUMsUUFBZ0IsUUFBUSxrQ0FBVyxHQUFHO0FBRWpELElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUksRUFBRSxxQkFBcUIsTUFBTSxTQUFTLENBQUMsVUFBVSxPQUFPLEVBQUUsQ0FBQztBQUFBLElBQy9ELE9BQU87QUFBQSxJQUNQLE1BQU0sRUFBRSxZQUFZLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUFBLElBQ25DLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxNQUNULFNBQVMsQ0FBQyxPQUFPLFNBQVMsY0FBYyxnQkFBZ0IsVUFBVTtBQUFBLE1BQ2xFLEtBQUs7QUFBQSxNQUNMLE1BQU0sQ0FBQyxtQkFBbUIsV0FBVztBQUFBLE1BQ3JDLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFlBQVksQ0FBQyxPQUFPLElBQUk7QUFBQSxNQUN4QixTQUFTLENBQUMsVUFBVSxjQUFjLE9BQU87QUFBQSxNQUN6QyxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsSUFDRCxTQUFTO0FBQUEsSUFDVCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixpQkFBaUI7QUFBQSxNQUNqQixTQUFTLENBQUMsRUFBRSxZQUFZLENBQUM7QUFBQSxJQUMzQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxFQUFFLEtBQUs7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLE9BQU8sY0FBYyxnQkFBZ0IsT0FBTztBQUFBLEVBQ3hEO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
