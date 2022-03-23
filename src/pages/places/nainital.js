import React from 'react'
import NavbarDestination from '../../components/navbar';
import CarouselContainer from '../../components/carousel';
import Slick from '../../components/Slicks/Nainital_Slick'
import Nearby from '../nearby';
import Footer from '../../footer'
import About from '../../components/About';
import Details from '../../components/Details';
import Recreation from '../../components/Recreation'
import Location from '../../components/Location';
import background from "./featured/nainital-hd.jpg";
import image from './featured/dhanaulti.jpg';
import img1 from './featured/Hot air ballooning.jpg';
import img2 from './featured/Paragliding.jpg';
import img3 from './featured/Water sports.jpg';
import nimg2 from './featured/Naukuchiatal.jpg';
import nimg1 from './featured/Bhimtal_Feature.jpg';
import nimg3 from './featured/Kausani.jpg';
  import nimg4 from './featured/Corbett_Feature image_1.jpg';  
import Hotel from '../../components/Hotel';
const Nainital = () => {
  return (
    <div>



      <NavbarDestination />
      <CarouselContainer place="Nainital" background={background} title="Nainital" desc="Lake city of"/>
      <About image ={image} title="Nainital, Uttarakhand" seperator="Nainital, the charming Himalayan
       lake town, is a picture-postcard perfect hill-station and one of the most popular in Northern
       India. Commonly known as the ‘Lake District’, Nainital is nestled high up in the Kumaon Himalayas
        at an altitude of around 2,000 m above sea level. This beautiful town in surrounded by seven
        hills, popularly known as ‘Sapta-Shring’ – Ayarpata, Deopata, Handi-Bandi, Naina, Alma,
        Lariya-Kanta and Sher-Ka-Danda. The majestic mountains and the sparkling waters of the lake
        add an immense lot to the beauty of the town.  The town is centred around the emerald mountain
        lake Naini, which on most days is dotted with colourful sailboats."
            left=" According to mythology, the lake is believed to have been formed when the eyes of goddess “Sati” fell at this spot
            while her body was being carried by Lord Shiva after her death. According to mythology, 
            the lake is believed to have been formed when the eyes of goddess “Sati” fell at this spot
            while her body was being carried by Lord Shiva after her death.  ."/>
      <h1 className="main-heading text-center fw-bolder" style={{fontSize:"5rem",marginTop:"-13rem", textDecoration:"underline", marginBottom:"-3rem"}}>
                                            Attractions
                                            </h1> 
      <Slick />
      <Recreation t1="Hot air ballooning" t2="Paragliding" t3="Water Sports" r1="Hot air ballooning"  r2="Paragliding"
      r3="Water Sports"
      d1="
      
Hot-air ballooning is another adventure attraction in Nainital. Hot-air ballooning camps are setup
 in and around Nainital, mainly at Sukhatal. Ride a colourful balloon as it takes you up above the
hills and valleys.."
       d2=" 
       Enjoy paragliding in and around Nainital, especially on the Bhimtal-Jangli Gaon road and Kotabagh. Come here to enjoy this sky adventure guided by experienced guides."
        d3="
        The Naini Lake offers several water sports options, including kayaking, canoeing, yachting and
         oating. Kayaking and paddle boating are the two most popular activities here. You can also opt
        for a relaxing trip around the lake in a luxurious gondola.  The Nainital Yacht Club located at the Boat Club 
        organises several annual boating events at the lake.."
        img1={img1} img2={img2} img3={img3}/>
        <Details climate="Rainy" airport="Pantnagar airport" rail="Kathgodam" region="Kumaun" hotel="Available 85+" temp="15°C" bt="March and June." rate="★★★★✫"/>
      <Location map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55625.35593012774!2d79.420250902924!3d29.38244562452976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a1bc28fd9d61%3A0x7cae7ba916987db3!2sNainital%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1647958728835!5m2!1sen!2sin"/>
      <Hotel/>
      <Nearby title1="Bhimtal" title2="Naukuchiatal" title3="Kausani" title4="Corbett National Park" image1={nimg1} image2={nimg2} image3={nimg3}
      image4={nimg4}/>
      <Footer />

    </div>
  )
}

export default Nainital
