import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  render(<App />, { wrapper: BrowserRouter });
});

test('test whole app navigation', () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(screen.getByText(/The Trials/i)).toBeInTheDocument();
  userEvent.click(screen.getByText(/Home/i));
  expect(screen.getByText(/The Trials/i)).toBeInTheDocument();

})
