const math = require("remark-math");
const katex = require("rehype-katex");

require("dotenv").config();

module.exports = {
  title: "Polygon ID Documentation",
  tagline: "The official developer documentation hub for Polygon ID.",
  url: "https://devs.polygonid.com",
  baseUrl: "/",
  favicon: "/img/logo-round-purple.png",
  organizationName: "0xPolygonID",
  projectName: "docs",
  customFields: {
    description: "Build your next blockchain dApp using Polygon ID.",
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    path: "i18n",
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        calendar: "gregory",
        path: "en",
      },
    },
  },
  themeConfig: {
    announcementBar: {
      id: "learn_more",
      content:
        'Polygon Mumbai support ended! Please, migrate to Amoy <a class="announcement-link" rel="noopener noreferrer" href="/docs/mumbai-to-amoy-migration"> Learn more</a>',
      backgroundColor: "#20232a",
      textColor: "#fff",
      isCloseable: false,
    },
    metadata: [
      {
        name: "description",
        content: "Welcome to Polygon ID Documentation, the official documentation for Polygon ID.",
      },
    ],
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    footer: {
      style: "dark",
      links: [],
    },

    image: "img/thumbnail.jpg",
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
      defaultLanguage: "javascript",
      additionalLanguages: ["solidity"],
    },
    algolia: {
      // need to update this
      indexName: "devs-polygonid",
      appId: "VHJ21ILMOQ",
      apiKey: process.env.ALGOLIA_API_KEY,
      contextualSearch: true,
      algoliaOptions: {
        attributesToSnippet: ["content:20"],
      },
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Polygon logo",
        src: "img/polygon-id-logo-white.svg",
        srcDark: "img/polygon-id-logo-white.svg",
        href: "/",
        target: "_self",
      },
      items: [
        {
          position: "left",
          label: "Build",
          items: [
            {
              href: "/docs/issuer/issuer-overview/",
              label: "Issuer",
            },
            {
              href: "/docs/verifier/verifier-overview/",
              label: "Verifier",
            },
            {
              href: "/docs/wallet/wallet-overview/",
              label: "Wallet",
            },
            {
              href: "/docs/js-sdk/js-sdk-overview/",
              label: "JS-SDK",
            },
            {
              href: "/docs/smart-contracts/",
              label: "Smart Contracts",
            },
          ],
        },
        {
          position: "left",
          label: "Tools",
          items: [
            {
              href: "https://schema-builder.polygonid.me/",
              label: "Schema Explorer",
            },
            {
              href: "https://schema-builder.polygonid.me/builder",
              label: "Schema Builder",
            },
            {
              href: "https://schema-builder.polygonid.me/query-builder",
              label: "Query Builder",
            },
            {
              href: "https://jwz.polygonid.me",
              label: "JWZ Validator",
            },
          ],
        },
        {
          position: "left",
          label: "Learn",
          items: [
            {
              href: "/docs/faqs/",
              label: "FAQs",
            },
            {
              href: "https://www.youtube.com/playlist?list=PLRD3rkREa7mLLJ6jfUTygXV1iK_AvsDdw",
              label: "Fundamentals",
            },
            {
              href: "https://www.youtube.com/playlist?list=PLRD3rkREa7mLjDB1qL4KkCtob6kPJIvhS",
              label: "Architecture",
            },
            {
              href: "https://www.youtube.com/playlist?list=PLRD3rkREa7mIgx_RHZdin74vEb2A1Evek",
              label: "Inside Polygon ID",
            },
          ],
        },
        {
          position: "left",
          label: "Releases",
          href: "/docs/releases",
        },
        {
          position: "left",
          label: "Support",
          href: "https://support.polygon.technology/support/solutions/82000473421",
        },
        {
          position: "left",
          label: "Protocol",
          items: [
            {
              href: "https://docs.iden3.io/",
              label: "Iden3 General Docs",
            },
            {
              href: "https://iden3-communication.io/",
              label: "Iden3comm",
            },
          ],
        },
        {
          href: "https://github.com/0xPolygonID",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          href: "https://twitter.com/0xPolygonID",
          position: "right",
          className: "header-twitter-link",
        },
        {
          href: "https://discord.com/channels/635865020172861441/1052090291743637504",
          position: "right",
          className: "header-discord-link",
        },
      ],
    },
  },
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/0xPolygonID/docs/blob/main",
          path: "docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [[katex, { strict: false, throwOnError: true, globalGroup: true }]],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
