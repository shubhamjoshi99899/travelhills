import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

const DestinationNavbar = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
        
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
                  <NavLink class="nav-link" to="/Hotel">
                    Hotel
                  </NavLink>
                </li>
                
                
              </ul>
            </div>
          </div>
          </div>
        </nav>
        </div>
    )
}

export default DestinationNavbar