import React from 'react'
import Figure from 'react-bootstrap/Figure'
const Recreation = (props) => {
    return (
        <div>
       <div class=" title-container">
            <h1 className="main-heading text-center fw-bolder">
                 Recreation
           </h1>   
        </div>                       
  <div class="recreation">
      <div class="recreation-grid">
        
  <Figure class="effect">
    <div class="recreation-container-img">
      <img src={props.img1} />
      <div class="content">
        <h3>{props.t1}</h3>
      </div>
           <div class="container">
              <div class="details">
                <div class="center">
                  <img src="images/pin.png" />
                  <h1>{props.r1}</h1>
                  <p>
                      {props.d1}</p>
                    
                  </div>
                </div>
                </div>           
              </div>
		</Figure>
        
	</div>   
    


    <div class="recreation-grid">
		<Figure class="effect-bubba">
			<div class="recreation-container-img">
        <img src={props.img2} />
        <div class="content">
          <h3>{props.t2}</h3>
        </div>
               <div class="container">
                <div class="details">
                  <div class="center">
                    <img src="images/pin.png" />
                    <h1>{props.r2}</h1>
                    <p>
                       {props.d2}</p>
                   
                  </div>
                </div>
              </div>
              </div>
		</Figure>
	</div> 


  <div class="recreation-grid">
		<Figure class="effect-bubba">
			<div class="recreation-container-img">
        <img src={props.img3} />
        <div class="content">
          <h3>{props.t3}</h3>
        </div>
               <div class="container">
                <div class="details">
                  <div class="center">
                    <img src="images/pin.png" />
                    <h1>{props.r3}</h1>
                    <p>{props.d3}</p>
                  
                  </div>
                </div>
              </div>
              </div>
		</Figure>
	</div> 
    


</div>
</div>
    )
}

export default Recreation
