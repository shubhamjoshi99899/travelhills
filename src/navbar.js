import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <NavLink class="navbar-brand" to="/">
              Travel Hills
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink class="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/About">
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/Holiday">
                    Holiday

                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/Book">
                    Cars
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/Destination">
                    Destination
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/Reviews">
                    Reviews
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/Contact">
                    Contact
                  </NavLink>
                </li>
              </ul>

              <form class="d-flex">
                <div class="frame">
                <NavLink class="nav-link" to="/login"> <button class="custom-btn btn-3"><span>Login</span></button></NavLink>
                </div>
                <div class="frame">
                <NavLink class="nav-link" to="/register"> <button class="custom-btn btn-3"><span>Sign Up</span></button></NavLink>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;