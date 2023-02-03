import BookingForm from "./BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "./api";
export default function Booking() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}
