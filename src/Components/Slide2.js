import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function Slide2() {
  return (
 <div style={{background:'url("https://static.vecteezy.com/system/resources/previews/002/073/755/non_2x/blurred-tropical-beach-background-free-photo.jpg")',backgroundSize:"cover",height:"980px",backgroundRepeat:"no-repeat"}}>

<div id='slide1' style={{width:"75%",position:"relative",    left: "202px",
    top: "0px"}}>
                 <Carousel autoPlay={true} interval={1500} transitionTime={1500} infiniteLoop={true}>
                <div >
                    <img  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/2a/98/92/aerial-view.jpg?w=700&h=-1&s=1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://www.theindia.co.in/blog/wp-content/uploads/2021/03/Corbett-The-Baagh-Spa-Resort.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d5/9c/b8/stone-wood-nature-resort.jpg?w=700&h=-1&s=1" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>



 </div>
  )
}
