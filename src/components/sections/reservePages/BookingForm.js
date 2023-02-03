import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BookingForm = () => {
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    setAvailableTimes([
      "17:00",
      "17:30",
      "18:00",
      "18:30",
      "19:00",
      "19:30",
      "20:00",
      "20:30",
      "21:00",
      "21:30",
      "22:00",
    ]);
  }, []);

  const reservationSchema = Yup.object().shape({
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
    guests: Yup.number()
      .min(1, "At least 1 guest is required")
      .max(10, "Maximum 10 guests are allowed")
      .required("Number of guests is required"),
    occasion: Yup.string()
      .oneOf(["birthday", "anniversary", "graduation"], "Invalid occasion")
      .required("Occasion is required"),
  });

  return (
    <Formik
      initialValues={{
        date: "",
        time: "",
        guests: "",
        occasion: "",
      }}
      validationSchema={reservationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field type="date" name="date" />
            <ErrorMessage name="date" component="div" />
          </div>
          <div>
            <Field as="select" name="time">
              <option value="">Select Time</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </Field>
            <ErrorMessage name="time" component="div" />
          </div>
          <div>
            <Field type="number" name="guests" />
            <ErrorMessage name="guests" component="div" />
          </div>
          <div>
            <Field as="select" name="occasion">
              <option value="">Select Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="graduation">Graduation</option>
            </Field>
            <ErrorMessage name="occasion" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
