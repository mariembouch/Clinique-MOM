import { render, screen } from '@testing-library/react';
import Controller from './Controller';

test('renders learn react link', () => {
  render(<Controller/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
