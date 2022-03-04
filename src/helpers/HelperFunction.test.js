import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import React from 'react';
import { multiply, makeLowerCase } from './HelperFunction';

test('multiply', () => {
  expect(multiply(1, 3).toBeEqualTo(3));
});

describe('helper function', () => {
  it('multiplies values two values');
  expect(multiply(2, 4)).toBe(6);

  it('should make a string all lowercase');
  expect(makeLowerCase('Testing Lowercase')).toBeEqualTo('testing lowercase');
});
