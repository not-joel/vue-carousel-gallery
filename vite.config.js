import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { BootstrapVueNextResolver } from "bootstrap-vue-next";

// https://vitejs.dev/config/
export default defineConfig({
  base: 'vue-carousel-gallery',
  plugins: [
    vue(),
    Components({
      resolvers: [BootstrapVueNextResolver()],
    }),
  ],
  assetsInclude: ['**/*.JPG', '**/*.JPEG'],
});
