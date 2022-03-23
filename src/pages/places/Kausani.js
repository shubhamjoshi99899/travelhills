import React from 'react'
import NavbarDestination from '../../components/navbar';
import CarouselContainer from '../../components/carousel';
import Slick from '../../components/Slicks/Kausani_Slick'
import Nearby from '../nearby';
import Footer from '../../footer'
import About from '../../components/About';
import Details from '../../components/Details';
import Recreation from '../../components/Recreation'
import Location from '../../components/Location';
import background from "./featured/Kausani-banner.jpg";
import image from './featured/Kausani.jpg';
import img1 from './featured/Trekking_3.jpg';
    import img2 from './featured/Auli_2.jpg';
import img3 from './featured/Stargazing.jpg';
import nimg2 from './featured/Someshwar.jpg';
import nimg1 from './featured/Nainital-1.jpg';
import nimg3 from './featured/bageshwar.jpg';
  import nimg4 from './featured/Bagnath.jpg';  
import Hotel from '../../components/Hotel';
const Kausani = () => {
  return (
    <div>



      <NavbarDestination />
      <CarouselContainer place="Kausani" background={background} title="Kausani" desc="Switzerland of"/>
      <About image ={image} title="Kausani, Uttarakhand" seperator="The ideal way to explore this picturesque
       hill-station is to come without a plan. You can spend an entire day just watching the magical play
        of colours on the mountain peaks surrounding Kausani. This village, perched on a ridge covered
         with chir and blue pine forests, is most well-known for the spectacular panoramic view of the
          Himalayan peaks like Trishul, Nanda Devi, and the mighty Panchachuli. Enjoy a picture-perfect 
          sunrise from one of the many viewing platforms in the village. As the sun peeps above the
           horizon, the snow-crested peaks take on every hue of the rising golden orb. ."
            left="Or you can explore the surrounding forests, filled with babbling creeks, chirping birds and serenity. A paradise for bird lovers, here you can spot more than 50 different species of birds such as woodpecker, barbet, parakeet, robin and fork tail. The Kausani Tea Estate is an apt location to spot birds. The Hrithik Roshan-starrer movie Koi Mil Gaya (2003) was mostly shot in Nainital, Bhimtaal and Kausani. ."/>
      <h1 className="main-heading text-center fw-bolder" style={{fontSize:"5rem",marginTop:"-13rem", textDecoration:"underline", marginBottom:"-3rem"}}>
                                            Attractions
                                            </h1> 
      <Slick />
      <Recreation t1="Trekking" t2="Skeeing" t3="Stargazing" r1="Trekking"  r2="Skeeing"
      r3="Stargazing"
      d1="A five km trek to the beautiful Pinnath village from Kausani is an unforgettable experience.
       The village is located at the foot of Gopalkot peak. A small temple dedicated to Lord Bhairon 
       marks the end of the trek. Kausani also serves as the starting point for Adi Kailash Trek,
        Base Kausani Trek and a trek to Kafni Glacier, which is situated at an altitude of 3,853 m."
       d2=" One of the best and most popular skiing destinations in India, Auli's slopes offer an exhilarating run.
       The 5-km-long slopes with consistently good snow (about 3 m deep) are perfect for professionals and beginners.
       Several national and international ski events are also held here.."
        d3="Stargazing
        Set on a ridge at an altitude of around 18,90 m, Kausani offers uninterrupted views of the
         mountain peaks and beyond them, the clear sky. There are several spots in and around Kausani
          where astrophotographers spend days and nights capturing the sky. It has one observatory and
           an open-air 'planetarium', where you can spot planets and other heavenly objects on most 
           nights."
        img1={img1} img2={img2} img3={img3}/>
        <Details climate="Sunny" airport="Pantnagar" rail="Kathgodam" region="Kumaun" hotel="Available 55+" temp="21°C" bt="October-December" rate="★★★★✫"/>
      <Location map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13842.94677371135!2d79.59564141675706!3d29.843021173620794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a74e7fb73633e1%3A0x173a54291447af4f!2sKausani%2C%20Uttarakhand%20263639!5e0!3m2!1sen!2sin!4v1647945693200!5m2!1sen!2sin"/>
      <Hotel/>
      <Nearby title1="Nainital" title2="Someshwar" title3="Bageshwar" title4="Bagnath" image1={nimg1} image2={nimg2} image3={nimg3}
      image4={nimg4}/>
      <Footer />

    </div>
  )
}

export default Kausani
