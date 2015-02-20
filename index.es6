import { foldl } from 'fj-fold';


const _flatten = (list) =>
  foldl([],
    (prev, curr) =>
      prev.concat(Array.isArray(curr) ? _flatten(curr) : curr),
    list);


export default _flatten;
