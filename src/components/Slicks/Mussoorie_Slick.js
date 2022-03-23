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
      title: 'Kempty Falls',
      label: 'Surrounded by majestic mountain ranges, Kempty Falls is one of the best places to visit in Mussoorie. It is undoubtedly the most popular amongst the plethora of Mussorie tourist places.he melodious sound of the waterfall can be heard from a distance and after reaching there, one is simply left spellbound seeing the serene landscapes during their Mussoorie sightseeing tour.',
      image:"https://assets.traveltriangle.com/blog/wp-content/uploads/2016/06/Kempty-Falls.jpg"
    }, {
      id: 2,
      title: 'Lake Mist',
      label: 'Kempty falls and its gushing waters make the Lake Mist. This lake has a well-known eco-friendly resort located in Mussoorie, known as Lake Mist Resort. A stunning natural beauty, Lake Mist has a good name among the nature lovers. It can be visited all around the year as it looks equally bewitching at all times. It is one of the top places to visit in Mussoorie..',
      image:"https://img.traveltriangle.com/blog/wp-content/uploads/2019/01/Lake-Mist-Resortepb0310.jpg"
    }, {
      id: 3,
      title: 'Mussoorie Lake',
      label: 'Tourists, as well as locals, love to visit this beautiful picnic spot where there is a lot to enjoy for the children too. This is an artificial lake but has been beautifully developed by the authorities as a lovely tourist spot. People can enjoy boating in the lake and enjoy mesmerizing scenic views. The lake area also has numerous eateries that offer good food. ',
      image:"https://assets.traveltriangle.com/blog/wp-content/uploads/2016/06/Mussoorie-lake.jpg"
    }, {
      id: 4,
      title: 'Lal Tibba',
      label: 'Lal Tibba, Mussoorie’s highest peak, offers amazing views of the snow-capped Himalayan range in all its glory. The Japanese telescope that has been installed here allows the visitors to enjoy the pristine beauty of the area. This mountain range is also known to house famous pilgrimages of Kedarnath and Badrinath. The splendid views and nearby pilgrimage options make this peak one of the most famous places in Mussoorie.    ',
      image:"https://assets.traveltriangle.com/blog/wp-content/uploads/2016/06/lal-tibba-mussoorie.jpg"
    }, {
      id: 5,
      title: 'Benog Wildlife Sanctuary ',
      label: 'If you are a wildlife enthusiast, the Benog Wildlife Sanctuary is definitely among the must-visit tourist places in Mussoorie for you. You can enjoy watching some rare faunal and floral species. It is also a nice place with an excellent trekking option that offers a chance to explore this place at an easy pace. It is located almost 11 km away from Mussoorie. It is one of the best places to visit in Mussoorie in one day.',
      image:"https://assets.traveltriangle.com/blog/wp-content/uploads/2016/06/Benog-Wildlife-Sanctuary.jpg"
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