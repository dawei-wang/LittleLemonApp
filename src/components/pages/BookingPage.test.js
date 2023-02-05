import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import BookingPage from "./BookingPage";

describe("BookingPage", () => {
  afterEach(cleanup);

  it("renders Heading and ReservationForm", () => {
    const { getByText } = render(<BookingPage />);
    expect(getByText("Reserve a table")).toBeInTheDocument();
    expect(getByText("Submit")).toBeInTheDocument();
  });

  it("calls fetchAPI with new date on update", () => {
    const date = new Date();
    const fetchAPI = jest.fn(() => []);
    const { getByLabelText } = render(<BookingPage fetchAPI={fetchAPI} />);
    const input = getByLabelText("Date");
    fireEvent.change(input, { target: { value: date } });
    expect(fetchAPI).toHaveBeenCalledWith(date);
  });
});

import { updateTimes } from "./BookingPage";

describe("updateTimes", () => {
  it("should return updated available times", () => {
    const date = new Date();
    const initialState = [];
    const action = { type: "UPDATE_TIMES", payload: ["17:00", "17:30"] };
    const expectedState = ["17:00", "17:30"];

    expect(updateTimes(initialState, action)).toEqual(expectedState);
  });

  it("should handle unknown action type", () => {
    const initialState = [];
    const action = { type: "UNKNOWN_ACTION", payload: ["17:00", "17:30"] };

    expect(updateTimes(initialState, action)).toEqual(initialState);
  });
});
