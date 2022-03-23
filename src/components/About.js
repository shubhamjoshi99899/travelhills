import React from 'react'

const About = (props) => {
    return (
        <div>
            <div class="blog-card">
        <div class="thumbnail"><img class="left" src={props.image} /></div>
        <div class="right">
            <h1>{props.title}</h1>
            
            <div class="separator"></div>
            <p>{props.seperator}</p>
        </div>
        
        <div class="left-text">
            <p>{props.left}</p>
                
        </div>
        
        <div class="fab"><i class="fa fa-arrow-right fa-3x"> </i></div>
    </div>
        </div>
    )
}

export default About
