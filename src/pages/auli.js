import React from 'react'
import Navbar_Destination from '../../components/navbar';
import Carousel_Container from '../../components/carousel';
import Slick from '../../components/Slick'
import Nearby from '../nearby';
const Auli = () => {
  return (
    <div>
    <Navbar_Destination />
    <Carousel_Container />
     <Slick />
     <Nearby /> 
    </div>
  )
}

export default Auli
