import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  it("renders form with input fields and submit button", () => {
    render(<BookingForm />);

    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "date" })).toBeInTheDocument();
    expect(screen.getByRole("combobox", { name: "time" })).toBeInTheDocument();
    expect(
      screen.getByRole("spinbutton", { name: "guests" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", { name: "occasion" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("validates form inputs", async () => {
    render(<BookingForm />);

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(screen.getByText("Date is required")).toBeInTheDocument();
    expect(screen.getByText("Time is required")).toBeInTheDocument();
    expect(
      screen.getByText("Number of guests is required")
    ).toBeInTheDocument();
    expect(screen.getByText("Occasion is required")).toBeInTheDocument();
  });

  it("submits form", async () => {
    render(<BookingForm />);

    fireEvent.change(screen.getByRole("textbox", { name: "date" }), {
      target: { value: "2023-02-06" },
    });
    fireEvent.change(screen.getByRole("combobox", { name: "time" }), {
      target: { value: "17:00" },
    });
    fireEvent.change(screen.getByRole("spinbutton", { name: "guests" }), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByRole("combobox", { name: "occasion" }), {
      target: { value: "birthday" },
    });

    const alertSpy = jest.spyOn(window, "alert");
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(alertSpy).toHaveBeenCalledWith(
      '{\n  "date": "2023-02-06",\n  "time": "17:00",\n  "guests": 2,\n  "occasion": "birthday"\n}'
    );
  });
});
