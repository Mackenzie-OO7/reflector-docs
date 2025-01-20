import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Reflector",
  description: "A documentation site for Reflector Oracles on Stellar, built with VitePress",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Source Code', link: 'https://github.com/reflector-network' },
      { text: 'Discord Community', link: 'https://discord.gg/v2ggfDty2d' }
    ],

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
      { icon: 'github', link: 'https://github.com/Mackenzie-OO7/reflector-docs.git' }
    ]
  }
})
