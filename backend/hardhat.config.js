require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_KEY.toString(),
      accounts: [process.env.METAMASK_PVT_KEY.toString()]
    }
  }
}