const { Keyring, WsProvider, ApiPromise } = require("@polkadot/api");
const { isEvmAddess } = require("./index");
const ethers = require("ethers");

require("dotenv").config();

async function SubmitTrx({ testnet, destination }) {
  try {
    if (isEvmAddess(destination)) {
      const provider = new ethers.providers.JsonRpcProvider(process.env.EVM_PROVIDER);
      const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

      const tx = await wallet.sendTransaction({
        to: destination,
        value: ethers.utils.parseEther("5"),
      });
      return tx.hash;

    } else {
      const ws = new WsProvider(process.env.WS_PROVIDER);
      const api = await ApiPromise.create({ provider: ws });

      const keyring = new Keyring({
        type: "sr25519",
        ss58Format: 204,
      });
      // paste mnemonic here
      const accountTransfer = keyring.addFromMnemonic(process.env.MNEMONIC);

      const nonce = await api.rpc.system.accountNextIndex(
        accountTransfer.address
      );

      const decimals = api.registry.chainDecimals;
      // console.log(decimals)
      const _amount = testnet ? 5 : 0.01;
      const amount = BigInt(_amount * Math.pow(10, decimals[0]));

      const transfer = await api.tx.balances
        .transfer(destination, amount)
        .signAndSend(accountTransfer, { nonce });

      return transfer;
    }
  } catch (error) {
    console.log(`error ${error}`)
    return null;
  }
}

module.exports = { SubmitTrx };
