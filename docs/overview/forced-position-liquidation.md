---
description: Forced Position Liquidation
---

# Forced Position Liquidation

Forced position liquidation is a mechanism utilized in DeFi platforms to manage and mitigate the risk of undercollateralized or risky positions. It is commonly used in lending/borrowing protocols, decentralized exchanges, and other DeFi applications to ensure the stability and security of the system. The primary goal of forced position liquidation is to protect the lender's interests and maintain the overall stability of the DeFi platform. It ensures that borrowers maintain an adequate level of collateral to cover their debt, reducing the risk of insolvency and potential losses for other users.

Collateralization: In DeFi lending and borrowing platforms, users typically deposit a certain amount of cryptocurrency as collateral to borrow other assets. The value of the collateral is typically higher than the value of the borrowed assets, creating a collateralization ratio. This ratio represents how well the position is collateralized.

DeFi platform continuously monitor the collateralization ratio of each user's position. If this ratio falls below a certain threshold (often referred to as the liquidation threshold or maintenance margin), the system automatically liquidates part or all of their collateral to cover the outstanding debt and bring the position back to a safe collateralization level.

A liquidation typically occurs through an on-chain auction mechanism or through other automated processes. Depending on the platform's rules, the system may choose to partially liquidate the undercollateralized position (liquidate a portion of the collateral) or fully liquidate it (liquidate all the collateral).

Properly functioning liquidation mechanisms are essential for the long-term viability of a platform and user funds protection.

```rust
pub fn check_liquidation(env: Env, reflector_contract_id: Address, loan: Loan, liquidation_threshold: i128) {
    // loan position example
    // {
    //    collateral_asset: Asset::Generic(Symbol::new(&env, "BTC")),
    //    collateral_amount: 10753533963_i128,
    //    borrowed_asset: Asset::Generic(Symbol::new(&env, "ETH")),
    //    borrowed_amount: 154850889072_i128
    // }

    // create the price oracle client instance
    let reflector_contract = PriceOracleClient::new(&env, &reflector_contract_id);

    // get oracle prcie precision
    let decimals = reflector_contract.decimals();

    // get the price and calculate the value of the collateral
    let collateral_asset_price = reflector_contract.lastprice(&loan.collateral_asset).unwrap();
    let collateral_value = collateral_asset_.price * loan.collateral_amount;

    // get the price and calculate the value of the borrowed asset
    let asset_price = reflector_contract.lastprice(&loan.borrowed_asset).unwrap();
    let borrowed_value = asset_price.price * loan.borrowed_amount;

    // calculate the current loan to value ratio, SAC contracts 
    let collateralization_ratio = collateral_value * 10000000_i128 / borrowed_value;

    if collateralization_ratio <= liquidation_threshold {
        // collateralization ratio is too small – liquidate the loan
    }
}
```