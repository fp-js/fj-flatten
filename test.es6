import assert from 'assert';
import flatten from './';


it('fj-flatten', () => {
  assert.deepEqual(typeof flatten, 'function');
  assert.deepEqual(flatten([]), []);
  assert.deepEqual(flatten([1]), [1]);
  assert.deepEqual(flatten([1, [2]]), [1, 2]);
  assert.deepEqual(flatten([[1], [2]]), [1, 2]);
  assert.deepEqual(flatten([[1], [2, 3]]), [1, 2, 3]);
  assert.deepEqual(flatten([1, [2], [3, [4, 5]]]), [1, 2, 3, 4, 5]);
});
