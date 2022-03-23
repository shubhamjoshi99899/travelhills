import React from 'react'
import NavbarDestination from '../../components/navbar';
import CarouselContainer from '../../components/carousel';
import Slick from '../../components/Slicks/Dhanaulti_Slick'
import Nearby from '../nearby';
import Footer from '../../footer'
import About from '../../components/About';
import Details from '../../components/Details';
import Recreation from '../../components/Recreation'
import Location from '../../components/Location';
import background from "./featured/Dhanaulti-Banner.jpg";
import image from './featured/dhanaulti.jpg';
import img1 from './featured/Campings.jpg';
    import img2 from './featured/biking.jpg';
import img3 from './featured/Stargazing.jpg';
import nimg2 from './featured/Mussoorie.jpg';
import nimg1 from './featured/tehri.jpg';
import nimg3 from './featured/Kanatal.jpg';
  import nimg4 from './featured/Chamba feature.jpg';  
import Hotel from '../../components/Hotel';
const Dhanaulti = () => {
  return (
    <div>



      <NavbarDestination />
      <CarouselContainer place="Dhanaulti" background={background} title="Dhanaulti" desc="Peaceful
       Relaxation valley of"/>
      <About image ={image} title="Dhanaulti, Uttarakhand" seperator="Fast emerging as a gem among the
      major travel destinations in Uttarakhand, Dhanaulti offers a peaceful, relaxed and laid-back
       atmosphere. Dhanaulti is located at an altitude of 2,250 m, and is far away from the hustle-bustle,
        busy market places and pollution. Set amidst thick virgin forests of deodars, oaks and
        rhododendrons, Dhanaulti is the base point for numerous treks into the Himalayas, which includes
        trails to the Surkanda Devi Temple, Chandrabadni and Kunjapuri. There are several adventure
        resorts here offering activities like rappelling and zip- lining. Dhanaulti has several popular
        skating arenas as well. In winter, the small town is blanketed in snow and makes for a perfect
        holiday.."
            left="Dhanaulti is well connected by motorable roads with all major destinations of Uttarakhand.. ."/>
      <h1 className="main-heading text-center fw-bolder" style={{fontSize:"5rem",marginTop:"-13rem", textDecoration:"underline", marginBottom:"-3rem"}}>
                                            Attractions
                                            </h1> 
      <Slick />
      <Recreation t1="Camping" t2="Mountain Biking" t3="Stargazing" r1="Camping"  r2="Mountain Biking"
      r3="Stargazing"
      d1="
      With rolling fields and forests, and its close proximity to well-known tourist spots like Mussoorie
       and Dehradun, Dhanaulti makes for a perfect camping getaway, especially for a weekend. There are 
       several camping sites here, offering tented accommodations for every budget."
       d2=" Mountain bikingbike mounting in dhanaulti
       Mountain biking or cycling is an easy way to explore this small hill-station with unnamed 
       pathways and trails"
        d3="Stargazing
        Set on a ridge at an altitude of around 18,90 m, Kausani offers uninterrupted views of the
         mountain peaks and beyond them, the clear sky. There are several spots in and around Kausani
          where astrophotographers spend days and nights capturing the sky. It has one observatory and
           an open-air 'planetarium', where you can spot planets and other heavenly objects on most 
           nights."
        img1={img1} img2={img2} img3={img3}/>
        <Details climate="Sunny" airport="Jolly Grant Airport" rail="Dehradun" region="Gadwal" hotel="Available 45+" temp="25°C" bt="April-October" rate="★★★★✫"/>
      <Location map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27528.968802178435!2d78.21582032850064!3d30.404305846040394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908df1c5802cb27%3A0x8d7cc78f77682e05!2sDhanaulti%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1647947349003!5m2!1sen!2sin"/>
      <Hotel/>
      <Nearby title1="Tehri" title2="Mussoorie" title3="Kanatal" title4="Chamba" image1={nimg1} image2={nimg2} image3={nimg3}
      image4={nimg4}/>
      <Footer />

    </div>
  )
}

export default Dhanaulti
