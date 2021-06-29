const MarketTradingNFT = artifacts.require("MarketTradingNFT");
// const MarketTradingAccessControls = artifacts.require("MarketTradingAccessControls");
require('dotenv').config();

module.exports = function (deployer) {
  deployer.deploy(MarketTradingNFT, "0x2bf3eb14d2aa399d50e2bfa9b62fb853ab8034eb");
};
