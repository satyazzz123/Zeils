import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import zeil from '../logos/Component 11.png';
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function Contact() {
  return (
    <div>
      <div style={{
        background: "#4FA095",
        position: "absolute",
        top: "2412px",
        left:"0px",
        width:"100%",
        zIndex: "200",
        height: "400px"
      }} id="contactkeep" >
        <div
          style={{
            listStyle: "none",
            display: "flex",
            position: "relative",
            bottom: "-315px",
            left: "1263px",
            width: "11%"



          }}
          className="icon" >
          <li >  <a className='aicons' href="https://www.instagram.com/"><BsInstagram /></a> </li>
          <li> <a className='aicons' href="https://twitter.com/i/flow/login"><BsTwitter /></a> </li>
          <li> <a className='aicons' href="https://www.facebook.com/"><BsFacebook /></a> </li>
          <li> <a className='aicons' href="https://www.youtube.com/"><BsYoutube /></a> </li>
        </div>
        <div className="address"><img src={zeil} alt="" style={{
          height: "134px",
          position: "relative",
          right: "-99px", top: "27px"
        }} />
          <p style={{
            fontFamily: "metro", position: "relative",
            right: "-95px", color: "white", fontWeight: "700", fontSize: "22px", width: "60%", top: "24px"
          }}> zeil's sailing</p>
        </div>
        <div style={{  width: "50%", display: "flex", justifyContent: "space-around", position: "relative", top: "-183px", listStyle: "none", color: "white", fontFamily: "metro" }} className="information">
          <div style={{ fontWeight: "bolder" }} className="continents"><h3>COUNTRIES AVAILABLE IN</h3>
            <div>
              <li>India</li>
              <li>Australia</li>
              <li>UK</li>
              <li>USA</li>
            </div>

          </div>
          <div className="continents"><h3>SPECIAL THANKS</h3>
            <div>
              <li>Motu Potu</li>
              <li>Walter White</li>
            </div>

          </div>
          <div className="continents"><h3>OUR DEVELOPERS</h3>
            <li>Jignyasa Mishra</li>
            <li>Satyajit Behera</li>

          </div>
        </div>
        <div className="subscribe" style={{
          width: "40%", position: "relative",
          top: "-74px", left: "-200px",
          height: "40px", display: "flex", justifyContent: "center"
        }}> <h3 style={{color:"white",fontFamily:"metro",position:"relative",top:"-52px",left:"212px"}}>SUBSCRIBE TO OUR NEWSLETTER</h3>
          
           <input id='subinput' style={{ backgroundColor: "#4FA095",color:"#fff",width:"250px" }} placeholder="Enter your Email here" type="email" /> <a style={{
          position: "relative",
          top: "10px", color: "#fff",left:"-60px"
        }} href="#"><AiOutlineArrowRight /></a> </div>
      </div>
    </div>
  )

}
