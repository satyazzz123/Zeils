import React from 'react'
import videobg from '../video/bg.mp4'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import 'react-slideshow-image/dist/styles.css';
import union from '../logos/Union2.png'
import { Parallax } from "react-parallax";
import Resort from './Resort';
import wave from '../logos/Component 3.png'
import Contact from './Contact';
import { TypeAnimation } from 'react-type-animation';

const buttonStyle = {
 
  background: 'none',
  border: '10px'
};

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
  nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
}

const fadeImages = [
  {
    url: 'https://wallpapercrafter.com/th800/89107-nature-landscape-hd-sunset-sea-sky-scenery-4k.jpg',
    caption: ''
  },
  {
    url: 'https://wallpapers.com/images/high/cave-at-beach-kyao5nsg2tooumzv.jpg',
    caption: ''
  },
  {
    url: 'https://w0.peakpx.com/wallpaper/659/115/HD-wallpaper-aerial-view-of-green-and-brown-land-near-body-of-water.jpg',
    caption: ''
  },
];

export default function Background() {
  let mousein=function(){
    let a=document.getElementById("btn-booking")
    let b=document.getElementById("wave")
    b.style.display="visible"
    b.style.transform="translate(-0px,-20px)"
    b.style.transitionDuration="1s"
    // a.style.color="#222"
    // a.style.backgroundColor="white"
    a.style.animationTimingFunction="ease-in-out"
    a.style.transitionDuration="0.8s"
    
    
  }
  let mouseout=function(){
    let a=document.getElementById("btn-booking")
    let b=document.getElementById("wave")
    b.style.transform="translate(0px,0px)"
    b.style.display="hidden"

    b.style.transitionDelay="0.5s"
    // a.style.color="white"
    // a.style.backgroundColor="#222"
    a.style.animationTimingFunction="ease-in-out"
    a.style.transitionDuration="0.8s"
  }
  let headin=function(){
    let a =document.getElementById("zeil-head");
    a.style.display="hidden"
  }
  return (
    <div>

      <video id='video-bg' src={videobg} autoPlay loop muted />
      
      <div className="bgcontent">
        {/* <div style={{position:"relative",top:"-200px"}}> <h1 onMouseOver={headin} id='zeil-head'>Zeil's sailing</h1> </div> */}

      <a href="/" style={{textDecoration:"none",color:"white"}}>
      <TypeAnimation
      sequence={[
        'you love sea?', // Types 'One'
        1000, // Waits 1s
        'want an adventure of a lifetime?', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'welcome to zeil', // Types 'Three' without deleting 'Two'
        ,10000,
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={false}
      repeat={Infinity}
      style={{ fontSize: '40px',position:"relative",top:"-200px",fontWeight:"900" }}
    />



      </a>







       
       
       
       
       
       
       
       
        Hello, join us on a incredible journey across all the seas that our beautiful planet has
        <div> to offer....</div>
        <div style={{ padding: "15px" }}>come forth witness  greatness ,witness the true breeze with us. Come to Zeil </div>
        <div className="butoon">
          <button className="btn">
            Experience Greatness
          </button>
        </div>

      </div>
      <div className="extracontent">

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }} className="extracontent-1">
          <img style={{ width: "25%", paddingLeft: "552px", position: "relative", top: "0px" }} src={union} alt="" />

          <p style={{ display: "flex", justifyContent: "center", paddingLeft: "60px" }} >At zeils you see world like never before Journey Like never beforesail with us experince true sailing get closer to nature so We welcome you to zeil's sailing</p>
          <div style={{ transform: "rotate(360deg)" }}> <img id='styleimg' style={{ width: "25%" }} src={union} alt="" /></div>
        </div>

      </div>
      <div className="cards">
        <div className="cardcontent">


          <div className='card-heading' >


            <h2 style={{ display: "flex", justifyContent: "center", fontSize: "33px", paddingTop: "30px" }}>Why Zeil's Sailing</h2>

          </div>
          <div style={{
            width: "82%",
           
            flexDirection:"coloumn",
            paddingLeft: "95px"
          }} className="card-writting">
            
            <p>at zeil we provide experience at sea like never before..here we provide state of the art cruises where you can explore four oceans and seven seas. we have lavish sailing features that bamboozled our previous passengers.their reviews about us are below and many more</p>
            <p>come and join us in a incredible voyage where you unravel the true nature of sea.because at zeil's you see the true wonders of beauty</p>
          </div>

        
            <div style={{height:"35%"}} id="btn-carry">
              <img style={{zIndex:101,width:"40%",display:'inline-block',position:"relative",left:"238px",top:"116px"}} id='wave' src={wave} alt="" />
            <button style={{
              zIndex:100,
              position: "relative",
              left: "-9px",
              top: "62px",
              padding: "15px 50px ",
              backgroundColor:"#222",
              border:"2px solid white",
              color:"white",
              fontWeight:"600",
              borderRadius:"5px"
            }} className="book" id='btn-booking' onMouseLeave={mouseout} onMouseEnter={mousein}>BOOK NOW</button>
            </div>
        


        </div>

        <div className="slide-container">
          <Fade duration={3000}  {...properties}>
            {fadeImages.map((fadeImage, index) => (
              <div className="each-fade" key={index}>
                <div className="image-container">
                  <img id='slide-images' src={fadeImage.url} />
                </div>
                <h2>{fadeImage.caption}</h2>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    
     
    
  
    </div>
  )
}
