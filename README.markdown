# fj-flatten

[![Build Status](https://travis-ci.org/fp-js/fj-flatten.svg)](https://travis-ci.org/fp-js/fj-flatten) [![npm version](https://badge.fury.io/js/fj-flatten.svg)](http://badge.fury.io/js/fj-flatten)
> FP-style array flatten

## Installation

`npm install fj-flatten --save`

## Usage

```js
var flatten = require('fj-flatten');

flatten([[1], 2, [3 , [4]]]); // => [1, 2, 3, 4]
```
