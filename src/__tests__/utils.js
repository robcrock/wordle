/** @jest-environment jsdom */
import { range } from '../utils';


// The range function should return an array of numbers from 0 to the number passed in.
// For example, range(5) should return [0, 1, 2, 3, 4].
test('range', () => {
  expect(range(5)).toEqual([0, 1, 2, 3, 4]);
})

// Write another test for the range function demonstrating a user passing in 1 as the start, skipping the end argument and 3 as the step argument.
// For example, range(1, undefined, 3) should return [1, 4, 7].
test('range with a 3 step', () => {
  expect(range(1, 8, 3)).toEqual([1, 4, 7]);
})
