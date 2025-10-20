export default defineNuxtConfig({
  compatibilityDate: "2025-10-14",
  typescript: {
    shim: false,
  },
  devtools: { enabled: false },
  css: ["@/assets/styles/main.scss", "swiper/css"],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "@/assets/styles/utils" as*;',
  //       },
  //     },
  //   },
  // },
  modules: [
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "nuxt-gtag",
    // "@vite-pwa/nuxt",
    "@nuxt/image",
    "nuxt-svgo",
  ],
  // image: {
  //    provider: 'ipx',
  //   quality: 80,
  //   screens: {
  //   xs: 479.9,   // (max-width: 767.9px)
  //   sm: 767.9,   // (max-width: 1023.9px)
  //   md: 1023.9,  // (max-width: 1439.9px)
  //   lg: 1439.9,  // (max-width: 1919.9px)
  //   xl: 1919.9   // Більше  1919.9px
  // }
  // },
  site: {
    // або вручну звідси підтягни
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://example.com",
    name: process.env.NUXT_SITE_NAME || "Default Site Name",
    trailingSlash: true, // шляхи з / в sitemap
  },

  gtag: {
    // id: "G-DK2KX7Z7S2", // 🔁 Увімкни, коли отримаєш ID від Google Analytics
  },

  app: {
    // layoutTransition: { name: "layout", mode: "out-in" },
    // pageTransition: { name: "page", mode: "out-in" },
     head: {
      charset: "utf-8",
      title: "Site",
      htmlAttrs: {
        lang: "uk",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "theme-color",
          content: "#d3e3fd",
        },

      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      //   { rel: "manifest", href: "/manifest.webmanifest" } // Увімкнення PWA в дев-режимі
      ],
      script: [
      // { src: "https://telegram.org/js/telegram-web-app.js" },
        // Додаткові скрипти, якщо потрібно
      ],
    },
  },
  // i18n: {
  //   lazy: true, // переклади завантажуються динамічно, лише при потребі → економія пам’яті
  //   langDir: "locales",// папка, де лежать файли перекладів для кожної локалі
  //   strategy: "prefix_except_default",  // prefix - всі локалі отримують префікс у URL: /ua/, /en/, /pl/, /ru/
  //   defaultLocale: "ua", // мова за замовчуванням → використовується для root та генерації лінків
  //   trailingSlash: true, // додає слеш у кінці URL → /ua/ замість /ua
  //   baseUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://example.com",

  //   locales: [
  //     {
  //       code: "ua",
  //       iso: "uk-UA",
  //       language: "uk",
  //       file: "ua.json",
  //       name: "Українська",
  //       isCatchallLocale: true, //  головна мова, яка отримає hreflang="x-default"
  //     },
  //     {
  //       code: "en",
  //       iso: "en-US",
  //       language: "en",
  //       file: "en.json",
  //       name: "English",
  //     },

  //   ],
  //   detectBrowserLanguage: {
  //     useCookie: true,
  //     cookieKey: "i18n_redirected",
  //     alwaysRedirect: false, // true завжди примусово редіректити на мову браузера
  //     redirectOn: 'root', // тільки редірект з /
  //     fallbackLocale: "ua",
  //   },
  // },
  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },

  routeRules: {
    "/.well-known/**": { redirect: "/" }, // або return 404
  },

  nitro: {
    preset: "static", //"node-server" — серверний режим (SSR) | "static"— повністю статичний сайт (SSG)
    prerender: {
      // Вкажи тут усі маршрути, які потрібно обов’язково зберегти як HTML
      routes: [
        // "/", // index.html
        // "/about", // about/index.html
      ],
    },
    // logLevel: "debug",
    // // Це примусово виведе помилки під час SSR
    // errorHandler: "~/server/error-handler",
  },
  // vite: {
  //   server: {
  //     watch: {
  //       usePolling: true, // додаткове слідкування за файлам,для оновлення сторінки
  //     },
  //   },
  // },
  devServer: {
    host: "0.0.0.0", // дозволяє доступ з інших пристроїв у мережі
    port: 3000,
  },
})