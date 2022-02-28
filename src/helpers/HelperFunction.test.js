import React from 'react';
import { multiply, makeLowerCase } from './HelperFunction';

test('multiply', () => {
  expect(multiply(1, 3).toBeEqualTo(3));
});
