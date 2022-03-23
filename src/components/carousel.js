import React from 'react'
import background from "../Skiing_Auli.jpg";
import '../components.css'
const CarouselContainer = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height:'500px',
      }}>



      <div>
        <div className="carousel-header">
          <div className="carousel-row">
            <div>
              <div className="content">
                <span>
                  <img src="images/location.png" /> {props.place}
                </span>

                <h1>{props.title},<br /> Uttarakhand</h1>
                <p>{props.desc}<br /> India</p>
              </div>

            </div>

            <div>
              <div className="form-container">
                <form action="">

                  <h3>Search your Destination</h3>

                  <span>Location</span>
                  <input type="text" placeholder="Place you want to visit" />

                  <span>Guest members</span>
                  <input type="number" placeholder="Number of Peoples" />

                  <span>Arrival</span>
                  <input type="date" />

                  <span>Leaving</span>
                  <input type="date" />

                  <input type="submit" value="Search" />

                </form>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>


  )
}

export default CarouselContainer
