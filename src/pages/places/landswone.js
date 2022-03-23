import React from 'react'
import NavbarDestination from '../../components/navbar';
import CarouselContainer from '../../components/carousel';
import Slick from '../../components/Slicks/Lansdowne_Slick'
import Nearby from '../nearby';
import Footer from '../../footer'
import About from '../../components/About';
import Details from '../../components/Details';
import Recreation from '../../components/Recreation'
import Location from '../../components/Location';
import background from "./featured/Lansdwone-Banner.jpg";
import image from './featured/Lansdowne0.jpg';
import img1 from './featured/Trekking.jpg';
import img2 from './featured/biking.jpg';
import img3 from './featured/bhula.jpg';
import nimg2 from './featured/Naukuchiatal.jpg';
import nimg1 from './featured/dhanaulti.jpg';
import nimg3 from './featured/Mukteshwar.jpg';
  import nimg4 from './featured/Pauri.jpg';  
import Hotel from '../../components/Hotel';
const Lansdowne = () => {
  return (
    <div>



      <NavbarDestination />
      <CarouselContainer place="Lansdowne" background={background} title="Lansdowne" desc="
       Home of Garhwal Rifles in"/>
      <About image ={image} title="Lansdowne, Uttarakhand" seperator="A quiet town with old-world
       colonial charm, Lansdowne is an unspoiled expanse of lush greenery nestled in the Himalayas. 
       The hill station is dotted with pines and oaks and is perched at a height of 1,700 m. Charming 
       churches, flowering thickets, springs, and ponds encompass the entire hill station. Lansdowne 
       was established in 1887 as a cantonment of the British, who were drawn to its salubrious climate,
       and is named after the then Viceroy of India, Lord Lansdowne."
            left="Today, it is the headquarters of the Garhwal Rifles of the Indian Army. Explore the
             small town on foot, with a lake at its centre, enjoy nature walks and discover hidden
              temples and churches or just laze around and enjoy the pristine mountain views. Lansdowne 
              is connected by motorable roads to all the major towns and cities. It is around 260 
              from Delhi and around 150 km from Dehradun. ."/>
      <h1 className="main-heading text-center fw-bolder" style={{fontSize:"5rem",marginTop:"-13rem", textDecoration:"underline", marginBottom:"-3rem"}}>
                                            Attractions
                                            </h1> 
      <Slick />
        <Recreation t1="Nature Walks" t2="Mountain Biking" t3="Bhulla Lake Boat Ride:" r1="Nature walks"  r2="Mountain Biking"
      r3="Boat riding"
      d1="Nature walks in lansdown
Lansdowne is a destination where all you need to do is just walk around at your own pace. 
Explore the small town and its surrounding forests on foot.."
       d2=" Mountain bikingbike mounting in dhanaulti
       Mountain biking or cycling is an easy way to explore this small hill-station with unnamed 
       pathways and trails"
        d3="One of the most significant tourist attractions in Lansdowne, Bhulla Taal is a small and quiet man-made lake maintained by Indian Army. It is dedicated to the youth of Garhwal Rifles of Indian Army who laid their lives in the service of the nation.

        Take a boat tour of this picturesque lake and be ready with your cameras as you are going to spot lazy swimming ducks in the lake and the agile rabbits hopping around the banks."
        img1={img1} img2={img2} img3={img3}/>
        <Details climate="Sunny" airport="Jolly Grant Airport" rail="Kotdwar" region="Gadwal" hotel="Available 42+" temp="20°C" bt="April-October" rate="★★★★✫"/>
      <Location map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27685.807478406008!2d78.66239880914941!3d29.84333164515137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390982b9e5122989%3A0x2798532cabd61501!2sLansdowne%2C%20Uttarakhand%20246155!5e0!3m2!1sen!2sin!4v1647949874840!5m2!1sen!2sin"/>
      <Hotel/>
      <Nearby title1="Dhanaulti " title2="Naukuchiatal" title3="Mukteshwar" title4="Pauri" image1={nimg1} image2={nimg2} image3={nimg3}
      image4={nimg4}/>
      <Footer />

    </div>
  )
}

export default Lansdowne
