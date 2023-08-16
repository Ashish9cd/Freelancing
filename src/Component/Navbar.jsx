import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useUserContext from "../UserContext";

const Navbar = () => {
  const { loggedIn, logout } = useUserContext();
  const[ currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  )

  const showLoginOption = () => {
    if (loggedIn) {
      return (
        <li className="nav-item">
          <button onClick={logout} className="btn btn-danger">Logout</button>
        </li>
      );
    } else {
      return (
        <>
         
        </>
      );
    }
  };

  return (
    <nav classname="navbar bg-dark border-bottom border-body"data-bs-theme="dark">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/browse">
              Browse
            </NavLink>
          </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
              Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About us">
              About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Add project">
              Add project
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search Job">
              <button type="button" class="btn btn-info">Search job</button>
              </NavLink>
            </li>
      

            {showLoginOption()}
            
          </ul>
          
        </div>
      </div>
      </nav>
    </nav>
  );
};

export default Navbar;