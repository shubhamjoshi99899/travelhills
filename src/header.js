import React from 'react'


const Header = () => {
    return (
         <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
                            <h1 className="display-2">Travelling in hills made<br />
                                easy for you.</h1>
                            <p className="main-hero-para">
                                A mystical land of mountains and mythologies, exquisite
                                landscapes and exhilarating adventure, and wellness and
                                yoga, Uttarakhand has something to offer every traveller.
                                Popularly known as Devbhoomi, or the land of gods, the
                                state is framed by the Himalayas and divided into two
                                main regions, Garhwal and Kumaon. While Uttarakhand
                                has several well-known destinations like Nainital,
                                Mussoorie, Corbett National Park and Auli, and
                                pilgrimage sites like Kedarnath, Badrinath,
                                Rishikesh and Haridwar, explore the 13 lesser-known
                                destinations from the state's 13 districts.

                            </p>
                            <h3>Book your trip with us.</h3>
                            <div className="input-group mt-3">
                                <input type="text"
                                 className="rounded-pill w-85 me-9 p-4 form-control-text" 
                                     placeholder="Enter your Destination"
                                 />
                                 
                                <div className="input-group-button">
                               <a href="#">Check Availability</a>
                            </div>
                            </div>
                            </div>
                            <div className="col-12 col-lg-6 header-right-side
                             d-flex justify-content-center align-items-center
                              main-herosection-images"> 
                        
                         <img src="./images/4.jpg" alt="heroimg" className="image-fluid"/>
                         <img src="./images/11.jpg" alt="" className="image-fluid  main-hero-img2"/>
                        
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header;
