/**
 * Base 58 ALPHABET (https://en.wikipedia.org/wiki/Base58)
 * @type {String}
 */
const ALPHABET = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
const base58 = require('base-x')(ALPHABET);
/**
 * [encode description]
 * @param  {String} input [description]
 * @return {String}       [description]
 */
const encode = (input) => {
  if (!input || input.length === 0) {
    return '';
  }
  return base58.encode(new Buffer(input));
};


/**
 * [decode description]
 * @param  {String} input [description]
 * @return {String}       [description]
 */
const decode = (input) => {
  if (!input || input.length === 0) {
    return '';
  }
  return base58.decode(input).toString();
};

module.exports = {
  encode,
  decode,
};
