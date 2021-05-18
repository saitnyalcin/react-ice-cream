import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("should render the application title", () => {
  render(<App />);
  const appTitle = screen.getByText(/react application/i);
  expect(appTitle.textContent).toBe("React Application Testing");
});
