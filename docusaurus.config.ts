import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Grammar AI — Исправление ошибок в тексте с помощью ИИ",
  tagline: "Простое приложение для автоматического исправления грамматических и орфографических ошибок в тексте.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://grammar-ai.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "grammar-ai", // Usually your GitHub org/user name.
  projectName: "grammar-ai-app", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  onBrokenAnchors: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    () => ({
      name: "inject-tag",
      injectHtmlTags() {
        return {
          headTags: [
            // Google Analytics
            {
              tagName: "script",
              attributes: { async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-XWQJNEH9KG" },
            },
            {
              tagName: "script",
              innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XWQJNEH9KG');`,
            },
            {
              tagName: "script",
              innerHTML: `(function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104372760', 'ym');

    ym(104372760, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});`,
            },
            {
              tagName: "noscript",
              innerHTML: `<div><img src="https://mc.yandex.ru/watch/104372760" style="position:absolute; left:-9999px;" alt="" /></div>`,
            },
          ],
        };
      },
    }),
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/social-card.jpg",
    navbar: {
      title: "Grammar AI",
      logo: {
        alt: "Grammar AI Application",
        src: "img/logo.webp",
      },
      items: [
        { to: "/#about", label: "About", position: "left" },
        { to: "/#features", label: "Features", position: "left" },
        { to: "/#how-it-works", label: "How It Works", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              to: "/privacy",
            },
            {
              label: "Terms of Service",
              to: "/terms",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              to: "/contacts",
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
