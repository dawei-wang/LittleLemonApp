import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const BookingForm = () => {
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    const times = [];
    for (let i = 17; i <= 22; i++) {
      times.push(`${i}:00`);
    }
    setAvailableTimes(times);
  }, []);

  return (
    <Formik
      initialValues={{
        date: "",
        time: "",
        guests: "",
        occasion: "",
      }}
      validationSchema={Yup.object({
        date: Yup.string().required("Required"),
        time: Yup.string().required("Required"),
        guests: Yup.number()
          .required("Required")
          .min(1, "Minimum of 1 guest required")
          .max(10, "Maximum of 10 guests allowed"),
        occasion: Yup.string().required("Required"),
      })}
      onSubmit={(values) => {
        console.log(values);
        alert("Reservation successful!");
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label>
            Reservation Date:
            <Field type="date" name="date" />
            {errors.date && touched.date ? <div>{errors.date}</div> : null}
          </label>
          <br />
          <label>
            Reservation Time:
            <Field as="select" name="time">
              <option value="">Select a time</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </Field>
            {errors.time && touched.time ? <div>{errors.time}</div> : null}
          </label>
          <br />
          <label>
            Number of Guests:
            <Field type="number" name="guests" />
            {errors.guests && touched.guests ? (
              <div>{errors.guests}</div>
            ) : null}
          </label>
          <br />
          <label>
            Occasion:
            <Field as="select" name="occasion">
              <option value="">Select an occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="graduation">Graduation</option>
            </Field>
            {errors.occasion && touched.occasion ? (
              <div>{errors.occasion}</div>
            ) : null}
          </label>
          <br />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
