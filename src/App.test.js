import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Navbar, Routing, and Footer components", () => {
  render(<App />);
  const navbar = screen.getByText(/Navbar/i);
  const routing = screen.getByText(/Routing/i);
  const footer = screen.getByText(/Footer/i);
  expect(navbar).toBeInTheDocument();
  expect(routing).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
