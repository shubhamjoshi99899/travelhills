        import React, { useState } from 'react';
        import toursapi from './API/toursapi';
        const Tours = () => {
            const [tourData, setTourData] = useState(toursapi);
            
            return (
                <div>
                <section className="tours-main-section">
                    <div className="container tours-container">
                        <h1 className="main-heading text-center fw-bolder">
                                Our Trip Packages
                                </h1> 
                                <div className="row">
                                {tourData.map((curElem)=>
                                { const {id, title, info,image} = curElem;
                                return(
                                    <> 
                                    <div class="ui-card">
                                        
        <img src={image} />
        <div class="description" key={id}>
            <h3>{title}</h3>
            <p>{info}</p>
            <div class="tours-frame">
              <button class="custom-btn btn-3"><span>Read More</span></button>
              </div>
        </div>
    </div>
                
                                </>)
                                }
                                )}
                                    
                        </div>
                    </div>
                </section> 
                </div>
            );
        };

        export default Tours;