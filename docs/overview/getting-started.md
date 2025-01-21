---
# outline: deep
title: Getting Started with Reflector
---

# Getting Started

Reflector oracle protocol is a combination of specialized smart contracts and peer-to-peer consensus of data provider nodes maintained by trusted Stellar ecosystem organizations that serve as intermediaries between Stellar smart contracts and external price feed data sources. Particularly, on-chain and off-chain asset prices, CEX & DEX exchange rates, stock indices, financial market APIs, etc. Reflector nodes process, normalize, aggregate, and store trades information from Stellar Classic DEX, Soroban DEX protocols, as well as external sources.

Such price feeds are crucial for a variety of decentralized financial applications, as they enable these applications to have real-time access to external data, making them more versatile and capable of handling a wide range of financial transactions and operations.

Trustworthiness of the oracle and the security of the data source are critical factors to consider when using oracles in decentralized applications. The quotation mechanism can be exposed to various manipulations depending on the price reporting approach. Therefore, some kind of consensus system is required to ensure that quoted prices are accurate and consistent. Check how [Reflector system design](how-it-works.md) helps to counter those risks, what approaches we utilized to guarantee the integrity, and why Reflector oracles can be considered trusted entities for exchange rates quotation.

Reflector nodes report price feeds for all assets denominated in the base asset of the contract using the same precision specified in decimals(). Prices get encoded as i128 numbers where last N digits designate the fractional part of the given oracle feed. So the actual price can be calculated as price/10^decimals.

Oracle feed receives regular updates with pre-defined resolution. Reflector oracle contracts have a 5 minutes resolution set by default. Timestamps from trades and other price sources normalized as floor(unix_now()/resolution)*resolution during the aggregation phase. It is important for consumer contracts to check the timestamp field of the returned values against the current ledger timestamp to make sure that the reported quotes are not stale.

Validated data periodically produced by the distributed consensus is stored in the smart contract and is readily available to consumer smart contracts in a format that these contracts can understand and use. Public [consumption interface](contract-interface.md) for Reflector contracts matches [SEP-40](https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0040.md) Stellar standard.
