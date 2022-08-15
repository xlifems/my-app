import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text \'Home\' on scren', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
