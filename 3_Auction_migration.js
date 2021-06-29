const NFTAuction = artifacts.require("NFTAuction");
// const MarketTradingAccessControls = artifacts.require("MarketTradingAccessControls");
const MarketTradingNFT = artifacts.require("MarketTradingNFT");
require('dotenv').config();

module.exports = function (deployer) {
  deployer.deploy(NFTAuction, "0x2bf3eb14d2aa399d50e2bfa9b62fb853ab8034eb", "0x72185a82379928c2575e099a3401fa413a0eac93", process.env.RECIPIENT);
};
