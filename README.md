# Preperation

* infura project required
  * https://infura.io/

```
$ cp .env.sample .env

* INFURA_KEY & INFURA_KEY is used in hardhat.config.js to connect network
* CHAINLINK_NODE_ACCOUNT is shown on Chainlink node. If you host chainlink node, see below.
  * https://github.com/ygtx/poc-chainlink-node-and-external-adapter
* LINK_TOKEN_ADDRESS
  * https://docs.chain.link/docs/fulfilling-requests/#deploy-your-own-oracle-contract
```

# Deploy

```
$ npx hardhat run scripts/deploy-ChainlinkOracle.js --network rinkeby

```