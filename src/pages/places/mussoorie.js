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
import background from "./featured/Mussoorie-banner.jpg";
import image from './featured/Mussoorie.jpg';
import img1 from './featured/Winterline.jpg';
import img2 from './featured/Zip lining.jpg';
import img3 from './featured/Angling.jpg';
import nimg2 from './featured/dhanaulti.jpg';
import nimg1 from './featured/Dehradun_feature.jpg';
import nimg3 from './featured/tehri.jpg';
  import nimg4 from './featured/Kanatal.jpg';  
import Hotel from '../../components/Hotel';
const Mussoorie = () => {
  return (
    <div>



      <NavbarDestination />
      <CarouselContainer place="Mussoorie" background={background} title="Mussoorie" desc=" Queen of the Hills"/>
      <About image ={image} title="Mussoorie, Uttarakhand" seperator="A captivating paradise for leisure
       travellers and honeymooners, it is a perfect summer resort. Located on a 15-km-long horseshoe
        ridge with the grand Himalayas as a backdrop, Mussoorie spreads across at a height of 2,000 m 
        above sea level. From this vantage point, it offers scenic views of Himalayas peaks in Western
         Garhwal.."
            left="      Many famous personalities have made Mussoorie their home – most notable being authors Ruskin Bond and Bill Aitken. Filmstar Victor Banerjee resides in Mussoorie while deceased filmstar Tom Alter was born and brought up here. In the 1960s filmstar Prem Nath had his house here while the son of Dev Anand studied in Woodstock school. Cricketers Sachin Tendulkar and Mahendra Singh Dhoni are frequent visitors to this hill resort.The best time to visit Mussoorie is during summers, as it offers respite from the scorching summer heat. However, if you are looking for a secluded holiday, come here during winters to witness the snowfall."/>
      <h1 className="main-heading text-center fw-bolder" style={{fontSize:"5rem",marginTop:"-13rem", textDecoration:"underline", marginBottom:"-3rem"}}>
                                            Attractions
                                            </h1> 
      <Slick />
      <Recreation t1="Winterline" t2="Zip lining" t3="Angling" r1="Mussoorie Winterline    "  r2="Zip lining"
      r3="Angling"
      d1="WinterlineWinterline
      This is an amazing natural phenomenon that is visible from only a few places in the world one of
       which being Mussoorie. During evening as the sun goes down below the Shivalik ranges the western 
       horizon, visible from Mussoorie, is a filled with various shades of yellow, red and orange above
        a grey, and mauve coloured strip. Tourists
        especially flock to the hill station to witness the winterline."
       d2=" 
       Zip lining
Visit Mussoorie Adventure Park to try hands at some of the best adventures like zip-lining, rock climbing etc.Enjoy paragliding in and around Mussoorie, especially on the Bhimtal-Jangli Gaon road and Kotabagh. Come here to enjoy this sky adventure guided by experienced guides."
        d3="    
        Here, you have a lot of opportunities for trout angling. In this, you release the fish after it has been caught. Take prior permission from the forest officials before angling."
        img1={img1} img2={img2} img3={img3}/>
        <Details climate="Rainy" airport="Jolly Grant airport" rail="Dehradun" region="Gadwal" hotel="Available 85+" temp="15°C" bt="October-January." rate="★★★★★"/>
      <Location map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55029.44782661755!2d78.04142033501662!3d30.454792614274997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d0cfa61cda5b%3A0x197fd47d980e85b1!2sMussoorie%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1647963473703!5m2!1sen!2sin"/>
      <Hotel/>
      <Nearby title1="Dehradun" title2="Dhanaulti" title3="Tehri" title4="Kantal" image1={nimg1} image2={nimg2} image3={nimg3}
      image4={nimg4}/>
      <Footer />

    </div>
  )
}

export default Mussoorie
