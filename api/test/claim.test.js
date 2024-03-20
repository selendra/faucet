const { isValidSubstrateAddress, isEvmAddess } = require('../utils');
const { SubmitTrx } = require('../utils/submitTrx');

async function main(address) {
    if(!isValidSubstrateAddress(address) && !isEvmAddess(address)) {
       console.log("invalid Adress")
       return false
    }

    await SubmitTrx({testnet: true, destination: address});
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main("0x22155784D29Af512bc88EA3cc819D5b2886829ec").catch((error) => {
	console.error(error);
	process.exitCode = 1;
});