import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
const Placesnavbar = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
        <div class="container places-container">
            <h1 className="main-heading text-center fw-bolder">
                                            Destinations
                                            </h1> 
                                            <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
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
            <div className="places-navbar">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink class="nav-link active" aria-current="page" to="/hillstation">
                    Hill Stations
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link active" to="/spiritual">
                      Spiritual
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link active" to="/nature">
                    Nature
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link active" to="/wildlife">
                    Wildlife
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link active" to="/weekend">
                    Weekend trips
                  </NavLink>
                </li>
                
                
              </ul>
            </div>
          </div>
          </div>
        </nav>
        </div>
        </div>
    )
}

export default Placesnavbar
