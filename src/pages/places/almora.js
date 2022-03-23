import React from 'react'
import NavbarDestination from '../../components/navbar';
import CarouselContainer from '../../components/carousel';
import Slick from '../../components/Slicks/Almora_Slick'
import Nearby from '../nearby';
import Footer from '../../footer'
import About from '../../components/About';
import Details from '../../components/Details';
import Recreation from '../../components/Recreation'
import Location from '../../components/Location';
import background from "./featured/almora.jpg";
import image from './featured/almora.jpeg';
import img1 from './featured/biking.jpg';
import img2 from './featured/Trekking.jpg';
import img3 from './featured/shopping.jpg';
import nimg2 from './featured/jageshwar.jpg';
import nimg1 from './featured/Pithoragarh.jpg';
import nimg3 from './featured/Ranikhet.jpg';
  import nimg4 from './featured/Nainital.jpg';  
import Hotel from '../../components/Hotel';

const Almora = () => {
    return (
        <div>



            <NavbarDestination />
            <CarouselContainer place="Almora, Uttarakhand" desc="Alluring beauty, Panoramic view of the Himalaya" background={background} title="Almora" />
            <About image ={image} title="Almora, Uttarakhand"
       seperator="Almora is believed to have gotten its name from Kilmora, a kind of sorrel, a short 
       plant commonly found here, which was said to be used for washing the utensils of the sun temple
        at Katarmal. Situated on a 5-km-long ridge at the southern edge on the Kashyap hills in the shape
         of a horse saddle, Almora is a picturesque town set against the backdrop of the snow-capped
         Himalayas. Once the capital of the Chand dynasty rulers. Almora is known for its rich cultural
        heritage, unique handicraft and delicious cuisines."
        left="Almora has attracted several eminent people through the ages, including Swami Vivekananda,
         Rabindranath Tagore, Uday Shankar and his troupe, including Guru Dutt and Zora Sehgal came here
          for a performance, and Ravi Shankar, who contributed to the cultural enrichment of the town.
           Govind Ballabh Pant, noted freedom fighter, first chief minister of Uttar Pradesh and later
        Home Minister of India, was born in Almora.The town also serves as the starting point for many 
        treks like Jageshwar, Pindari, Mornaula, Mukteshwar, Binsar, and Ranikhet among others."/>
      <h1 className="main-heading text-center fw-bolder" style={{fontSize:"5rem",marginTop:"-13rem", textDecoration:"underline", marginBottom:"-3rem"}}>
                                            Attractions
                                            </h1> 
      <Slick />
      <Recreation t1="Biking" t2="Trekking" t3="Shopping" r1="Biking"  r2="Trekking"  r3="Shopping"
      d1="One of the best and most popular camping destinations in India, Almora slopes offer an exhilarating run.
      Camp at the best location with your loved ones, school friends, college batchmates and office colleagues."
       d2="
       Almora to Jageshwar is a popular trek, passing through lush green fields and beautiful villages. 
       The Pindari trek is another well-known route. The Pindari Glacier located amid the Nanda Devi
        Mountain and Nanda Kot also offers a memorable experience.Enjoy an easy trek to Fort of Almora
        or Lal Mandi Fort located at Thana Bazaar (Almora Bazar). Climb up to enjoy 360-degree views
        of the town and nearby areas"
        d3="Indulge in some retail therapy at the local market. From local craft objects and garments to delicious savouries and Kumaoni jewellery – Almora's market hubs will not disappoint.
        Trekking and Temple walk"
        img1={img1} img2={img2} img3={img3}/>
      <Details climate="Mostly Sunny" airport="Naini Saini Airport" rail="Kathgodam" region="Kumaun" hotel="Available 40+" temp="19°C" bt="December=February" rate="★★★★✫"/>
      <Location map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55505.15946746232!2d79.61827267854561!3d29.60157958345642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0b7328910d81f%3A0x9811d25dd87d8ed5!2sAlmora%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1647959977036!5m2!1sen!2sin"/>
      <Hotel/>
      <Nearby title1="Pithoragarh" title2="Jageshwar" title3="Ranikhet" title4="Nainital" image1={nimg1} image2={nimg2} image3={nimg3}
      image4={nimg4}/>
      <Footer />

        </div>
    )
}

export default Almora