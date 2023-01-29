import React from 'react'
import { CgEnter } from 'react-icons/cg';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import shell from '../logos/Vector 8.png';
const buttonStyle = {
 
    background: 'none',
    border: '10px'
  };
  
  const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
  }
  

const slideImages = [
    {
     
      caption: 'a gateway like no other a true tranquility to soul.Every moment there was an adventure a voyage i did not want to end ,the voyage was a trip worth all the money',
      customer:'~Emillia clarke'
    },
    {

      caption: 'where i should even begin from , food exquisite, services marvellous, cruise experience one of a kind. in short a trip of a life-time',
      customer:'~Shreya Roy'
    },
    {

      caption: 'this trip had everything any travel enthusiast aspires for. even if he or she is not a travel enthusiast he/she will make most of the trip.the journey of a life-time',
      customer:'~miranda higgins'
    },
  ];

export default function Resort() {
  return (
    <div>
<div style={{height:"0px"}}>
<div style={{
position: "relative",

top: "-852px",

height:"533px",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:{shell}

}} className="resort">
    <img  id='shell' style={{
       zIndex:1,
      

    }} src={shell} alt="" />
        <div style={{
             position:"relative",
             left:"-200px"   

        }}   className="slide-container">
        <Slide {...properties} indicators={true} duration={3000}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <div style={{fontFamily:"metro",zIndex:"10",fontSize:"24px",fontWeight:"500"}}>{slideImage.caption}
              <div style={{paddingTop:"10px",paddingLeft:"590px"}}>
                {slideImage.customer}
              </div>
                </div>
              </div>
            </div>
          ))} 
        </Slide>
      </div>





</div>
</div>
</div>
  )
}
