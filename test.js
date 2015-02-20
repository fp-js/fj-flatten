"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var flatten = _interopRequire(require("./"));




it("fj-flatten", function () {
  assert.deepEqual(typeof flatten, "function");
  assert.deepEqual(flatten([]), []);
  assert.deepEqual(flatten([1]), [1]);
  assert.deepEqual(flatten([1, [2]]), [1, 2]);
  assert.deepEqual(flatten([[1], [2]]), [1, 2]);
  assert.deepEqual(flatten([[1], [2, 3]]), [1, 2, 3]);
  assert.deepEqual(flatten([1, [2], [3, [4, 5]]]), [1, 2, 3, 4, 5]);
});