// vite.config.ts
import path from "path";
import { defineConfig } from "file:///C:/Users/Mattia/Desktop/Love/node_modules/.pnpm/vite@3.2.4/node_modules/vite/dist/node/index.js";
import Preview from "file:///C:/Users/Mattia/Desktop/Love/node_modules/.pnpm/vite-plugin-vue-component-preview@0.3.3_vite@3.2.4/node_modules/vite-plugin-vue-component-preview/out/index.js";
import Vue from "file:///C:/Users/Mattia/Desktop/Love/node_modules/.pnpm/@vitejs+plugin-vue@3.2.0_vite@3.2.4+vue@3.2.45/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Pages from "file:///C:/Users/Mattia/Desktop/Love/node_modules/.pnpm/vite-plugin-pages@0.27.1_vite@3.2.4/node_modules/vite-plugin-pages/dist/index.mjs";
import generateSitemap from "file:///C:/Users/Mattia/Desktop/Love/node_modules/.pnpm/vite-ssg-sitemap@0.4.3/node_modules/vite-ssg-sitemap/dist/index.js";
import Layouts from "file:///C:/Users/Mattia/Desktop/Love/node_modules/.pnpm/vite-plugin-vue-layouts@0.7.0_ltio2jrs4h243s6indlqgywoku/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Components from "file:///C:/Users/Mattia/Desktop/Love/node_modules/.pnpm/unplugin-vue-components@0.22.11_vue@3.2.45/node_modules/unplugin-vue-components/dist/vite.mjs";
import AutoImport from "file:///C:/Users/Mattia/Desktop/Love/node_modules/.pnpm/unplugin-auto-import@0.11.5_@vueuse+core@9.5.0/node_modules/unplugin-auto-import/dist/vite.js";
import Markdown from "file:///C:/Users/Mattia/Desktop/Love/node_modules/.pnpm/vite-plugin-vue-markdown@0.22.1_vite@3.2.4/node_modules/vite-plugin-vue-markdown/dist/index.mjs";
import Inspect from "file:///C:/Users/Mattia/Desktop/Love/node_modules/.pnpm/vite-plugin-inspect@0.7.9_vite@3.2.4/node_modules/vite-plugin-inspect/dist/index.mjs";
import LinkAttributes from "file:///C:/Users/Mattia/Desktop/Love/node_modules/.pnpm/markdown-it-link-attributes@4.0.1/node_modules/markdown-it-link-attributes/index.js";
import Unocss from "file:///C:/Users/Mattia/Desktop/Love/node_modules/.pnpm/unocss@0.46.5_vite@3.2.4/node_modules/unocss/dist/vite.mjs";
import Shiki from "file:///C:/Users/Mattia/Desktop/Love/node_modules/.pnpm/markdown-it-shiki@0.6.1/node_modules/markdown-it-shiki/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\Mattia\\Desktop\\Love";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  plugins: [
    Preview(),
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true
    }),
    Pages({
      extensions: ["vue", "md"]
    }),
    Layouts(),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "vue-i18n",
        "vue/macros",
        "@vueuse/head",
        "@vueuse/core"
      ],
      dts: "src/auto-imports.d.ts",
      dirs: [
        "src/composables",
        "src/store"
      ],
      vueTemplate: true
    }),
    Components({
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts"
    }),
    Unocss(),
    Markdown({
      wrapperClasses: "prose prose-sm m-auto text-left",
      headEnabled: true,
      markdownItSetup(md) {
        md.use(Shiki, {
          theme: {
            light: "vitesse-light",
            dark: "vitesse-dark"
          }
        });
        md.use(LinkAttributes, {
          matcher: (link) => /^https?:\/\//.test(link),
          attrs: {
            target: "_blank",
            rel: "noopener"
          }
        });
      }
    }),
    Inspect()
  ],
  test: {
    include: ["test/**/*.test.ts"],
    environment: "jsdom",
    deps: {
      inline: ["@vue", "@vueuse", "vue-demi"]
    }
  },
  ssgOptions: {
    script: "async",
    formatting: "minify",
    onFinished() {
      generateSitemap();
    }
  },
  ssr: {
    noExternal: ["workbox-window", /vue-i18n/]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxNYXR0aWFcXFxcRGVza3RvcFxcXFxMb3ZlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxNYXR0aWFcXFxcRGVza3RvcFxcXFxMb3ZlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9NYXR0aWEvRGVza3RvcC9Mb3ZlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgUHJldmlldyBmcm9tICd2aXRlLXBsdWdpbi12dWUtY29tcG9uZW50LXByZXZpZXcnXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBQYWdlcyBmcm9tICd2aXRlLXBsdWdpbi1wYWdlcydcbmltcG9ydCBnZW5lcmF0ZVNpdGVtYXAgZnJvbSAndml0ZS1zc2ctc2l0ZW1hcCdcbmltcG9ydCBMYXlvdXRzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAndml0ZS1wbHVnaW4tdnVlLW1hcmtkb3duJ1xuaW1wb3J0IEluc3BlY3QgZnJvbSAndml0ZS1wbHVnaW4taW5zcGVjdCdcbmltcG9ydCBMaW5rQXR0cmlidXRlcyBmcm9tICdtYXJrZG93bi1pdC1saW5rLWF0dHJpYnV0ZXMnXG5pbXBvcnQgVW5vY3NzIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IFNoaWtpIGZyb20gJ21hcmtkb3duLWl0LXNoaWtpJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICd+Lyc6IGAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKX0vYCxcbiAgICB9LFxuICB9LFxuXG4gIHBsdWdpbnM6IFtcbiAgICBQcmV2aWV3KCksXG5cbiAgICBWdWUoe1xuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLm1kJC9dLFxuICAgICAgcmVhY3Rpdml0eVRyYW5zZm9ybTogdHJ1ZSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9oYW5ub2VydS92aXRlLXBsdWdpbi1wYWdlc1xuICAgIFBhZ2VzKHtcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vSm9obkNhbXBpb25Kci92aXRlLXBsdWdpbi12dWUtbGF5b3V0c1xuICAgIExheW91dHMoKSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi1hdXRvLWltcG9ydFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW1wb3J0czogW1xuICAgICAgICAndnVlJyxcbiAgICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgICAndnVlLWkxOG4nLFxuICAgICAgICAndnVlL21hY3JvcycsXG4gICAgICAgICdAdnVldXNlL2hlYWQnLFxuICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcbiAgICAgIF0sXG4gICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnRzLmQudHMnLFxuICAgICAgZGlyczogW1xuICAgICAgICAnc3JjL2NvbXBvc2FibGVzJyxcbiAgICAgICAgJ3NyYy9zdG9yZScsXG4gICAgICBdLFxuICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tdnVlLWNvbXBvbmVudHNcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIC8vIGFsbG93IGF1dG8gbG9hZCBtYXJrZG93biBjb21wb25lbnRzIHVuZGVyIGAuL3NyYy9jb21wb25lbnRzL2BcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXG4gICAgICAvLyBhbGxvdyBhdXRvIGltcG9ydCBhbmQgcmVnaXN0ZXIgY29tcG9uZW50cyB1c2VkIGluIG1hcmtkb3duXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLm1kJC9dLFxuICAgICAgZHRzOiAnc3JjL2NvbXBvbmVudHMuZC50cycsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5vY3NzXG4gICAgLy8gc2VlIHVub2Nzcy5jb25maWcudHMgZm9yIGNvbmZpZ1xuICAgIFVub2NzcygpLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLXZ1ZS1tYXJrZG93blxuICAgIC8vIERvbid0IG5lZWQgdGhpcz8gVHJ5IHZpdGVzc2UtbGl0ZTogaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGVzc2UtbGl0ZVxuICAgIE1hcmtkb3duKHtcbiAgICAgIHdyYXBwZXJDbGFzc2VzOiAncHJvc2UgcHJvc2Utc20gbS1hdXRvIHRleHQtbGVmdCcsXG4gICAgICBoZWFkRW5hYmxlZDogdHJ1ZSxcbiAgICAgIG1hcmtkb3duSXRTZXR1cChtZCkge1xuICAgICAgICAvLyBodHRwczovL3ByaXNtanMuY29tL1xuICAgICAgICBtZC51c2UoU2hpa2ksIHtcbiAgICAgICAgICB0aGVtZToge1xuICAgICAgICAgICAgbGlnaHQ6ICd2aXRlc3NlLWxpZ2h0JyxcbiAgICAgICAgICAgIGRhcms6ICd2aXRlc3NlLWRhcmsnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIG1kLnVzZShMaW5rQXR0cmlidXRlcywge1xuICAgICAgICAgIG1hdGNoZXI6IChsaW5rOiBzdHJpbmcpID0+IC9eaHR0cHM/OlxcL1xcLy8udGVzdChsaW5rKSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICAgICAgICAgIHJlbDogJ25vb3BlbmVyJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXBsdWdpbi1pbnNwZWN0XG4gICAgLy8gVmlzaXQgaHR0cDovL2xvY2FsaG9zdDozMzMzL19faW5zcGVjdC8gdG8gc2VlIHRoZSBpbnNwZWN0b3JcbiAgICBJbnNwZWN0KCksXG4gIF0sXG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZpdGVzdC1kZXYvdml0ZXN0XG4gIHRlc3Q6IHtcbiAgICBpbmNsdWRlOiBbJ3Rlc3QvKiovKi50ZXN0LnRzJ10sXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgZGVwczoge1xuICAgICAgaW5saW5lOiBbJ0B2dWUnLCAnQHZ1ZXVzZScsICd2dWUtZGVtaSddLFxuICAgIH0sXG4gIH0sXG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtc3NnXG4gIHNzZ09wdGlvbnM6IHtcbiAgICBzY3JpcHQ6ICdhc3luYycsXG4gICAgZm9ybWF0dGluZzogJ21pbmlmeScsXG4gICAgb25GaW5pc2hlZCgpIHsgZ2VuZXJhdGVTaXRlbWFwKCkgfSxcbiAgfSxcblxuICBzc3I6IHtcbiAgICAvLyBUT0RPOiB3b3JrYXJvdW5kIHVudGlsIHRoZXkgc3VwcG9ydCBuYXRpdmUgRVNNXG4gICAgbm9FeHRlcm5hbDogWyd3b3JrYm94LXdpbmRvdycsIC92dWUtaTE4bi9dLFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1IsT0FBTyxVQUFVO0FB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
