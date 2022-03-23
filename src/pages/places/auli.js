import React from 'react'
import NavbarDestination from '../../components/navbar';
import CarouselContainer from '../../components/carousel';
import Slick from '../../components/Slicks/Auli_Slick'
import Nearby from '../nearby';
import Footer from '../../footer'
import About from '../../components/About';
import Details from '../../components/Details';
import Recreation from '../../components/Recreation'
import Location from '../../components/Location';
import background from "./featured/Skiing_Auli-1.jpg";
import image from './featured/Auli_cover.jpg';
import img1 from './featured/Auli_2.jpg';
import img2 from './featured/ropeway.jpeg';
import img3 from './featured/trek.jpg';
import nimg2 from './featured/Haridwar.jpg';
import nimg1 from './featured/Dehradun_feature.jpg';
import nimg3 from './featured/dhanaulti.jpg';
  import nimg4 from './featured/Mussoorie.jpg';  
import Hotel from '../../components/Hotel';
const Auli = () => {
  return (
    <div>



      <NavbarDestination />
      <CarouselContainer place="Auli" background={background} title="Auli" desc="Skeeing Paradise of "/>
      <About image ={image} title="Auli, Uttarakhand" seperator="Auli is a famous hill station and a popular winter destination as ski resort of
            India, known for its snowy slopes, Auli has everything that an ideal tourist dreamed
            for like Himalayan Views, Meadows, adventure activities, romantic vistas, cable cars
            and much more. From snow-covered peaks to wooden huts, Auli is not less than a
            perfect European village. It is situated at an astonishing height of 2505 meter
            which offers a magnificent view of crescent Himalayas. A long cable car links Auli
            to the town of Joshimath."
            left="Auli is surrounded by coniferous and oak forests, with a panoramic view of the
            peaks of the Himalayas. The slopes are intended for both professional skiers and
            novices. The Garhwal Mandal Vikas Nigam Limited (GMVNL) a state government agency
            which takes care of this resort, and Uttarakhand Tourism Department conduct winter
            sports competitions at Auli to encourage skiing in India. It has a 4 
            kilometres (2.5 mi) cable car, a chairlift and a ski lift, along with a maintained
            trek route. There is a training facility of Indo-Tibetan Border Police. A small Hindu
            temple connected with the Hindu epic the Ramayana is also present."/>
      <h1 className="main-heading text-center fw-bolder" style={{fontSize:"5rem",marginTop:"-13rem", textDecoration:"underline", marginBottom:"-3rem"}}>
                                            Attractions
                                            </h1> 
      <Slick />
      <Recreation t1="Skeeing" t2="Ropeway" t3="Trekking" r1="Auli Skeeing"  r2="Auli Ropeway"  r3="Auli Trekking"
      d1="One of the best and most popular skiing destinations in India, Auli's slopes offer an exhilarating run.
      The 5-km-long slopes with consistently good snow (about 3 m deep) are perfect for professionals and beginners.
      Several national and international ski events are also held here. There are ski and snow-boarding schools and
       equipment can be easily rented. To ski, contact https://gmvnonline.com/skiing"
       d2=" Enjoy the cable car ride between Joshimath and Gurson (near Auli), that passes over rolling slopes and meandering
        trails through dense oak forests. One of the highest and the longest ropeways in India, it covers an approximate distance
        of 4 km amidst the snow-capped mountains with patches of green, offering breathtaking views of the Garhwal mountains."
        d3="Auli trekking
        From Auli, one can trek up to Himalayan peaks such as Nanda Devi, Kamat, Mana Parvat and Dunagiri. Joshimath to Auli is about
        14 km. Walking on snow-laden paths in winters or lush alpine meadows during summers, the offbeat trails of Auli are an
        unparalleled attraction for trekkers and nature lovers. The green expanse of Gurson (Gorson) bugyal meadow is just 3 km 
        from Auli and it connects with the trekking trail to Kuari Pass"
        img1={img1} img2={img2} img3={img3}/>
      <Details climate="Mostly Sunny" airport="Jolly Grant Airport" rail="Haridwar" region="Gadwal" hotel="Available 70+" temp="14°C" bt="October-December" rate="★★★★✫"/>
      <Location map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13746.656413441548!2d79.55970401708153!3d30.53053584018687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f50aafcc75db9%3A0xdc3ec1a504bf4830!2sAuli%2C%20Auli%20Laga%20Salude%2C%20Uttarakhand%20246443!5e0!3m2!1sen!2sin!4v1647942222007!5m2!1sen!2sin"/>
      <Hotel/>
      <Nearby title1="Dehradun" title2="Haridwar" title3="Dhanaulti" title4="Mussoorie" image1={nimg1} image2={nimg2} image3={nimg3}
      image4={nimg4}/>
      <Footer />

    </div>
  )
}

export default Auli
