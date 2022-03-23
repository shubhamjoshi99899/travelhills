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
            style={{ ...style, display: "block", fontSize: "10px", fontWeight: "900", height: "20px", background: "black", color: "white", borderRadius: "40px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", fontSize: "10px", fontWeight: "900", height: "20px", background: "black", color: "white", borderRadius: "40px" }}
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
            title: 'Chandak',
            label: 'Located about 8km away from the town, Chandak is a hill famous for a revered temple dedicated to Hindu deity Manu. Chandak is an ideal spot for hang gliding too..',
            image: "https://cdn.s3waas.gov.in/s347d1e990583c9c67424d369f3414728e/uploads/bfi_thumb/2019081726-olw8lu4dfgr9v8jcich4uptocharpz6yuc44olv9fu.jpg"
        }, {
            id: 2,
            title: 'Thal Kedar Temple',
            label: 'Famous for a revered temple dedicated to Lord Shiva, Thal Kedar finds mention in the Skanda Purana, an ancient Hindu religious text. Thal Kedar is perched at an elevation of 880 m above sea level and offers astounding vistas of the surrounding valleys. Pilgrims and devotees gather here in large numbers during the festival of Shivratri.',
            image: "https://www.kafaltree.com/wp-content/uploads/2020/10/thal-kedar-pithoragarh.jpg"
        }, {
            id: 3,
            title: 'Pithoragarh Fort',
            label: 'Located on a hilltop on the outskirts of the town, this fort is one of the major attractions of Pithoragarh. It is said to have been built initially by the Chand dynasty and later restored by the Gurkhas in the 18th century. The fort offers panoramic views of the surrounding valleys. Though the main structure is almost in ruins, it does offer a fun hike. It is also known as London Fort.',
            image: "https://www.kafaltree.com/wp-content/uploads/2020/04/london-fort-pithoragarh.jpg"
        }, {
            id: 4,
            title: 'Kamakhya Devi Temple',
            label: "The sacred Kamakhya Devi temple dedicated to the Hindu Goddess of Desire is located about 7 km north-east of Pithoragarh. It is encircled by several sun-kissed peaks and is one of the pious places of Kumaon. Established as a devout place for many Hindu devotees, the temple of Kamakhya Devi was built by Madan Sharma and his family.",
            image: "https://lh5.googleusercontent.com/p/AF1QipNFCm7JPHpx8VejqP4jBHZa6FARd3R7nqFRwsgy=w1080-k-no"
        }, {
            id: 5,
            title: 'Dhwaj Temple',
            label: 'The Dhwaj Temple is a famous Hindu temple dedicated to Lord Shiva and Goddess Jayanti. It is located near Pithoragarh and is perched at an elevation of 2,100 metres above sea level. The temple can be easily accessible as it is 10 km by road from Pithoragarh..',
            image: "images/places/dhwaj-temple.jpg"
        },
        {
            id: 6,
            title: 'Om Parvat',
            label: 'Om Parvat can be viewed on the route to the Kailash Manasarovar Yatra from the last camp below Lipulekh Pass at Indian side. Recently it is also claimed by Nepal, the territory falls towards Indian Uttarakhand side on Dharchula, Pithoragarh District. ..',
            image: "https://new-img.patrika.com/upload/2018/06/03/om_parvat3_2898223-m.jpg"
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
                                    <img className="slicker-slide-image" src={slide.image} />
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