import React from "react";
import { render } from "@testing-library/react";
import Heading from "./Heading";

describe("Heading", () => {
  it("should render the header", () => {
    const { getByRole } = render(<Heading />);
    const header = getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("should render the correct image", () => {
    const { getByAltText } = render(<Heading />);
    const image = getByAltText("Little Lemon Ingredients");
    expect(image).toBeInTheDocument();
    expect(image.src).toContain("food4.webp");
  });

  it("should render the header text", () => {
    const { getByText } = render(<Heading />);
    const headerText = getByText("Reserve a table");
    expect(headerText).toBeInTheDocument();
  });
});
