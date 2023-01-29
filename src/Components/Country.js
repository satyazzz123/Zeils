import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Navbar1 from './Navbar1';
const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1591017403321-dc264d1fd6e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      caption: 'Break free from being a potato couch get on an adventure like never before'
    },
    {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
      caption: 'Witness breath-taking views wth us experience what our planet has to offer'
    },
    {
      url: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
      caption: 'Be one with nature Visit our tourist attractions    '
    },
  ];

export default function Country() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
       
        navigate('/vacation1');
      }

  return (
    <div>
    <Navbar1/>
<div className="top" >

<div style={{width:"100%",height:"600px"}} className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div s id='slid' style={{'backgroundImage': `url(${slideImage.url})`,backgroundRepeat:"no-repeat",  backgroundSize:"cover"}}>
                <div id='cap'>{slideImage.caption}</div>
              </div>
            </div>
          ))} 
        </Slide>
      </div>


</div>

<div id='aus' className="country">
    <div className="over">Visit Australia with Zeil's    <button onClick={routeChange} id='firstbtn' className="travel_cont">Book now</button></div>
</div>
<div id='mal' className="country">
<div className="over">Visit Maldives with Zeil's   <button onClick={routeChange} className="travel_cont">Book now</button></div>
</div>
<div id='bal' className="country">
<div className="over">Visit Bali with Zeil's   <button onClick={routeChange} id='th3' className="travel_cont">Book now</button></div>
</div>
<div id='ind' className="country">
<div className="over">Visit Indonesia with Zeil's    <button onClick={routeChange} id='th4' className="travel_cont">Book now</button> </div>
</div>

    </div>
  )
}
