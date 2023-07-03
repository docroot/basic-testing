import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },

  { a: 2, b: 3, action: Action.Subtract, expected: -1 },
  { a: 0, b: 0, action: Action.Subtract, expected: 0 },
  { a: 102, b: -33, action: Action.Subtract, expected: 135 },

  { a: 2, b: 3, action: Action.Multiply, expected: 6 },
  { a: 21, b: 0, action: Action.Multiply, expected: 0 },
  { a: 12, b: -3, action: Action.Multiply, expected: -36 },

  { a: 12, b: 3, action: Action.Divide, expected: 4 },
  { a: 12, b: 0, action: Action.Divide, expected: Infinity },
  { a: 1, b: 2, action: Action.Divide, expected: 0.5 },

  { a: 1, b: 2, action: Action.Exponentiate, expected: 1 },
  { a: 0, b: 2, action: Action.Exponentiate, expected: 0 },
  { a: 2, b: 8, action: Action.Exponentiate, expected: 256 },
  { a: 4, b: 0.5, action: Action.Exponentiate, expected: 2 },
  { a: 4, b: 0, action: Action.Exponentiate, expected: 1 },

  { a: 4, b: 0, action: '#', expected: null },

  { a: 'ab', b: 0, action: Action.Exponentiate, expected: null },
  { a: 'ab', b: 'cd', action: Action.Add, expected: null },
  { a: 1, b: 'cd', action: Action.Subtract, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'Example of table test',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a: a, b: b, action: action })).toBe(expected);
    },
  );
});
