require("dotenv").config();
const HDWalletProvider = require("truffle-hdwallet-provider");
const web3 = require("web3");
module.exports = {
  /**
   * $ truffle deploy --network <network-name>
   */
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "5777", // match any network id
      gas: 6721975,
      gasPrice: 70e9,
      websockets: true
    },
    main: {
      provider: function () {
        return new HDWalletProvider(
          process.env.PRIVATE_KEY,
          `https://mainnet.infura.io/v3/${process.env.PROJECT_ID}`,
          0
        );
      },
      network_id: 1,
      gas: 6721975,
      gasPrice: 75e9,
      networkCheckTimeout: 999999,
    },
    rinkeby: {
      provider() {
        return new HDWalletProvider(
          process.env.PRIVATE_KEY,
          `https://rinkeby.infura.io/v3/${process.env.PROJECT_ID}`,
          0
        );
      },
      networkCheckTimeout: 100000,
      network_id: 4,
      gasPrice: 2e10,
      gas: 4712388,
    },
    bsctestnet: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bscmainnet: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, `https://data-seed-prebsc-1-s1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY,
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 300000,
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.6.0", // Fetch exact version from solc-bin (default: truffle's version)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
