---
description: Algorithmic Stablecoin
---

# Algorithmic Stablecoin

Pegged algorithmic stablecoins represent a subclass of cryptocurrencies designed to maintain the value by algorithmically managing supply and demand in relation to the value of a specific reference asset. Unlike traditional fiat-backed stablecoins, which are directly backed by reserve assets like US dollars, algorithmic stablecoins rely on complex algorithms and mechanisms to achieve price stability.

Algo-stablecoins can be pegged to a specific real-world asset, such as a commodity (gold, oil, wheat), a basket of assets, or any other financial instrument (equity indexes, derivatives). The value of the stablecoin is intended to reflect the value of the reference asset.

A set of smart contracts or algorithms control the stablecoin's supply and demand. These algorithms monitor the price of the real-world asset and make adjustments as needed to maintain price stability.

To keep the stablecoin's price in line with the value of the underlying asset, the algorithm can adjust the stablecoin's supply. This may involve issuing new stablecoins when the price is above the peg or burning (destroying) stablecoins when the price is below the peg.

Price oracles provide the smart contracts with real-time information about the current price of the reference asset.

```rust
pub fn maintain_stable_coin_peg(env: Env, reflector_contract_id: Address, current_price: i128) {
    // create oracle client instance
    let reflector_contract = PriceOracleClient::new(&env, &reflector_contract_id);

    // fetch TWAP-approximated external price for the associated reference ticker
    let coin = Asset::Generic(Symbol::new(&env, "CHF"));
    let reference_price = reflector_contract.twap(&coin, &5).unwrap();

    // take action if the price diverts more than 0.1% from the reference price
    let threshold = reference_price / 1000_i128;
    if current_price > reference_price + threshold {
        // mint and sell coin
    }
    if current_price < reference_price - threshold {
        // buy and burn coin
    }
}
```