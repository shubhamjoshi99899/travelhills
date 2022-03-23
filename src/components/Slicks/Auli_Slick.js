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
      title: 'Gorson Bugyal',
      label: 'Located around 3 km from Auli, Gurso Bugyal or Gorson Bugyal is a spectacular meadow surrounded by dense forest of oaks and conifers. Situated at an elevation of 3,056 m, the high-altitude grassland is a brilliant green carpet in summer and a snow-covered magical land in winter. Its a good trek for beginners and offers spectacular views of Nanda Devi, Trishul and Dron Parvat peaks. This place is only about 1.5 km away from the last ropeway tower in Auli.',
      image:"images/places/gb.jpg"
    }, {
      id: 2,
      title: 'Auli View Point',
      label: 'The panoramic views in Auli can be astonishing as it is surrounded by very high peaks including Nanda Devi (7817 m). The Hanuman Temple is supposed to be the place where Hanuman took some rest when he had come to the Himalayas to procure Sanjivani to rescue Laxman, the younger brother of Rama. Visitors can also enjoy a cable car here which can give them a beautiful view of the surroundings.',
      image:"images/places/viewpoint.jpg"
    }, {
      id: 3,
      title: 'Auli Artificial Lake',
      label: 'The highest artificial lake in the world, it provides a serene and calm atmosphere. The flawless turquoise lake bordered by lush green slopes, looks picture-perfect and can be accessed through the cable car. In winter, when snow carpets the grass, the lake shines like a jewel embedded in the white.',
      image:"images/places/auli_a_lake.jpg"
    }, {
      id: 4,
      title: 'Kwani Bugyal',
      label: 'Situated at 3,380 m above sea level, this lush meadow is a haven for nature lovers and trekkers. Around 13 km from Gurso Bugyal, this bugyal (alpine pasture or meadow) can be reached by trekking. It offers some of the most spectacular views of the snow-clad mountain peaks, panoramic scenery, fresh air, and lots of adventure.',
      image:"images/places/Kwani.jpg"
    }, {
      id: 5,
      title: 'Chattrakund',
      label: 'Chattrakund is a small lake located at an elevation of 3300 meters above sea level near Auli, Joshimath. The lake is surrounded by thick, lush green forests. Situated as an altitude of 3,300 m, this small lake is surrounded by verdant greenery and this place offers panoramic views of the surrounding mountains. Visitors are enthralled by the picturesque settings and tranquility of this place. hose looking for some moments of solace or those looking to spend some special time with their loved ones, even the corporate tourists hoping for some team bonding, this is the place to be.',
      image:"images/places/chatrakund.jpg"
    }, {
      id: 6,
      title: 'Trishul Peak',
      label: 'The three Himalayan mountain peaks of western Kumaun as a whole form the Trishul peak. Having a height of 7120m, the Trishul group forms the southwest corner of the ring of peaks that enclose Nanda Devi Sanctuary. In 1907, the main peak - Trisul I - became the first peak over 7,000m to have ever been climbed by someone. The peak can be best viewed from Kausani or during the Roopkund Trek.',
      image:"images/places/trishul peak.jpg"
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