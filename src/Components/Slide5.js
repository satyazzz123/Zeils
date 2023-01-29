import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Slide5() {
  return (
    <div style={{background:'url("https://static.vecteezy.com/system/resources/previews/002/073/755/non_2x/blurred-tropical-beach-background-free-photo.jpg")',backgroundSize:"cover",height:"980px",backgroundRepeat:"no-repeat"}}>

    <div id='slide1' style={{width:"75%",position:"relative",    left: "202px",
        top: "0px"}}>
                     <Carousel autoPlay={true} interval={1500} transitionTime={1500} infiniteLoop={true}>
                    <div >
                        <img  src="https://images.unsplash.com/photo-1519233991914-26a44330ccd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1568254500745-c879851c30fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1615761136599-86165bdf1a83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
        </div>
    
    
    
     </div>
  )
}
