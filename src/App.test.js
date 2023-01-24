import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";


describe("App component", () => {
  it("renders the header component", () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const header = screen.getByText("Welcome to Little Lemon");
    expect(header).toBeInTheDocument();
  });
  
  it("renders the nav component", () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });
  
  it("renders the main component", () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();