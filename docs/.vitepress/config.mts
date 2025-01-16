import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Reflector Docs",
  description: "A documentation site for Reflector Oracles on Stellar, built with VitePress",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'How it works' },
          { text: 'Contract Interface' },
          { text: 'Usage Examples',
            items: [
              { text: 'Forced Position Liquidation' },
              { text: 'Portfolio Rebalancing' },
              { text: 'Algorithmic Stablecoin' },
            ]
           },
        ]
      },
      { text: 'How-To Reflector',
        items: [
          { text: 'How to integrate Oracles into your smart contract',
            link: ''
          },
        ]
       },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Mackenzie-OO7/reflector-docs.git' }
    ]
  }
})
