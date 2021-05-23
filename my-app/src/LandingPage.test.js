import { render, screen, fireEvent } from '@testing-library/react';
import App from './LandingPage';

test('renders landing page', () => {
  render(<App />);
  const headerElement = screen.getByText(/landing page/i);
  expect(headerElement).toBeInTheDocument();
  const investAmountElement = screen.getByText(/investment amount/i);
  expect(investAmountElement).toBeInTheDocument();

  // Test if valid input to investment amount doesn't display the error message.
  const investAmountInputElement = screen.getByTitle("investAmountInput");
  let investAmountErrorElementBefore = screen.getByTitle("investAmountError");
  expect(investAmountErrorElementBefore).not.toBeVisible();
  fireEvent.change(investAmountInputElement, { target: { value: "100.50"},});
  let investAmountErrorElementAfter = screen.getByTitle("investAmountError");
  expect(investAmountErrorElementAfter).not.toBeVisible();      // still not visible

  // Test if invalid input to investment amount displays the error message.
  investAmountErrorElementBefore = screen.getByTitle("investAmountError");
  expect(investAmountErrorElementBefore).not.toBeVisible();
  fireEvent.change(investAmountInputElement, { target: { value: "not dollars"},});
  investAmountErrorElementAfter = screen.getByTitle("investAmountError");
  expect(investAmountErrorElementAfter).toBeVisible();        // now visible
  screen.debug();
});
