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
      title: 'Sumitranandan Pant Museum',
      label: 'One of the most well-known poets of modern India and belonging to the Chhayavaadi school of Hindi literature, Sumitranandan Pant was born in Kausani. A Padma Bhushan and Jnanpith awardee, his work was greatly influenced by his birthplace. In his memory, his ancestral house in Kausani has been converted into a government museum. The museum displays manuscripts of his poems, draft copies of his literary work, his daily use items, his letters, photographs, and awards.',
      image:"https://uttarakhandtourism.gov.in/sites/default/files/2020-10/Sumitranandan%20Pant%20Museum.jpg"
    }, {
      id: 2,
      title: 'Someshwar Valley',
      label: 'The panoramic views in Auli can be astonishing as it is surrounded by very high peaks including Nanda Devi (7817 m). The Hanuman Temple is supposed to be the place where Hanuman took some rest when he had come to the Himalayas to procure Sanjivani to rescue Laxman, the younger brother of Rama. Visitors can also enjoy a cable car here which can give them a beautiful view of the surroundings.',
      image:"https://uttarakhandtourism.gov.in/sites/default/files/2020-10/Someshwar%20Valley.jpg"
    }, {
      id: 3,
      title: 'Kausani Shawl Factory',
      label: 'To promote the traditional Kumaoni artwork and to provide a source of employment for the local people, the Kausani Shawl Factory was launched in 2002. Since then, Kausani shawls have become a kind of souvenir for tourists. Exquisitely designed by local weavers, these shawls are available in myriad colours and designs..',
      image:"https://uttarakhandtourism.gov.in/sites/default/files/2020-10/Kausani%20Shawl%20Factory.jpg"
    }, {
      id: 4,
      title: 'Anasakti Ashram',
      label: 'The place where Mahatma Gandhi had stayed during his visit to Kausani in 1929 is a popular tourist site today. Gandhiji was so enamoured by the beauty of this village that he called it “the Switzerland of India”. It is said Kausani weather and serenity inspired Gandhiji to write Anasakti Yoga. Today, it serves as a research and study centre and has a small prayer room, a museum, a library, and a few rooms for accommodation. Enjoy breathtaking views of the Himalayas from here.',
      image:"https://uttarakhandtourism.gov.in/sites/default/files/2020-10/Anasakti%20Ashram.jpg"
    }, {
      id: 5,
      title: 'Kausani Tea Estate',
      label: 'Located on the Bageshwar road, this tea estate welcomes tourists for an exploration trip. Spread over 200 hectare, the estate makes for brilliant photo opportunities. You can visit the tea gardens and purchase authentic Kausani tea from the outlets. Kausani also has several fruit orchards where apricots and pears are cultivated. If you want, you can buy fresh fruit jam, jelly and pickles prepared by locals from roadside stalls..',
      image:"https://uttarakhandtourism.gov.in/sites/default/files/2020-10/Kausani%20Tea%20Estate.jpg"
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