
import { MdBeachAccess } from 'react-icons/md';
import { GrGallery } from 'react-icons/gr';
import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";


export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const change=function(){
    if(isDarkMode===false){
      setIsDarkMode(true)
      let a=document.getElementById('grid')
      a.style.backgroundColor="black"
    }
    else{
      setIsDarkMode(false)
      let a=document.getElementById('grid')
      a.style.backgroundColor="white"
    }
  }
  return (
    <div>

 <div className="navbar">
        <li className='navli'> <a  className='nava' id='icon1' href="/"> <MdBeachAccess/>{`    Home`}</a></li>
        
        <li className='navli'> <a  className='nava' id='icon2'  href="/gallery"><MdBeachAccess/>{`    Gallery`}</a></li>
        <li className='navli'> <a  className='nava' id='icon3' href=""><MdBeachAccess/>{`    Destinations`}</a></li>
        <li className='navli'> <a  className='nava' id='icon4' href="/vacation"><MdBeachAccess/>{`    Vacation`}</a></li>
        <li className='navli'> <a className='nava1'  id='icon5' href=""><span id='one'>Travels</span><span id='two'>Go</span></a></li>
       
      </div>
    </div>
  )
}
