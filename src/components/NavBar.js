import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul className="container flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/listings">Browse Listings</Link>
        </li>
        <li>
          <Link to="/CreateListing">Create Listing</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
