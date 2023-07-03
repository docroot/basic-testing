import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Add })).toBe(5);
    expect(simpleCalculator({ a: 0, b: 0, action: Action.Add })).toBe(0);
    expect(simpleCalculator({ a: 2, b: -3, action: Action.Add })).toBe(-1);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Subtract })).toBe(-1);
    expect(simpleCalculator({ a: 0, b: 0, action: Action.Subtract })).toBe(0);
    expect(simpleCalculator({ a: 102, b: -33, action: Action.Subtract })).toBe(135);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Multiply })).toBe(6);
    expect(simpleCalculator({ a: 21, b: 0, action: Action.Multiply })).toBe(0);
    expect(simpleCalculator({ a: 12, b: -3, action: Action.Multiply })).toBe(-36);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 12, b: 3, action: Action.Divide })).toBe(4);
    expect(simpleCalculator({ a: 12, b: 0, action: Action.Divide })).toBe(Infinity);
    expect(simpleCalculator({ a: 1, b: 2, action: Action.Divide })).toBe(0.5);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a: 1, b: 2, action: Action.Exponentiate })).toBe(1);
    expect(simpleCalculator({ a: 0, b: 2, action: Action.Exponentiate })).toBe(0);
    expect(simpleCalculator({ a: 2, b: 8, action: Action.Exponentiate })).toBe(256);
    expect(simpleCalculator({ a: 4, b: 0.5, action: Action.Exponentiate })).toBe(2);
    expect(simpleCalculator({ a: 4, b: 0, action: Action.Exponentiate })).toBe(1);
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 4, b: 0, action: '#' })).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a: 'ab', b: 0, action: Action.Exponentiate })).toBe(null);
    expect(simpleCalculator({ a: 'ab', b: 'cd', action: Action.Add })).toBe(null);
    expect(simpleCalculator({ a: 1, b: 'cd', action: Action.Subtract })).toBe(null);
  });
});
