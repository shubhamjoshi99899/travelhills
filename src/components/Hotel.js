import React from 'react'
import './hotel.css'
function Hotel() {
  return (
    <div>
      <div>
      <h1 className="main-heading text-center fw-bolder" style={{fontSize:"4rem", marginTop:"5rem", textDecoration:"underline", marginBottom:"-3rem"}}>
                                            Hotel/HouseStays
                                            </h1>
            <div id='notfound'>
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>COMING SOON</h1>
                    </div>
                    <h2>WE ARE WORKING ON IT</h2>
                    <p>THE PAGE YOU'RE LOOKING FOR WILL BE
                        AVAILABLE SOON</p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hotel