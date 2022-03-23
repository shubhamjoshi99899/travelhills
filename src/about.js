    import React from 'react'

    const About = () => {
        return (
            <div>
                <section className="common-section about-us"> 
                <div className="container mb-5">
                <div className="row">
                    <div className="col-12 col-lg-5 text-center about-us-leftside-image">
                        <img src="./images/3.jpg " alt="aboutus" srcset="" />
                    </div>
                    {/*div section right data*/}
                    <div className="col-12 col-lg-7 about-us-list">
                        <h1 className="main-heading">About Us</h1>
                        <div className="row about-us-info">
                            <div className="col-12 about-us-data">
                                <p className="main-hero-para">
                                We, a group of professional qualified Uttranchal people, feel pleasure to
                                introduce our self with the name of Travel Hills. We are authorized
                                marketing agents of Uttrakhand Tourism Development Corporation and have
                                tie-up with leading Hotels comprising all categories of Hotels i.e. Economy, Budgets,
                                Deluxe and Star including Camps and Resorts. These have been selected very carefully,
                                keeping in mind the standards of necessary amenities, ideal locations and proper 
                                ambience, to offer the best quality to price ratio.
                                </p> 
                            </div>
                    </div>
                    <br/>
                    <div class="frame">
              <button class="custom-btn btn-3"><span>Learn More</span></button>
              </div>
                
                </div>
                </div>
            </div>
            </section>
            </div>
        )
    }

    export default About;
