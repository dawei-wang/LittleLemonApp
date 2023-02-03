import { render, screen } from "@testing-library/react";
import Heading from "./Heading";

test("renders Heading", () => {
  render(<Heading />);
  const linkElement = screen.getByText("About us");
  expect(linkElement).toBeInTheDocument();
});
