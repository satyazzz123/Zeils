
import { useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import AOS from 'aos';
import Background from './Background';

import Navbar1 from './Navbar1';

import Contact from './Contact';
import Resort from './Resort';



export default function Home() {
  return (
    <div style={{height:"100px"}}>
    <Navbar1 />
    <Background/>
    <Resort/>
    <Contact/>
    
  
    
    </div>
  )
}
