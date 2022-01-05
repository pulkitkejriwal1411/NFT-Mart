require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()

module.exports = {
  networks: {
    hardhat:{
      chainId: 1337
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/136babc1becc456c948b63e90186871e`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
