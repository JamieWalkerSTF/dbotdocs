// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DBot Style Guide",
  tagline: "Documented and organized style guide for DBot",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://dbotdocs.vercel.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "redmarble", // Usually your GitHub org/user name.
  projectName: "dbotstyles", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "DBot Docs",
        logo: {
          alt: "DBot Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "designSidebar",
            position: "left",
            label: "UI & Design",
          },

          {
            to: "docs/widgets",
            sidebarId: "widgetSidebar",
            position: "left",
            label: "Widgets",
          },

          {
            type: "docSidebar",
            sidebarId: "modulesSidebar",
            position: "left",
            label: "Modules",
          },

          { to: "/blog", label: "Release Notes", position: "left" },

          {
            href: "https://github.com/redmarble",
            label: "Components Git",
            position: "right",
          },
          {
            href: "https://github.com/JamieWalkerSTF/dbotdocs",
            label: "Docs Git",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Development Staging",
            items: [
              {
                label: "Commercial (Dev)",
                href: "https://dbotcommercial-dev.azurewebsites.net/",
              },
              {
                label: "Downstream (Dev)",
                href: "https://dev.downstream.dbot.app/",
              },
              {
                label: "IPV Pulse (Dev)",
                href: "https://dbotvaluation-dev.azurewebsites.net/",
              },
              {
                label: "Approvals (Dev)",
                href: "https://dbotapprovals-dev.azurewebsites.net/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
