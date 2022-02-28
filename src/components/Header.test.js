import { render } from '@testing-library/react';
import { it } from 'eslint/lib/rule-tester/rule-tester';
import Header from './Header';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

//TODO
// 1. expect is broken?
// 2. check watch later on YT and DOCS

it('check button render', () => {
  const { queryByTitle } = render(<Header />);
  const cartIcon = queryByTitle('cartIcon');
  // expect(cartIcon).toBeTruthy();
});
