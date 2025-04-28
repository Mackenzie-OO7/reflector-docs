<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Types for our price feed data
interface Price {
  symbol: string
  price: string
  currency: string
}

interface PriceFeedData {
  network: string
  oracleContract: string
  dataSource: string
  status: string
  baseAsset: string
  decimals: number
  sampling: string
  retention: string
  lastUpdate: string
  prices: Price[]
}

// Sample data matching the Reflector docs
const priceFeed = ref<PriceFeedData>({
  network: 'pubnet network',
  oracleContract: 'CAFJ...4DLN',
  dataSource: 'External CEX & DEX',
  status: 'live (4-of-7 multisig)',
  baseAsset: 'USD',
  decimals: 14,
  sampling: '5 minutes',
  retention: '24 hours',
  lastUpdate: '2025-01-27 12:00:00 UTC',
  prices: [
    { symbol: 'BTC', price: '95309.00159947487622', currency: 'USD' },
    { symbol: 'ETH', price: '1814.72039152720102', currency: 'USD' },
    { symbol: 'USDT', price: '1.00034324509816', currency: 'USD' },
    { symbol: 'XRP', price: '2.32708235667266', currency: 'USD' },
    { symbol: 'SOL', price: '152.17158362715446', currency: 'USD' },
    { symbol: 'USDC', price: '0.9996447234705', currency: 'USD' },
    { symbol: 'ADA', price: '0.72088071600326', currency: 'USD' },
    { symbol: 'AVAX', price: '22.24191499471181', currency: 'USD' },
    { symbol: 'DOT', price: '4.22671786376265', currency: 'USD' },
    { symbol: 'MATIC', price: '0.24530573337044', currency: 'USD' },
    { symbol: 'LINK', price: '14.94700072131707', currency: 'USD' },
    { symbol: 'DAI', price: '0.99990258318827', currency: 'USD' },
    { symbol: 'ATOM', price: '4.45631391845605', currency: 'USD' },
    { symbol: 'XLM', price: '0.28902643520506', currency: 'USD' },
    { symbol: 'UNI', price: '5.59886940588937', currency: 'USD' },
    { symbol: 'EURC', price: '1.13440057421877', currency: 'USD' }
  ]
});

// Function to fetch real price feed data (to be implemented later)
const fetchPriceFeed = async () => {
  try {
    // This will be implemented in step 2 - for now we use sample data
    console.log('Price feed would be fetched here');
  } catch (error) {
    console.error('Failed to fetch price feed:', error);
  }
};

onMounted(() => {
  // Initially load the data
  fetchPriceFeed();
  
  // Update every 5 minutes
  const interval = setInterval(fetchPriceFeed, 5 * 60 * 1000);
  
  // Clean up interval on component unmount
  return () => clearInterval(interval);
});
</script>

<template>
  <div class="price-feed">
    <h2 class="feed-title">LIVE PRICE FEED</h2>
    
    <div class="network-badge">{{ priceFeed.network }}</div>
    
    <div class="feed-details">
      <div class="detail">
        <span class="detail-label">Data source:</span>
        <span class="detail-value">{{ priceFeed.dataSource }}</span>
      </div>
      <div class="detail">
        <span class="detail-label">Status:</span>
        <span class="detail-value">{{ priceFeed.status }}</span>
      </div>
      <div class="detail">
        <span class="detail-label">Base asset:</span>
        <span class="detail-value">{{ priceFeed.baseAsset }}</span>
      </div>
      <div class="detail">
        <span class="detail-label">Decimals:</span>
        <span class="detail-value">{{ priceFeed.decimals }}</span>
      </div>
      <div class="detail">
        <span class="detail-label">Sampling:</span>
        <span class="detail-value">{{ priceFeed.sampling }}</span>
      </div>
      <div class="detail">
        <span class="detail-label">Retention:</span>
        <span class="detail-value">{{ priceFeed.retention }}</span>
      </div>
    </div>
    
    <div class="price-updates">
      <h3 class="updates-title">Recent price feed updates:</h3>
      <div class="price-list">
        <div v-for="price in priceFeed.prices" :key="price.symbol" class="price-item">
          <span class="symbol">{{ price.symbol }}</span>
          <span class="price">{{ price.price }}</span>
          <span class="currency">{{ price.currency }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.price-feed {
  background: linear-gradient(135deg, rgba(22, 68, 80, 0.8) 0%, rgba(18, 54, 63, 0.9) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(11, 124, 154, 0.3);
  box-shadow: 0 0 15px rgba(11, 184, 224, 0.4);
  padding: 1.5rem;
  border-radius: 0.5rem;
  color: white;
  font-family: monospace;
  transition: all 0.3s ease;
  margin: 1.5rem 0;
}

.price-feed:hover {
  box-shadow: 0 0 25px rgba(11, 184, 224, 0.4);
}

.feed-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(11, 184, 224, 0.4);
}

.network-badge {
  display: inline-block;
  background-color: rgba(11, 124, 154, 0.6);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.feed-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.detail-label {
  color: #9ca3af;
  margin-right: 0.5rem;
}

.detail-value {
  color: white;
}

.updates-title {
  color: #9ca3af;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
}

.price-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 0.5rem;
}

.price-item {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 0.5rem;
}

.symbol {
  font-weight: bold;
}

.price {
  text-align: right;
  font-family: 'Courier New', monospace;
}

.currency {
  text-align: right;
}

@keyframes pulse-glow {
  0% { text-shadow: 0 0 5px rgba(11, 184, 224, 0.4); }
  50% { text-shadow: 0 0 10px rgba(11, 184, 224, 0.6); }
  100% { text-shadow: 0 0 5px rgba(11, 184, 224, 0.4); }
}

.symbol {
  animation: pulse-glow 3s infinite;
}
</style>