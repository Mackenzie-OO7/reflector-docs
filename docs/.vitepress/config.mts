import { defineConfig } from 'vitepress';

// import below is preventing local build from running
// import './theme/style.css';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Reflector Docs",
  description: "Real-time price feeds on Stellar",
  titleTemplate: "Reflector Docs",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  vue: {
    script: {
      defineModel: true
    }
  },
  // Enable using components in markdown
  markdown: {
    container: {
      tipLabel: 'Tip',
      warningLabel: 'Warning',
      dangerLabel: 'Danger',
      infoLabel: 'Info'
    }
  },
  head: [
    ['link', {text: 'Reflector Docs', rel: 'icon', href: '/reflector-logo-dark.svg', type: 'image/svg' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Source Code', link: 'https://github.com/reflector-network' }
    ],
    search: {
      provider: "local",
      options: {
        detailedView: true,
      },
    },
    editLink: {
      pattern: 'https://github.com/Mackenzie-OO7/reflector-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    logo: {
      alt: "Reflector Logo",
      light: "/reflector-logo-light.svg",
      dark: "/reflector-logo-dark.svg",
    },
    sidebar: [
      {
        text: 'Overview',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/overview/getting-started' },
          { text: 'How it works', link: '/overview/how-it-works' },
          { text: 'Contract Interface', link: '/overview/contract-interface' },
          {
            text: 'Usage Examples',
            collapsed: true,
            items: [
              { text: 'Forced Position Liquidation', link: '/overview/forced-position-liquidation' },
              { text: 'Portfolio Rebalancing', link: '/overview/portfolio-rebalancing' },
              { text: 'Algorithmic Stablecoin', link: '/overview/algorithmic-stablecoin' },
            ]
          },
        ],
      },
      {
        text: 'How-To Reflector',
        collapsed: false,
        items: [
          {
            text: 'How to integrate Oracles into your smart contract',
            link: '/how-to-guides/integrate-oracles'
          },
          {text: "How to integrate Reflector Subscriptions into your smart contract"},
          {text: "How to display live price feeds in a dApp frontend"},
        ],
      },
      {
        text: 'Tutorials',
        collapsed: false,
        items: [
          {text: 'Deploy a lending and borrowing contract powered by Reflector'},
          {text: "Build a trading bot powered by Reflector"}
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Mackenzie-OO7/reflector-docs' },
      { icon: 'discord', link: 'https://discord.gg/v2ggfDty2d' },
      { icon: 'twitter', link: 'https://twitter.com/in_reflector' },
    ]
  }
})
