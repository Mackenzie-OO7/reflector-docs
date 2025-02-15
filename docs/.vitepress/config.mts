import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Reflector Docs",
  description: "Real-time price feeds on Stellar",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
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
      pattern: 'https://github.com/Mackenzie-OO7/reflector-docs.git',
      text: 'Edit this page on GitHub',
    },

    // logo: {
    //   alt: "Reflector Logo",
    //   light: "",
    //   dark: "",
    // },

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Getting Started', link: '../overview/getting-started' },
          { text: 'How it works', link: '../overview/how-it-works' },
          { text: 'Contract Interface', link: '../overview/contract-interface' },
          { text: 'Usage Examples', link: '../overview/usage-examples',
            items: [
              { text: 'Forced Position Liquidation', link: '../overview/forced-position-liquidation' },
              { text: 'Portfolio Rebalancing', link: '../overview/portfolio-rebalancing' },
              { text: 'Algorithmic Stablecoin', link: '../overview/algorithmic-stablecoin' },
            ]
          },
        ],
      },
      { text: 'How-To Reflector',
        items: [
          { text: 'How to integrate Oracles into your smart contract',
            link: '../how-to-guides/integrate-oracles'
          },
        ]
       }, 
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Mackenzie-OO7/reflector-docs.git' },
      {icon: 'discord', link: 'https://discord.gg/v2ggfDty2d'},
      {icon: 'twitter', link: 'https://twitter.com/in_reflector'},
    ]
  }
})
