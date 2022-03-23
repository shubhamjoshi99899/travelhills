import React from 'react'

function Location(props) {
  return (
    <div>
        <h1 className="main-heading text-center fw-bolder" style={{fontSize:"4rem", marginTop:"5rem", textDecoration:"underline", marginBottom:"-3rem"}}>
                                            Locate on Map
                                            </h1>
        <section class="pt-105 pb-45">
  <div class="container px-xl-0">
      
    <div class="row justify-content-center">
      <div class="col-xl-10">
       
        <div class="map-responsive">
          <iframe src={props.map}></iframe>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Location