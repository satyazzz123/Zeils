import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar1 from './Navbar1';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Gallery() {



  let mouseout1 = function () {
    let a = document.getElementById("elem1");
    // a.style.height="400px"
    // a.style.width="34%";
    // a.style.fontSize="20px"
    a.style.transform = "scale(1)"
    a.style.zIndex = "1"



  }
  let mouseout2 = function () {
    let a = document.getElementById("elem2");
    a.style.transform = "scale(1)"
    a.style.zIndex = "1"
  }
  let mouseout3 = function () {
    let a = document.getElementById("elem3");
    a.style.transform = "scale(1)"
    a.style.zIndex = "1"

  }
  let mouseout4 = function () {
    let a = document.getElementById("elem4");
    a.style.transform = "scale(1)";
    a.style.zIndex = "1"
  }
  let mouseout5 = function () {
    let a = document.getElementById("elem5");
    a.style.transform = "scale(1)"
    a.style.zIndex = "1"
  }

  let mouseout6 = function () {
    let a = document.getElementById("elem6");
    a.style.transform = "scale(1)";
    a.style.zIndex = "1"
  }





  let mousein1 = function () {
    let a = document.getElementById("elem1");

    a.style.transform = "scale(1.1)";
    a.style.animationTimingFunction = "ease-in-out"
    a.style.transitionDelay = "0.3s";
    a.style.transitionDuration = "0.8s";
    a.style.zIndex = "10";
    a.style.boxShadow = "5px 10px black;"
    // a.style.height="450px"
    // a.style.width="40%";
    // a.style.fontSize="24px";

    // let b=document.getElementById("elem2");
    // b.style.height="450px";
    // let c=document.getElementById("elem3");
    // c.style.height="450px"

    // b.style.animationTimingFunction="ease-in-out"
    // b.style.transitionDelay="0.3s";
    // b.style.transitionDuration="0.8s";
    // c.style.animationTimingFunction="ease-in-out"
    // c.style.transitionDelay="0.3s";
    // c.style.transitionDuration="0.8s";

  }
  let mousein2 = function () {
    let a = document.getElementById("elem2");
    a.style.transform = "scale(1.1)";
    a.style.animationTimingFunction = "ease-in-out"
    a.style.transitionDelay = "0.3s";
    a.style.transitionDuration = "0.8s";
    a.style.zIndex = "10"


  }
  let mousein3 = function () {
    let a = document.getElementById("elem3");
    a.style.transform = "translate(-50px,0px) scale(1.1)";
    a.style.animationTimingFunction = "ease-in-out"
    a.style.transitionDelay = "0.3s";
    a.style.transitionDuration = "0.8s";
    a.style.zIndex = "10";


  }
  let mousein4 = function () {
    let a = document.getElementById("elem4");
    a.style.transform = "scale(1.1)";
    a.style.animationTimingFunction = "ease-in-out"
    a.style.transitionDelay = "0.3s";
    a.style.transitionDuration = "0.8s";
    a.style.zIndex = "10";
  }
  let mousein5 = function () {
    let a = document.getElementById("elem5");
    a.style.transform = "scale(1.1)";
    a.style.animationTimingFunction = "ease-in-out"
    a.style.transitionDelay = "0.3s";
    a.style.transitionDuration = "0.8s";
    a.style.zIndex = "10";

  }
  let mousein6 = function () {
    let a = document.getElementById("elem6");
    a.style.transform = "translate(-50px,0px) scale(1.1)";
    a.style.animationTimingFunction = "ease-in-out"
    a.style.transitionDelay = "0.3s";
    a.style.transitionDuration = "0.8s";
    a.style.zIndex = "10";

  }







  // let mousein1=function(){
  //   let a =document.getElementById('changediv');
  //   a.style.background='url("https://thumbs.dreamstime.com/b/taj-mahal-agra-india-morning-light-reflection-water-uttar-pradesh-108954918.jpg")'

  //   a.style.animationTimingFunction="ease-in-out"
  //   a.style.transitionDuration="0.8s"
  //   a.style.backgroundRepeat="no-repeat"
  //   a.style.backgroundSize="cover"
  // }
  // let mousein2=function(){
  //   let a =document.getElementById('changediv');
  //   a.style.background='url("https://images.unsplash.com/photo-1543429776-2782fc8e1acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGlzYSUyMHRvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80")'

  //   a.style.animationTimingFunction="ease-in-out"
  //   a.style.transitionDelay="0.3s"
  //   a.style.transitionDuration="0.8s"
  //   a.style.backgroundRepeat="no-repeat"
  //   a.style.backgroundSize="cover"
  // }
  // let mousein3=function(){
  //   let a =document.getElementById('changediv');
  //   a.style.background='url("https://images5.alphacoders.com/311/311151.jpg")'

  //   a.style.animationTimingFunction="ease-in-out"
  //   a.style.transitionDelay="0.3s"
  //   a.style.transitionDuration="0.8s"
  //   a.style.backgroundRepeat="no-repeat"
  //   a.style.backgroundSize="cover"
  // }
  // let mouseout=function(){
  //   let a =document.getElementById('changediv');
  //   a.style.background='url("https://wallpapershome.com/images/pages/ico_h/19836.jpg")'
  //   a.style.animationTimingFunction="ease-in-out"
  //   a.style.transitionDelay="0.3s"
  //   a.style.backgroundRepeat="no-repeat"
  //   a.style.transitionDuration="0.8s"
  //   a.style.backgroundSize="cover"

  // }








  // useEffect(()=>{
  // AOS.init({duration: 2000})
  // },[])
  return (
    <div>
      {/* <div style={{ height:"40%",width:"40%",position:"absolute",right:"357px"}} className="caraousel">
      <Carousel>
                <div >
                    <img src="https://st2.depositphotos.com/4695029/7141/i/450/depositphotos_71419053-stock-photo-beautiful-swimming-pool.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/950689048/photo/enjoying-at-the-pool.jpg?s=612x612&w=0&k=20&c=fxwWZWo49mybI4MHkfYFg74GTJ5OCBr5Axo6p0xF3Hw=" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://media.gettyimages.com/id/168301497/photo/luxurious-hawaiian-5-star-resort.jpg?s=612x612&w=gi&k=20&c=IFmPB1MTOZXqL-_Z-PYTYMhebBY5wMLaswdxqCX2ghM=" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
      </div> */}




      {/* //new element test */}
      {/* <div className='architecture' id='changediv'>
 <div id='overlay' style={{height:"450px",width:"100%"}}> 
 <li onMouseOver={mousein1}>   <a onMouseOut={mouseout} onMouseEnter={mousein1} to="#">tajmahal</a>   </li>
  <li>   <a onMouseOut={mouseout} onMouseEnter={mousein2}      to="#">leaning tower of pisa   </a> </li>
  <li>   <a  onMouseOut={mouseout} onMouseEnter={mousein3}      to="#"> eiffel tower</a> </li>
  </div>
</div> */}
      <Navbar1 />
      <div style={{ color: "#12305C ", display: "flex", justifyContent: "center", alignItems: "center", height: "200px", fontSize: "42px", backgroundColor: "#F3F9FB", fontFamily: "metro", fontWeight: "600" }}>
        Our Gallery
      </div>
      <div className="row1">
        <div onMouseEnter={mousein1} onMouseOut={mouseout1} id='elem1' className="row1-elem">
          <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} className="overlay2">
            visit our resort <Link id='arr1' className='arrow'
              to="/slide1"><AiOutlineArrowRight /></Link>
          </div>
        </div>
        <div onMouseEnter={mousein2} onMouseOut={mouseout2} id='elem2' className="row1-elem">  <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} className="overlay2">
          visit our private beaches <Link id='arr1' className='arrow'
            to="/slide3"><AiOutlineArrowRight /></Link>
        </div></div>
        <div onMouseEnter={mousein3} onMouseOut={mouseout3} id='elem3' className="row1-elem">  <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} className="overlay2">
          enjoy our sailing <Link id='arr1' className='arrow'
            to="/slide4"><AiOutlineArrowRight /></Link>
        </div>

        </div>

      </div>
      <div className="row2">
        <div onMouseEnter={mousein4} onMouseOut={mouseout4} id='elem4' className="row2-elem">  <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} className="overlay2">
          Enjoy exoctic sea food <Link id='arr1' className='arrow'
            to="/slide5"><AiOutlineArrowRight />
          </Link>
        </div>
        </div>
        <div onMouseEnter={mousein5} onMouseOut={mouseout5} id='elem5' className="row2-elem">  <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} className="overlay2">
          enjoy our adventure sea sport <Link id='arr1' className='arrow'
            to="/slide6"><AiOutlineArrowRight /></Link>
        </div>
        </div>
        <div onMouseEnter={mousein6} onMouseOut={mouseout6} id='elem6' className="row2-elem">  <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} className="overlay2">
          eat at our underwater restaurant  <Link id='arr1' className='arrow'
            to="/slide7"><AiOutlineArrowRight /></Link>
        </div>
        </div>
      </div>












    </div>

  )
}
