# base58encoder

[![Build Status](https://travis-ci.org/tsamaya/base58encoder.svg?branch=master)](https://travis-ci.org/tsamaya/base58encoder)

Base 58 encoding and decoding with [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) using Flickr Alphabet (see [Wikipedia](https://en.wikipedia.org/wiki/Base58) article)

## installation

`$ npm install base58encoder`

## Usage

```javascript
const encoder = require('base58encoder');

// encode
console.log(encoder.encode('1000456987'));
// 3LhmXSzSZVxzU4

// decode
console.log(encoder.decode('3LhmXSzSZVxzU4'));
// 1000456987

// encode
console.log(encoder.encode('var=умартах'));
// 5UMuUcfmjqiNQeBakyNGpzAqV

// decode
console.log(encoder.decode('5UMuUcfmjqiNQeBakyNGpzAqV'));
// var=умартах
```

## Resources

uses [base-x](https://www.npmjs.com/package/base-x) initialized with `ALPHABET = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';`

## Licensing

Licensed under the MIT License

A copy of the license is available in the repository's [LICENSE](LICENSE.md) file.
