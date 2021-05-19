import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("should button has the correct initial color", () => {
  render(<App />);
  const redButton = screen.getByRole("button", { backgroundColor: "red" });
  expect(redButton).toHaveStyle({ backgroundColor: "red" });
});

test("should button has the correct initial text", () => {
  render(<App />);
  const buttonText = screen.getByText(/change to blue/i);
  expect(buttonText.textContent).toBe("Change to blue");
});

test("should button turns into blue when it is clicked", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: "Change to blue",
  });
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
});

test("should change the button text to `Change to red/blue` when it is clicked", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: "Change to blue",
  });
  const buttonText =
    button.textContent === "Change to blue"
      ? "Change to red"
      : "Change to blue";
  fireEvent.click(button);
  expect(button.textContent).toBe(buttonText);
});

test("should check that the button initially enabled", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });
  expect(button).toBeEnabled();
});

test("should check that the checkbox initially unchecked", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("should disables button @ 1st click and enables @ 2nd click", () => {
  render(<App />);
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("should gray out the button when it is red", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "red" });
});
