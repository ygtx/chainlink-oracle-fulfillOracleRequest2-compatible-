/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

require('dotenv').config();

module.exports = {
  solidity: {
    version: "0.7.6",
    settings:{
      optimizer:{
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/" + process.env.INFURA_KEY,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
