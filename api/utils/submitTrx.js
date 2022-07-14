const { Keyring, WsProvider, ApiPromise } = require('@polkadot/api');

async function SubmitTrx({testnet, destination}) {
  try {
    const ws = new WsProvider('wss://rpc-testnet.selendra.org');
    const api = await ApiPromise.create({ provider: ws });

    const keyring = new Keyring({ 
      type: 'sr25519',
      ss58Format: 204
    });
    // paste mnemonic here
    const accountTransfer = keyring.addFromMnemonic(process.env.SEED);

    const nonce = await api.rpc.system.accountNextIndex(accountTransfer.address);

    const decimals = api.registry.chainDecimals;
    // console.log(decimals)
    const _amount = testnet ? 5 : 0.01;
    const amount = BigInt(_amount * Math.pow(10, decimals[0]));

    const transfer = await api.tx.balances
      .transfer(destination, amount)
      .signAndSend(accountTransfer, { nonce });
    
    return transfer;
  } catch (error) {
    return null;
  }
}

module.exports = { SubmitTrx };