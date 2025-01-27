<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Price {
  symbol: string
  price: string
  currency: string
}

interface PriceUpdate {
  timestamp: string
  prices: Price[]
}

interface PriceFeedData {
  oracleContract: string
  dataSource: string
  status: string
  baseAsset: string
  decimals: number
  sampling: string
  retention: string
  updates: PriceUpdate[]
}

const priceFeed = ref<PriceFeedData>({
  oracleContract: 'CAFJ...4DLN',
  dataSource: 'External CEX & DEX',
  status: 'live (4-of-7 multisig)',
  baseAsset: 'USD',
  decimals: 14,
  sampling: '5 minutes',
  retention: '24 hours',
  updates: [
    {
      timestamp: '2025-01-27 12:00:00 UTC',
      prices: [
        { symbol: 'BTC', price: '98941.18346530430284', currency: 'USD' },
        { symbol: 'ETH', price: '3065.0806163978909', currency: 'USD' },
        { symbol: 'USDT', price: '0.99947734602927', currency: 'USD' },
        { symbol: 'XRP', price: '2.80841124540962', currency: 'USD' },
        { symbol: 'SOL', price: '226.45126314850109', currency: 'USD' },
      ]
    }
  ]
})

const fetchPriceFeed = async (): Promise<void> => {
  try {
    // Replace with actual API call
    // const response = await fetch('your-api-endpoint')
    // const data: PriceFeedData = await response.json()
    // priceFeed.value = data
  } catch (error) {
    console.error('Failed to fetch price feed:', error)
  }
}

onMounted(() => {
  fetchPriceFeed()
  // Update every 5 minutes
  setInterval(fetchPriceFeed, 5 * 60 * 1000)
})
</script>

<template>
  <div class="price-feed rounded-lg bg-gray-900 p-6">
    <h2 class="text-xl font-bold mb-4 text-white">LIVE PRICE FEED</h2>
    
    <div class="mb-6">
      <div class="flex items-center mb-2">
        <span class="text-gray-400">Oracle contract</span>
        <code class="ml-2 text-blue-400">{{ priceFeed.oracleContract }}</code>
      </div>
      
      <div class="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div class="text-gray-400">Data source:</div>
          <div class="text-white">{{ priceFeed.dataSource }}</div>
        </div>
        <div>
          <div class="text-gray-400">Status:</div>
          <div class="text-white">{{ priceFeed.status }}</div>
        </div>
        <div>
          <div class="text-gray-400">Base asset:</div>
          <div class="text-white">{{ priceFeed.baseAsset }}</div>
        </div>
        <div>
          <div class="text-gray-400">Decimals:</div>
          <div class="text-white">{{ priceFeed.decimals }}</div>
        </div>
        <div>
          <div class="text-gray-400">Sampling:</div>
          <div class="text-white">{{ priceFeed.sampling }}</div>
        </div>
        <div>
          <div class="text-gray-400">Retention:</div>
          <div class="text-white">{{ priceFeed.retention }}</div>
        </div>
      </div>
    </div>

    <div class="recent-updates">
      <h3 class="text-gray-400 mb-2">Recent price feed updates:</h3>
      <div v-for="update in priceFeed.updates" :key="update.timestamp" class="mb-4">
        <div class="text-gray-400 text-sm mb-2">{{ update.timestamp }}</div>
        <div class="grid gap-2">
          <div v-for="price in update.prices" :key="price.symbol" 
               class="grid grid-cols-3 text-white">
            <div class="font-mono">{{ price.symbol }}</div>
            <div class="font-mono text-right">{{ price.price }}</div>
            <div class="font-mono text-right">{{ price.currency }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.price-feed {
  font-family: monospace;
}
</style>