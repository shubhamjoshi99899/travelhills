import React, {useState} from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';
import spiritualapi from './API/spiritualapi'
import {Link} from "react-router-dom";
import { NavLink } from "react-router-dom";

                    const Weekend = (props) => {
                        const [show, setShow] = useState(false);            
                const[placesData, setPlaceData] =useState(spiritualapi);
                console.log(placesData);
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
                  <NavLink class="nav-link active" aria-current="page" to="/">
                    Hill Stations
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/About">
                      Spiritual
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/Holiday">
                    Nature
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/Hotel">
                    Wildlife
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/Hotel">
                    Weekend trips
                  </NavLink>
                </li>
                
                
              </ul>
            </div>
          </div>
          </div>
        </nav>
                    <div class="row">
                   { 
                       placesData.map((curElem) => {
                    const {image, title, info,to,name,p1,p2,p3,p4} = curElem;
                    return(
                        <>
                    <div class="col-lg-4 ">
                    <div className="card">
                    <div class="places">
    <div class="tile"> 
        <img src={image}/>
        <div class="text">
        <h1>{title}</h1>
        <h2 class="animate-text">{info}</h2>
        <p class="animate-text">
            <ul>
               <li>{p1}</li>
               <li>{p2}</li>
               <li>{p3}</li>
               <li>{p4}</li> 
            </ul>

        </p>
        <div class="frame">
        <Link to ={to}> <div class="frame">
              <button class="custom-btn btn-3"><span>{name}</span></button>
              </div> </Link>
            </div>
        </div>
        </div>
       </div>
                    </div>
                    </div>
                    </>
                    )
                    })
                   }
                    </div>
                    </div> 
                    </div>
                        )
                    }
export default Weekend
