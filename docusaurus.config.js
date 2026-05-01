// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sergio Ausach | Ciberseguridad',
  tagline: '',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sergioausach.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sergioausach', // Usually your GitHub org/user name.
  projectName: 'sergioausach.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/Casos-Practicos',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/meta.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Portfolio',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'CasosPracticos',
            position: 'left',
            label: 'Casos Prácticos',
          },
          {
            href: 'https://www.linkedin.com/in/sergio-ausach-cuartero',
            label: 'LinkedIn',
            position: 'right',
          },
          {
            href: 'mailto:sergioausach@gmail.com',
            label: 'Correo Electrónico',
            position: 'right',
          },
          {
            href: 'https://drive.google.com/file/d/1kmZ-IEJof4YK1pGBeL0h-OdBWKdgtmoM/view',
            label: 'CV',
            position: 'right',
          },
          {
            href: 'https://linktr.ee/sergioausach',
            label: 'Linktree',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: 'U0C7ZOCB1V',
        apiKey: '0bf20b582e223d415da977ddb863949c',
        indexName: 'sergioausach-github-io',
        contextualSearch: true,
      },
    }),
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: 'A96FE119D1C01A11',
      },
    },
  ],
};

export default config;