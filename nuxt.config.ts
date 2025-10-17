// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2025-09-21",

  // Auto-import components
  components: true,

  // Dev server configuration
  devServer: {
    port: parseInt(process.env.NUXT_PORT || "3000"),
    host: process.env.NUXT_HOST || "localhost",
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
      apiUrl: process.env.NUXT_PUBLIC_API_URL || "http://localhost:8000",
    },
  },

  // App configuration
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Korepetycje - Profesjonalne Nauczanie",
      meta: [
        {
          name: "description",
          content:
            "Profesjonalne korepetycje z matematyki, fizyki, chemii i innych przedmiotów. Doświadczeni nauczyciele, indywidualne podejście.",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "robots", content: "index, follow" },
        {
          property: "og:title",
          content: "Korepetycje - Profesjonalne Nauczanie",
        },
        {
          property: "og:description",
          content:
            "Profesjonalne korepetycje z matematyki, fizyki, chemii i innych przedmiotów.",
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "pl_PL" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
        },
      ],
    },
  },

  // CSS framework
  css: ["@/assets/css/main.css"],

  // Modules
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],

  // Image optimization
  image: {
    provider: "ipx",
    quality: 80,
    format: ["webp"],
  },

  // Tailwind CSS
  tailwindcss: {
    cssPath: "@/assets/css/main.css",
  },

  // Build configuration
  nitro: {
    compressPublicAssets: true,
  },

  sitemap: {
    strictNuxtContentPaths: true,
    autoI18n: false,
    siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3055",
  },
  robots: {
    rules: {
      UserAgent: "*",
      Allow: "/",
    },
    sitemap: [
      (process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3055") +
        "/sitemap.xml",
    ],
  },
});
