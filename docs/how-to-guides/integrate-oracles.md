---
description: Integrate Oracles into your Smart Contract
---

# Integrate Oracles into your Smart Contract

Choose what kind of a price feed you need — the one that reports Stellar Classic DEX asset prices on Soroban, or a token price feed from external centralized and decentralized exchanges. Copy a corresponding contract address and use it in your project.

Check [usage examples](../overview/usage-examples.md) to discover how basic oracle usage scenarios can be implemented on top of our infrastructure. Have questions? Do not hesitate to reach us or ask other developers on [Reflector Discord](https://discord.gg/v2ggfDty2d).

Reflector oracles are deployed on both Stellar Testnet and Public networks. Play around with them, test your code and then seamlessly switch to Pubnet once ready — just update the contract address, and that's it.

Our price feeds receive updates every 5 minutes. Since Reflector oracles operate non-stop, price data is written to the temporary storage and can be evicted over time. Calling the period() function on the oracle contract will return a guaranteed contract history retention period, usually 24 hours.

Reflector public price feed is free for everyone, without limitations. Don't see the token or a price source you are interested in? Let's talk on Discord or via email, we'll try to help you.

<script setup>
import PriceFeed from '../.vitepress/components/PriceFeed.vue'
</script>

<!-- ## Live Price Feed -->

<PriceFeed />