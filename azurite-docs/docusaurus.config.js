// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Azurite',
  tagline: '💎 Azurite, voor jullie 💎',
  favicon: 'img/azurite-logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://azurite.info',
  // For a custom domain, the baseUrl should be '/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Azaultic', // Usually your GitHub org/user name.
  projectName: 'AzuriteWebsite', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Scripts and stylesheets configuration
  scripts: [],
  stylesheets: [],
  
  // Client modules for hydration
  clientModules: [],

  // Headtags for CSP and external resources
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        'http-equiv': 'Content-Security-Policy',
        content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://discord.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: http:; font-src 'self' data:; connect-src 'self' https://discord.com https://discordapp.com https://lively-shape-5d4b.azuritebe.workers.dev; frame-src 'self' https://discord.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'",
      },
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      // @ts-ignore
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        hashed: true,
        language: ["en", "nl"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexBlog: false,
        indexDocs: true,
        docsRouteBasePath: '/docs',
        searchBarShortcutHint: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      // Announcement bar voor belangrijke updates (must be inside themeConfig)
      announcementBar: {
        id: 'server_launch',
        content:
          'Azurite is nu volop in Development! Join onze Discord voor meer info - <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/F3qr9MC8sC">Klik hier</a>',
        backgroundColor: '#3a5c6a',
        textColor: '#e2e8f0',
        isCloseable: true,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Azurite',
        logo: {
          alt: 'AzuriteLogo',
          src: 'img/azurite-logo.png',
        },
        items: [
          {
            to: '/docs/introductie',
            position: 'left',
            label: '💎・Introductie',
          },
          {
            to: '/docs/discord-regels',
            position: 'left',
            label: '📕・Discord Regels',
          },
          {
            to: '/docs/server-regels',
            position: 'left',
            label: '📘・Server Regels',
          },
          {
            to: '/docs/whitelist-info',
            position: 'left',
            label: '🔓・Whitelist info',
          },
          {
            to: '/docs/faq',
            position: 'left',
            label: '📚・FAQ',
          },
          {
            to: '/docs/hoe-connecten',
            position: 'left',
            label: '🌐・Verbinden met Azurite',
          },
          {
            to: '/docs/cache-clearen',
            position: 'left',
            label: '💾・Cache Clearen',
          },
          {
            to: '/docs/changelogs',
            position: 'left',
            label: '📝・Changelogs',
            activeBaseRegex: '/docs/changelogs/.*'
          },
          {
            to: '/ban-appeal',
            position: 'right',
            label: '📋・Ban Appeal',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Info',
            items: [
              {
                label: 'Introductie',
                to: '/docs/introductie',
              },
              {
                label: 'Server Regels',
                to: '/docs/server-regels',
              },
              {
                label: 'Changelogs',
                to: '/docs/changelogs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Join Discord',
                href: 'https://discord.gg/F3qr9MC8sC',
              },
              {
                label: 'Follow on TikTok',
                href: 'https://tiktok.com/@azuriterp',
              },
              {
                label: 'Follow on Twitch',
                href: 'https://twitch.tv/azuriterp',
              },
            ],
          },
          {
            title: 'Terms of Service',
            items: [
              {
                label: 'CFX (FiveM)',
                href: 'https://runtime.fivem.net/platform-license-agreement-12-sept-2023.pdf',
              },
              {
                label: 'Twitch',
                href: 'https://legal.twitch.com/en/legal/terms-of-service/',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/terms',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/legal/page/us/terms-of-service/en',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/static?template=terms',
              },
              {
                label: 'Kick',
                href: 'https://kick.com/terms-of-service',
              },
            ],
          },
          {
            title: 'Server Info',
            items: [
              {
                label: 'Connecten',
                to: '/docs/hoe-connecten',
              },
              {
                label: 'Support',
                to: 'https://discord.gg/F3qr9MC8sC',
              },
              {
                label: 'Ban Appeal',
                to: '/ban-appeal',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Azurite. Made with 💎 and ❤️`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
