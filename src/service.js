import React,{useState} from 'react';
import servicesapi from "./API/servicesapi";

const Service = () => {

    const [workData, setWorkData] = useState(servicesapi);
    console.log(workData);
    return (
        <div>
            <section>
                <div className="service-container container">

            <h1 className="main-heading text-center">Offerings</h1>
             <div className="row">
             {
                 workData.map((curElem)=>{
                    const {logo, title, info} = curElem;
                     return(
                         <>
                         <div className="col-12 col-lg-4 text-center work-container-subdiv">
                         <i className={`fontawesome-style ${logo}`}></i>
                 <h2 className="sub-heading">{ title }</h2>
                 <p className="main-hero-para w-100">
                    {info}
                 </p>
                 </div>
                 </>
                     ); 
                 })
             }
               
             </div>     
        </div>
            </section>
        </div>
    )
}

export default Service;