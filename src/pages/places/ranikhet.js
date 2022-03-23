import React from 'react'
import NavbarDestination from '../../components/navbar';
import CarouselContainer from '../../components/carousel';
import Slick from '../../components/Slicks/Mussoorie_Slick'
import Nearby from '../nearby';
import Footer from '../../footer'
import About from '../../components/About';
import Details from '../../components/Details';
import Recreation from '../../components/Recreation'
import Location from '../../components/Location';
import background from "./featured/Ranikhet_banner.jpg";
import image from './featured/Ranikhet.jpg';
import img1 from './featured/Trekking_1.jpg';
import img2 from './featured/Zip lining.jpg';
import img3 from './featured/biking.jpg';
import nimg2 from './featured/Nainital-1.jpg';
import nimg1 from './featured/Pithoragarh.jpg';
import nimg3 from './featured/Bhimtal_Feature.jpg';
  import nimg4 from './featured/almora.jpeg';  
import Hotel from '../../components/Hotel';
const Ranikhet = () => {
  return (
    <div>



      <NavbarDestination />
      <CarouselContainer place="Ranikhet" background={background} title="Ranikhet" desc="Land of Kuamun Regiment"/>
      <About image ={image} title="Ranikhet, Uttarakhand" seperator="Once upon a time, there was a
       proposal to designate Ranikhet as the summer headquarters of British India, a title which was
        accorded to Shimla. Ranikhet carries centuries old imperial and colonial legacy and the beautiful
         garrison town is a land of many brave men like General Kashi Nath Adhikari. Today it's the 
         headquarters of the Kumaon Regiment. A legend says that a Kumaoni queen was enchanted by this
          tiny hill paradise and it's in her honour that a palace was built here, thus the name, 'queen's
           land' ."
            left="     Ranikhet remains the same: captivating, abounding with flowers, trees and green
             meadows in the midst of heavenly Himalayan surroundings. Interestingly, the nine-hole 
             Ranikhet Golf Course is one of the highest in Asia and the rolling meadows of the course are
              breathtaking. The place draws several celebrities, who prefer its quiet environs, including
               actor Rajinikanth. The Tamil film industry's superstar is a regular visitor to Ranikhet, 
               where he stops on his way to Dunagiri hills (around 45 km away) while visiting the sage 
               Maha Avtar Baba's meditation cave.."/>
      <h1 className="main-heading text-center fw-bolder" style={{fontSize:"5rem",marginTop:"-13rem", textDecoration:"underline", marginBottom:"-3rem"}}>
                                            Attractions
                                            </h1> 
      <Slick />
      <Recreation t1="Jungle safari" t2="Zip lining" t3="Biking" r1="Jungle safari"  r2="Zip lining"
      r3="Biking"
      d1="
      
      Ranikhet is surrounded by forests of pine, oak, and deodar trees. These areas are home to a wide range of wildlife, including leopard, barking deer, mountain goat and langurs. If you are driving around Ranikhet, you may chance upon some of these animals. You can also hire local guides for a guided safari."
       d2=" 
       "
        d3="    
        Mountain bikingbike mounting in dhanaulti
       Mountain biking or cycling is an easy way to explore this small hill-station with unnamed 
       pathways and trails."
        img1={img1} img2={img2} img3={img3}/>
        <Details climate="Sunny" airport="PantNagar airport" rail="Kathgodam" region="Kumaun" hotel="Available 85+" temp="15°C" bt="October-January." rate="★★★★★"/>
      <Location map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55029.44782661755!2d78.04142033501662!3d30.454792614274997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d0cfa61cda5b%3A0x197fd47d980e85b1!2sMussoorie%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1647963473703!5m2!1sen!2sin"/>
      <Hotel/>
      <Nearby title1="Pithoragarh" title2="Nainital" title3="Bhimtal" title4="Almora" image1={nimg1} image2={nimg2} image3={nimg3}
      image4={nimg4}/>
      <Footer />

    </div>
  )
}

export default Ranikhet
