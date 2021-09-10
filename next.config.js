const withTM = require("next-transpile-modules")([
  "@solana/wallet-adapter-wallets",
  "@project-serum/sol-wallet-adapter",
]);

module.exports = withTM();
