import { Routes, Route } from "react-router-dom";
import Booking from "./Booking";
import Home from "./Home";
function Main() {
  return (
    <main>
      <Routes>
         <Route path="/home" element={<Home />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
