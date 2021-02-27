module.exports = {
  en: {
    "/guide/": [
      {
        title: "Get Started",
        icon: "creative",
        prefix: "get-started/",
        collapsable: false,
        children: ["intro", "install", "markdown"],
      },
      {
        title: "Interface",
        icon: "skin",
        prefix: "interface/",
        collapsable: false,
        children: ["darkmode", "theme-color", "icon", "others"],
      },
      {
        title: "Layout",
        icon: "layout",
        prefix: "layout/",
        collapsable: false,
        children: [
          "navbar",
          "sidebar",
          {
            title: "Page",
            icon: "page",
            collapsable: false,
            children: ["page", "breadcrumb", "footer"],
          },
          "home",
          "slides",
        ],
      },
      {
        title: "Markdown enhance",
        icon: "markdown",
        prefix: "markdown/",
        collapsable: false,
        children: [
          "intro",
          "components",
          "align",
          "sup-sub",
          "footnote",
          "mark",
          "tex",
          "flowchart",
          "demo",
          "presentation",
          "external",
        ],
      },
      {
        title: "Features",
        icon: "discover",
        prefix: "feature/",
        collapsable: false,
        children: [
          "page-info",
          "comment",
          "copy-code",
          "photo-swipe",
          "copyright",
          "last-update",
          "encrypt",
          "pwa",
          "feed",
          "seo-sitemap",
          "typescript",
        ],
      },
      {
        title: "Blog",
        icon: "layout",
        prefix: "blog/",
        collapsable: false,
        children: ["blog", "home"],
      },
    ],

    "/config/": [
      {
        title: "ThemeConfig",
        icon: "config",
        prefix: "theme/",
        collapsable: false,
        children: ["", "default", "feature", "plugin", "apperance"],
      },
      "page",
      "stylus",
      {
        title: "Plugins",
        icon: "plugin",
        prefix: "plugin/",
        collapsable: false,
        children: ["", "container", "copyright"],
      },
    ],

    "/basic/": [
      {
        title: "Markdown",
        icon: "markdown",
        prefix: "markdown/",
        collapsable: false,
        children: [
          "",
          "demo",
          {
            title: "Emoji",
            icon: "emoji",
            path: "emoji/",
            prefix: "emoji/",
            collapsable: false,
            children: ["people", "nature", "object", "place", "symbol"],
          },
        ],
      },
      {
        title: "VuePress",
        icon: "vue",
        prefix: "vuepress/",
        collapsable: false,
        children: [
          "",
          "file",
          "markdown",
          "plugin",
          "theme",
          "command",
          "case",
        ],
      },
    ],

    "/": ["", "guide/", "config/", "basic/", "FAQ/", "demo/"],
  },
  zh: {
    "/zh/guide/": [
      {
        title: "快速上手",
        icon: "creative",
        prefix: "get-started/",
        collapsable: false,
        children: ["intro", "install", "markdown"],
      },
      {
        title: "界面",
        icon: "skin",
        prefix: "interface/",
        collapsable: false,
        children: ["darkmode", "theme-color", "icon", "others"],
      },
      {
        title: "布局",
        icon: "layout",
        prefix: "layout/",
        collapsable: false,
        children: [
          "navbar",
          "sidebar",
          {
            title: "页面",
            icon: "page",
            collapsable: false,
            children: ["page", "breadcrumb", "footer"],
          },
          "home",
          "slides",
        ],
      },
      {
        title: "Markdown 增强",
        icon: "markdown",
        prefix: "markdown/",
        collapsable: false,
        children: [
          "intro",
          "components",
          "align",
          "sup-sub",
          "footnote",
          "mark",
          "tex",
          "flowchart",
          "demo",
          "presentation",
          "external",
        ],
      },
      {
        title: "功能",
        icon: "discover",
        prefix: "feature/",
        collapsable: false,
        children: [
          "page-info",
          "comment",
          "copy-code",
          "photo-swipe",
          "copyright",
          "last-update",
          "encrypt",
          "pwa",
          "feed",
          "seo-sitemap",
          "typescript",
        ],
      },
      {
        title: "博客",
        icon: "layout",
        prefix: "blog/",
        collapsable: false,
        children: ["blog", "home"],
      },
    ],

    "/zh/config/": [
      {
        title: "主题配置",
        icon: "config",
        prefix: "theme/",
        collapsable: false,
        children: ["", "default", "feature", "plugin", "apperance"],
      },
      "page",
      "stylus",
      {
        title: "插件配置",
        icon: "plugin",
        prefix: "plugin/",
        collapsable: false,
        children: ["", "container", "copyright"],
      },
    ],

    "/zh/basic/": [
      {
        title: "Markdown",
        icon: "markdown",
        prefix: "markdown/",
        collapsable: false,
        children: [
          "",
          "demo",
          {
            title: "Emoji",
            icon: "emoji",
            path: "emoji/",
            prefix: "emoji/",
            collapsable: false,
            children: ["people", "nature", "object", "place", "symbol"],
          },
        ],
      },
      {
        title: "VuePress",
        icon: "vue",
        prefix: "vuepress/",
        collapsable: false,
        children: [
          "",
          "file",
          "markdown",
          "plugin",
          "theme",
          "command",
          "case",
        ],
      },
    ],

    "/zh/": ["", "guide/", "config/", "basic/", "FAQ/", "demo/"],
  },
};
