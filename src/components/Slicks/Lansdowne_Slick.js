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
      title: 'Gumkhal',
      label: 'A holy place on the bank of Khoh river, Durga Devi Temple is a must visit place in Kotdwar. Located at about 9 km from Kotdwar, Durga Devi temple is a Goddess Durga Mata temple and an important place to worship in Kotdwar. Durga Devi temple is magnificently situated on the slant of a hill near the road to Pauri..',
      image:"https://www.euttaranchal.com/tourism/timthumb.php?src=https://www.euttaranchal.com/tourism/photos/durga-devi-temple-454613.jpeg&w=750&h=510&q=50"
    }, {
      id: 2,
      title: 'Kanvashram',
      label: 'A Siddh Peeth of Rishi Kanva, the holy place of Kanvashram is a historical place to visit near Kotdwara. Located at 14 km from the Gate of Garhwal - Kotdwara, Kanvashram is visited by tourists searching for divine peace and solitude. Kanvashram is also mentioned in many Vedas and Hindu Manuscripts..',
      image:"https://www.euttaranchal.com/tourism/timthumb.php?src=https://www.euttaranchal.com/tourism/photos/kanvashram-1855313.jpg&w=750&h=510&q=50"
    }, {
      id: 3,
      title: 'Pauri',
      label: 'Pauri is the headquarters of the district Pauri Garhwal and also the Garhwal division. Some of the popular tourist attractions in and around Pauri are Khirsu, Doodhatoli, Jwalpa Devi Temple, Kandoliya Temple, Devprayag, Chaukhamba View Point, Kyunkaleshwar Mahadev Temple and Tarkeshwar Mahadev Temple. ',
      image:"https://www.euttaranchal.com/tourism/photos/pauri-garhwal-3122902.jpg"
    }, {
      id: 4,
      title: 'Khirsu ',
      label: 'The picturesque town of Khirsu is enveloped by the benedictory pines, tall oaks, and old deodar trees. This gorgeous hill queen is perched at an elevation of 1,900 meters above sea level. Khirsu offers a 180-degree view of the sun-kissed Himalayas and is famous for its apple orchards that produce sweet rosy apples. It is one of the best places to head to if you are looking for a picturesque destination to spend your holidays in the midst of the Himalayas. .',
      image:"https://www.euttaranchal.com/tourism/photos/khirsu-6370243.jpg"
    }, {
      id: 5,
      title: 'Sidhbali Temple',
      label: 'Entangled at foot by Khoh river of Kotdwara, Sidhbali Temple is a historic temple of Lord Hanuman. Located at the outskirt of Kotdwara city, Baba Sidhbali Temple is the most popular place to visit in Kotdwara. A centre of faith and devotion, Sidhbali Temple have been the place of meditation for many great saints (Sidh)..',
      image:"https://www.euttaranchal.com/tourism/timthumb.php?src=https://www.euttaranchal.com/tourism/photos/sidhbali-temple-6131198.jpg&w=750&h=510&q=50"
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