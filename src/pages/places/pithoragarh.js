import React from 'react'
import NavbarDestination from '../../components/navbar';
import CarouselContainer from '../../components/carousel';
import Slick from '../../components/Slicks/Pithoragarh_Slick'
import Nearby from '../nearby';
import Footer from '../../footer'
import About from '../../components/About';
import Details from '../../components/Details';
import Location from '../../components/Location';
import Recreation from '../../components/Recreation'
import image from './featured/Pithoragarh.jpg';
import img1 from './featured/camping.jpg';
import img2 from './featured/Hand-Gliding.jpg';
import img3 from './featured/Gopinath Temple.jpg';
import nimg2 from './featured/mun.jpg';
import nimg1 from './featured/chaukori.jpg';
import nimg3 from './featured/dugtu.jpg';
    import nimg4 from './featured/om-parvat.jpg'; 
import background from "./featured/PithoragarhBanner.jpg";
import Hotel from '../../components/Hotel';
const Pithoragarh = () => {
    return (
        <div>



<NavbarDestination />
        <CarouselContainer place="Pithoragarh" background={background} title="Pithoragarh" desc="Idylic Hill Station of "/>
      <About image ={image} title="Pithoragarh, Uttarakhand"
       seperator="A peaceful summer resort, Pithoragarh is a dream destination for those who want to travel away from the crowds.
        Surrounded by snow-capped mountains, especially the summit of Panchaturi overlooking the lush Saul Valley, the town of
         Pithoragarh is a paradise for nature lovers, crossed by winding rivers and waterfalls through the woods. Located at an altitude 
         of 1,645 meters above sea level, Pitragal serves as the headquarters of the district of the same name.."
            left="Pithoragarh, the third largest city in the Kumaon region,  is a popular trekking hub for the Milan Glacier
             and Dharma Valley. As a border town, Pithoragarh is also an important base for the Indian Army. Historically, 
             the city was an important center of power during the reign of King Chand of Kumaon, and  some remnants of that
              era still exist today. While summers are pleasant, it gets chilly during the winter months. The ideal time to
               visit the town is between the months of April and November.
              ."/>
      <h1 className="main-heading text-center fw-bolder" style={{fontSize:"5rem",marginTop:"-13rem", textDecoration:"underline", marginBottom:"-3rem"}}>
                                            Attractions
                                            </h1> 
      <Slick />
      <Recreation t1="Camping" t2="Hand-Gliding" t3="Temple Trekking" r1="Hills Camping"  r2="Hand-Gliding"  r3="Temple trekking"
      d1="One of the best and most popular camping destinations in India, Pithoragarh slopes offer an exhilarating run.
      Camp at the best location with your loved ones, school friends, college batchmates and office colleagues."
       d2=" Hand-Gliding
       There are several hand-gliding spots in and around Pithoragarh with several groups offering this adventure sports.."
        d3="Temple trekking
        Trekking and Temple walk
          There are plenty of trekking routes that begin from Pithoragarh, the most revered and famous being the one to Kailash Mansarovar. The ones leading to Ralam Glacier, Namik Glacier and Milam Glacier are other popular routes"
        img1={img1} img2={img2} img3={img3}/>
      <Details climate="Mostly Sunny" airport="Naini Saini Airport" rail="Tanakpur" region="Kumaun" hotel="Available 40+" temp="19°C" bt="December=February" rate="★★★★✫"/>
      <Location map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55511.225445854594!2d80.19588152846326!3d29.590555892667254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a125c00088dd51%3A0x2b781d30a1523c63!2sPithoragarh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1647941799355!5m2!1sen!2sin"/>
      <Hotel/>
      <Nearby title1="Chaukori" title2="Munshiyari" title3="Dharchula" title4="Om Parvat" image1={nimg1} image2={nimg2} image3={nimg3}
      image4={nimg4}/>
      <Footer />

        </div>
    )
}

export default Pithoragarh
