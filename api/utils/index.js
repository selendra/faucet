// const { checkAddress } = require('@polkadot/util-crypto');
const { decodeAddress, encodeAddress } = require('@polkadot/keyring');
const { hexToU8a, isHex } = require('@polkadot/util');
const { ethers } = require("ethers")

exports.isLessThan24Hour = (date) => {
  const twentyFourHrInMs = 24 * 60 * 60 * 1000;
  const twentyFourHoursAgo = Date.now() - twentyFourHrInMs;

  const timestamp = date.getTime();

  return timestamp > twentyFourHoursAgo;
}

exports.isValidSubstrateAddress = (address) => {
  try {
    encodeAddress(
      isHex(address)
        ? hexToU8a(address)
        : decodeAddress(address)
    );

    return true;
  } catch (error) {
    return false;
  }
}

exports.isEvmAddess = (address) => {
  const value = ethers.utils.isAddress(address)
  return value;
}