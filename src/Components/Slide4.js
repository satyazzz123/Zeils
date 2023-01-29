import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Slide4() {
  return (
    <div style={{background:'url("https://static.vecteezy.com/system/resources/previews/002/073/755/non_2x/blurred-tropical-beach-background-free-photo.jpg")',backgroundSize:"cover",height:"980px",backgroundRepeat:"no-repeat"}}>

    <div id='slide1' style={{width:"75%",position:"relative",    left: "202px",
        top: "0px"}}>
                     <Carousel autoPlay={true} interval={1500} transitionTime={1500} infiniteLoop={true}>
                    <div >
                        <img  src="https://i.guim.co.uk/img/media/c35f5746ca9883d72b0b770b4166c17a4745bd87/0_128_5464_3279/master/5464.jpg?width=700&quality=85&auto=format&fit=max&s=d7536266e4165f9ea731f7dd82566436" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/21/2020/11/boat-hitchhiking-foredeck-credit-Tor-Johnson-630x394.jpg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="https://media.istockphoto.com/id/1151994519/photo/regatta-sailing-ship-yachts-with-white-sails-at-opened-sea-aerial-view-of-sailboat-in-windy.jpg?s=612x612&w=0&k=20&c=2-QOi60lz6qF2KTbLP4jLKUUQGJbT5qx9jEJxdURvHU=" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
        </div>
    
    
    
     </div>
  )
}
