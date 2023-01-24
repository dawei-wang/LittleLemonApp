import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Booking from "./Booking";
import Nav from "./Nav";
import Footer from "./Footer";
import Header from "./Header";

const Routes = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/booking" component={Booking} />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes />
      <Footer />
    </Router>
  );
};

export default App;
