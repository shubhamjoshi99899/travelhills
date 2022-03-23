


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
      title: 'Deogarh Fort',
      label: 'This 16th-century structure is full of breath-taking murals and rustic colours. With several Jain temples around, this fort also radiates a spiritual aura. Travel back in time with the ancient architecture.',
      image:"https://images.thrillophilia.com/image/upload/s--T8WdzIUO--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/146/110/original/1550732840_Deogarh_Fort.jpg.jpg"
    }, {
      id: 2,
      title: 'Surkanda Devi Temple',
      label: 'Situated about 7 km from Dhanaulti, Surkanda Devi Temple can be reached after a 3-km trek from the village Kaddu Khal. A trekkers paradise, the view from the temple is mesmeric. According to local legends, the Surkhanda Devi Temple was constructed at the same site where the head of Sati fell when Lord Shiva began tandava (a destructive dance) after the death of Sati, the Lord divine consort. Earlier, the place was referred to as Sirkandha, but later on changed to Surkhanda. The temple is one of the 51 Shakti Peethas in India and is surrounded by a dense forest.',
      image:"https://rishikeshdaytour.com/blog/wp-content/uploads/2019/01/Mata-Surkanda-Devi-Temple-Dhanaulti-Uttarakhand.jpg"
    }, {
      id: 3,
      title: 'Dhanaulti Eco Park',
      label: 'There are two eco parks in Dhanaulti - located about 200 m apart. Named Amber and Dhara, these parks are spread over 13 hectares of deodar and oak forest. Eco Parks are among the most popular attractions of Dhanaulti. These are well-maintained and an amazing place for the kids to hang out, with a separate playground for them, also a perfect place for nature lovers as well as the adventurous ones to unwind and spend time in solitude..',
      image:"https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/25zl1yjpgsy5887wng27fsjg4zo9_1466488216_799px-Dhanaulti_2.jpg"
    }, {
      id: 4,
      title: 'Tehri Dam',
      label: 'For an enjoyable day out in Dhanaulti, the Tehri Dam is one of the best places you can go to. Surrounded by the tall hills and tucked in amidst lush green gardens, the Tehri Dam is a great scenic spot that you can go to. A perfect place to go to for picnics and a relaxing holiday, you can also enjoy a lot of water activities here.',
      image:"https://images.thrillophilia.com/image/upload/s--w_2-MH0h--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/197/657/original/1584694036_Tehri_Dam.jpg.jpg"
    }, {
      id: 5,
      title: 'Kanatal Adventure Camp',
      label: 'For those looking for a holiday that offers adventure as well as relaxation and comfort, the Kanatal Adventure Camp is your best bet. Located on the Mussoorie-Chamba road in Dhanaulti, with state-of-the-art facilities and attached washrooms, in addition to delicious food, this camp is one of the most popular tourist spots in the region.',
      image:"https://images.thrillophilia.com/image/upload/s--w8w3pXni--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/197/658/original/1584694103_Kanatal_Adventure_Camp.jpg.jpg"
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