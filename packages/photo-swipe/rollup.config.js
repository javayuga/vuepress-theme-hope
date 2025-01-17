import { rollupTypescript, rollupVue } from "../../scripts/rollup";

export default [
  ...rollupTypescript("node/index", {
    external: [
      "@mr-hope/vuepress-shared",
      "@vuepress/utils",
      "vuepress-plugin-sass-palette",
    ],
  }),
  ...rollupVue("client/root-components/PhotoSwipe.vue", {
    external: [
      "@mr-hope/vuepress-shared/client",
      "@vuepress/client",
      "photoswipe",
      "photoswipe/dist/photoswipe-ui-default",
      "vue",
      "vue-router",
      /\.css$/,
      /\.scss$/,
    ],
    dtsExternal: [/\.css$/, /\.scss$/],
    copy: [["client/styles", "client"]],
  }),
];
