import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { CgMenu } from 'react-icons/cg';
import { MdBeachAccess } from 'react-icons/md';
import { Link } from 'react-router-dom';
import menuicon from '../logos/Vector 2.png'

export default function Navbar1() {

  return (
    <div id='heloo' >
         <Menu className='bm-icon' width={ '280px' } customBurgerIcon={ <img id='borgir' style={{filter: "invert(100%)"}} src={menuicon} /> }  >
        <a id="home" className="menu-item" href="/"> {`    Home`}</a>
        <Link id="gallery" className="menu-item" to="/gallery">{`    Gallery`}</Link>
        <a id="vacation" className="menu-item" href="/vacation">{`    Vacation`}</a>
        <li className='navli'> <a className='nava1'  id='icon51' href="/"><span id='zeil' style={{fontFamily:'qi',color:"white",textDecoration:"none"}}>Zeils</span></a></li>
        
      </Menu>
    </div>
  )
}
