---
# outline: deep
title: Portfolio Rebalancing
---

# Portfolio Rebalancing

Contract-based portfolios provide the ability to automate the process of adjusting the composition of account's digital asset portfolio to maintain desired investment objectives, risk profiles, or allocations. Algorithmically-controlled rebalancing leverages smart contracts to make all adjustments, eliminating the need for manual intervention and reducing the risk of human error.

Smart contract portfolio rebalancing offers several advantages, including automation, reduced transaction costs compared to manual trading, and the ability to maintain a disciplined investment strategy. It is particularly useful for passive or index-style investing strategies where maintaining a specific asset allocation is crucial.

Initially, the user specifies their desired portfolio allocation. This allocation typically includes the percentage of their portfolio to be invested in various assets. For example, a user might want 50% Bitcoin, 30% Ethereum, and 20% in a stablecoin.

Smart contracts continually monitor the current composition of the user's portfolio. This is done by tracking the balances of the various assets in the user's wallet and their relative value.

Rebalancing can be triggered by specific conditions set by the user or based on predefined rules. Common trigger conditions might include a specified time interval (e.g. rebalance every week), a significant price deviation (when an asset's value deviates from its target allocation by a certain percentage), or any other criteria defined in the smart contract.

When the trigger conditions are met, the smart contract evaluates the current portfolio composition and calculates the necessary adjustments to bring it back in line with the target allocation. This process may involve selling over-allocated assets, buying under-allocated assets, or a combination of both.

The smart contract rebalances portoflio via decentralized exchanges or through direct interactions with other smart contracts. This can involve swaps or trades of assets to achieve the desired allocation.

After executing the orders, the smart contract provides confirmation of the rebalancing action, including details on the trades made and the updated portfolio composition.

The protfolio contract continues to monitor the allocations after rebalancing and triggers the process again when the next set of conditions are met.

```rust
pub fn rebalance_portfolio(env: Env, reflector_contract_id: Address, portfolio: Vec<PortfolioPosition>) {
    // portfolio example
    // [{
    //    asset: Asset::Stellar(Address::from_str(&env, "CD8H6KNN9...")),
    //    amount: 45675353821010_i128,
    // },
    // {
    //    asset: Asset::Stellar(Symbol::new(&env, "BTC")),
    //    amount: 10753533963_i128,
    // }]

    // create the price oracle client instance
    let reflector_contract = PriceOracleClient::new(&env, &reflector_contract_id);

    // storage for portfolio position values
    let mut values: [i128; 3] = [0; 3];
    // calculate total value of the portfolio
    let mut total_value = 0_i128;
    let total_positions = portfolio.len()
    for i in 0..total_positions {
        let position = &portfolio[i];
        // get price of an asset
        let asset_price = reflector_contract.lastprice(&position.asset).unwrap();
        // calculate position USD value
        let asset_value = asset_price.price * position.amount;
        total_value += asset_value;
        values[i] = asset_value;
    }

    // calculate average value per position
    let average_position_value = total_value / (total_positions as i128);

    // calculate the difference between the target value and the actual value for each position
    for i in 0..total_positions {
        let value: i128 = values[i];
        if value > average_position_value {
            // sell some tokens to decrease share in the portfolio
        } else if value < average_position_value {
            // buy tokens to increase position size
        }
    }
}
```