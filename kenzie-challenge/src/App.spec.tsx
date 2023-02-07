import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from './App';

test('renders kenzie title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Kenzie/i);
  expect(linkElement).toBeInTheDocument();
});
