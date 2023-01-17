import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <Link to="/Home" className="nav-item">
        Homepage
      </Link>
      <Link to="/Booking" className="nav-item">
        Book A Table
      </Link>
      <Link to="/Signin" className="nav-item">
        Sign In
      </Link>
    </nav>
  );
}

export default Nav;
