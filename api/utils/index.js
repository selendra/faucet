const { checkAddress } = require('@polkadot/util-crypto');

exports.isLessThan24Hour = (date) => {
  const twentyFourHrInMs = 24 * 60 * 60 * 1000;
  const twentyFourHoursAgo = Date.now() - twentyFourHrInMs;

  const timestamp = date.getTime();

  return timestamp > twentyFourHoursAgo;
}

exports.isValidSubstrateAddress = (address) => {
  const value = checkAddress(address, 204);
  return value[0];
}