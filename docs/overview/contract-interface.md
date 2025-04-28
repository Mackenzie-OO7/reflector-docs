---
description: Reflector oracle public contract interface
---

# Contract Interface

Reflector oracle public contract interface extends the default SEP-40 trait with additional utility functions like cross-price calculation and TWAP approximation.

```rust
//get base asset the price is reported in
base(e: Env) -> Asset

//get number of decimal places used to represent price for all assets quoted by the oracle
decimals(e: Env) -> u32

//get all assets quoted by the contract
assets(e: Env) -> Vec<Asset>

//get the most recent price update timestamp
last_timestamp(e: Env) -> u64

//get asset price in base asset at specific timestamp
price(e: Env, asset: Asset, timestamp: u64) -> Option<PriceData>

//get the most recent price for an asset
lastprice(e: Env, asset: Asset) -> Option<PriceData>

//get last N price records for the given asset
prices(e: Env, asset: Asset, records: u32) -> Option<Vec<PriceData>>

//get the most recent cross price record for the pair of assets
x_last_price(e: Env, base_asset: Asset, quote_asset: Asset) -> Option<PriceData>

//get the cross price for the pair of assets at specific timestamp
x_price(e: Env, base_asset: Asset, quote_asset: Asset, timestamp: u64) -> Option<PriceData>

//get last N cross price records of for the pair of assets
x_prices(e: Env, base_asset: Asset, quote_asset: Asset, records: u32) -> Option<Vec<PriceData>>

//get the time-weighted average price for the given asset over N recent records
twap(e: Env, asset: Asset, records: u32) -> Option<i128>

//get the time-weighted average cross price for the given asset pair over N recent records
x_twap(e: Env, base_asset: Asset, quote_asset: Asset, records: u32) -> Option<i128>

//get price feed resolution (default tick period timeframe, in seconds)
resolution(e: Env) -> u32

//get historical records retention period, in seconds
period(e: Env) -> Option<u64>

//get contract protocol version
version(e: Env) -> u32

//get contract admin address
admin(e: Env) -> Option<Address>
```

## Predefined struct types utilized in the contract:

```rust
//quoted asset definition
#[contracttype]
enum Asset {
   Stellar(Address), //for Stellar Classic and Soroban assets 
   Other(Symbol)     //for any external tokens/assets/symbols
}

//price record definition
#[contracttype]
pub struct PriceData {
    price: i128,     //asset price at given point in time
    timestamp: u64   //recording timestamp
}
```