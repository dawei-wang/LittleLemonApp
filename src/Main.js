import { Router, Routes, Route } from "react-router-dom";
import Booking from "./Booking";
import Home from "./Home";
function Main() {
  return (
    <Router>
      <Routes>
         <Route path="/home" element={<Home />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
      </Routes>
    </Router>
  );
}

export default Main;
