import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Slide3() {
  return (
    <div style={{background:'url("https://static.vecteezy.com/system/resources/previews/002/073/755/non_2x/blurred-tropical-beach-background-free-photo.jpg")',backgroundSize:"cover",height:"980px",backgroundRepeat:"no-repeat"}}>

    <div id='slide1' style={{width:"75%",position:"relative",    left: "202px",
        top: "0px"}}>
                     <Carousel autoPlay={true} interval={1500} transitionTime={1500} infiniteLoop={true}>
                    <div >
                        <img  src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/13713cfc-05c6-4c0d-a6c8-5b279a535b3c-9-blue-island-for-sale-bahamas-2.jpg" />
                        <p className="legend">Legend 10</p>
                    </div>
                    <div>
                        <img src="https://deluxeprivateboats.com/wp-content/uploads/2020/09/Private-Cozumel-Beaches.jpg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="https://fariyas.com/wp-content/uploads/2022/06/Banner-2-1920X1280-1-790x500.jpg" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
        </div>
    
    
    
     </div>
  )
}
