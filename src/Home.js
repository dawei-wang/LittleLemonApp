import React from "react";
import { Link } from "react-router-dom";
import CardList from "./Card";

const Home = () => {
  return (
    <>
      <h1>Welcome to Little Lemon</h1>
      <CardList />
      <Link to="/booking">Make a reservation</Link>
    </>
  );
};

export default Home;
