// App.js
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", fontSize:"10px", fontWeight:"900", height:"20px", background: "black", color:"white", borderRadius:"40px"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,display: "block", fontSize:"10px", fontWeight:"900", height:"20px", background: "black", color:"white", borderRadius:"40px"}}
      onClick={onClick}
    />
  );
}

function Slicker(props) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {

    setNav1(slider1);
    setNav2(slider2);

  });


  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    fade: true,
    asNavFor: '.slider-nav'
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px'
  };

  
  const slidesData = [
    {
      id: 1,
      title: 'Binsar',
      label: 'The sleepy region of Binsar is one of the scenic places of Kumaon region of Uttarakhand. Perched at an elevation of 2420 metres, Binsar is known for offering spell-binding views of the majestic Himalayan peaks such as Chaukhamba, Nanda Devi, Nanda Kot, Panchachuli, and Kedarnath. The main attraction of Binsar is the 300 kms of majestic and panoramic view of Himalayan peaks from Binsar Zero point.',
      image:"https://www.euttaranchal.com/tourism/photos/binsar-3304919.jpg"
    }, {
      id: 2,
      title: 'Sitlakhet',
      label: 'Sitlakhet is the place for you. Adorned in the district of Almora, Sitlakhet is a lesser-known tourist destination located about 24 km from the Queen’s Meadow Ranikhet. Proudly sitting at an elevation of 1900 meters on the kaleidoscopic Syahi Devi hills, Sitlakhet is one of the best places to explore in the Kumaon Himalayas. From this off-beat destination, one can savour a panoramic view of Chaukhamba peaks.',
      image:"https://imvoyager.com/wp-content/uploads/2018/08/DSC_0628.jpg"
    }, {
      id: 3,
      title: 'Jageshwar',
      label: 'Jageshwar is situated at an elevation of 1,870 mts above sea level and at a distance of 37 kms from Almora. Jageshwar is an important tourist destination of Kumaon and receives thousands of visitors every year. It is situated amidst dense Deodar forest with a stream flowing at its backyard. ',
      image:"https://static.toiimg.com/photo/70499289.cms"
    }, {
      id: 4,
      title: 'Sattal',
      label: 'Sattal is a cluster of mysteriously inter-connected seven freshwater lakes located in the Nainital district of Kumaon region. Sat Tal is perched at an altitude of 1370 mts above sea level offering splendors of nature. The group of lakes is set amidst dense forests of oak and pine trees.',
      image:"https://www.euttaranchal.com/tourism/photos/sattal-9008083.jpg"
    }, {
      id: 5,
      title: 'Bageshwar',
      label: 'The city of Bageshwar bedecked on the confluence of Saryu and Gomati rivers and is situated at an elevation of 1004 metres with numerous famous temples dedicated to Gods and Goddesses in the proximity of Bageshwar..',
      image:"https://upload.wikimedia.org/wikipedia/commons/0/03/Bagnath_Temple_at_Bageshwar_Uttrakhand_-_panoramio_%28Cropped%29.jpg"
    }, 
  ];

  return (

    <div className="App">

      <div className="slider-wrapper">

        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={slider => (setSlider1(slider))}
        >

          {slidesData.map((slide) =>

            <div className="slick-slide" key={slide.id}>
              <h2 className="slick-slide-title">{slide.title}</h2>
              <img className="slick-slide-image" src={slide.image} />
              <label className="slick-slide-label">{slide.label}</label>
            </div>

          )}

        </Slider>
        <div className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={slider => (setSlider2(slider))}>

            {slidesData.map((slide) =>

              <div className="slick-slide" key={slide.id}>
                <div className="slicker-content">
                 <div className="slicker-content-overlay"></div>
                   <img className="slicker-slide-image" src={slide.image}/>
                      <div className="slicker-content-details fadeIn-left">
                        <h3>{slide.title}</h3>
                      </div>                     
                    </div>
                  </div>
              

            )}

          </Slider>
        </div>
      </div>

    </div>
  );
}
    



export default Slicker;