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
      title: 'Tiffin Top – View The Sunrise',
      label: 'Of the many things to see in Nainital, viewing the sunrise from Tiffin Top is a must. Himalayan Range will never look this beautiful to you. Catch a glimpse from Tiffin Top, a peak in Nainital and witness the most awe-inspiring sight. The place is only about 4 km from the heart of Nainital and makes for a wonderful trek. You can also enjoy a horse ride to go there.',
      image:"https://assets.traveltriangle.com/blog/wp-content/uploads/2015/05/Sunrise-400x269.jpg"
    }, {
      id: 2,
      title: 'Naini Lake',
      label: 'Nainital Lake, famously known as Naini Lake is the major attraction of Naintal town as well of Uttarakhand. Surrounded by panoramic seven hills, Nainital lake is a favourite spot among romantic travellers around the world. It is one of the most visited lakes in India.',
      image:"https://www.euttaranchal.com/tourism/timthumb.php?src=https://www.euttaranchal.com/tourism/photos/nainital-lake-9975281.jpg&w=750&h=510&q=50"
    }, {
      id: 3,
      title: 'Nainital Zoo ',
      label: 'Nainital Zoo is one of the best attraction for wildlife lovers in Nainital. Officially named as Bharat Ratna Pt. Govind   Ballabh Pant High Altitude Zoo Nainital, this well maintained zoo is the single zoo in entire Uttarakhand state. ',
      image:"https://www.euttaranchal.com/tourism/timthumb.php?src=https://www.euttaranchal.com/tourism/photos/nainital-zoo-2915028.jpg&w=750&h=510&q=50"
    }, {
      id: 4,
      title: 'Naini Devi Temple',
      label: 'A well known Shakti Peeths of Hindu religion, Naini Devi Temple is sacred place of great devotion in Nainital. Goddess Naini Devi is the diety of Naini Devi Temple and located at northern end of famous Nainital Lake. Goddess in this holy temple is represented by her two eyes. Devotees from far away place comes here to take blessing of Maa Naina Devi..',
      image:"https://www.euttaranchal.com/tourism/timthumb.php?src=https://www.euttaranchal.com/tourism/photos/naina-devi-temple-61763.jpg&w=750&h=510&q=50"
    }, {
      id: 5,
      title: 'The Mall Road, Nainital',
      label: 'The Mall is a most popular name in Nainital city. A busiest road in day time, The Mall runs side by side of the Nainital Lake. Britishers constructed The Mall Road which passes through the centre of Nainital and connects two main ends of Nainital city, Mallital and Tallital.',
      image:"https://www.euttaranchal.com/tourism/timthumb.php?src=https://www.euttaranchal.com/tourism/photos/nainital-3050172.jpg&w=750&h=510&q=50"
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