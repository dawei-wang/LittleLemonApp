import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Booking from "./Booking";
// import Nav from "./Nav";
// import Footer from "./Footer";
// import Header from "./Header";

const App = () => {
  return (
    <Routes>
      <Route>
        {/* <Header />
        <Nav /> */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        {/* <Footer /> */}
      </Route>
    </Routes>
  );
};

export default App;
