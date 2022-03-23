import React, {useState} from 'react'


const Nearby = (props) => {
    
    
    
      
    return(
        <div>
                            
                                <div class="container title-container">
                                <h1 className="main-heading text-center fw-bolder">
                                            Nearby Places
                                            </h1> 
{
  
        
    <div class="nearby-grid">
		<figure class="nearby-effect">
            {props.id}
			<img src={props.image1} alt="img16" />
			<figCaption>
            <h2>{props.title1}</h2>
				<hr color="white" noshade />
				<div class="btn-container">
				 <button type="submit" class="btn5 btn" id="narnia">{props.info1}</button>
			    </div>
                
            </figCaption>	
		</figure>
	</div>
    
    
    
}
{
    <div class="nearby-grid">
    <figure class="nearby-effect">
        {props.id}
        <img src={props.image2} alt="img16" />
        <figCaption>
        <h2>{props.title2}</h2>
            <hr color="white" noshade />
            <div class="btn-container">
             <button type="submit" class="btn5 btn" id="narnia">{props.info2}</button>
            </div>
            
        </figCaption>	
    </figure>
</div>
}
{
    <div class="nearby-grid">
    <figure class="nearby-effect">
        {props.id}
        <img src={props.image3} alt="img16" />
        <figCaption>
        <h2>{props.title3}</h2>
            <hr color="white" noshade />
            <div class="btn-container">
             <button type="submit" class="btn5 btn" id="narnia">{props.info3}</button>
            </div>
            
        </figCaption>	
    </figure>
</div>
}
{
    <div class="nearby-grid">
    <figure class="nearby-effect">
        {props.id}
        <img src={props.image4} alt="img16" />
        <figCaption>
        <h2>{props.title4}</h2>
            <hr color="white" noshade />
            <div class="btn-container">
             <button type="submit" class="btn5 btn" id="narnia">{props.info4}</button>
            </div>
            
        </figCaption>	
    </figure>
</div>
}
    </div>
    </div>
    )
    }
    

export default Nearby
