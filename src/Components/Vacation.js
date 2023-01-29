import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Select from 'react-dropdown-select';
import { BsCreditCard2BackFill } from 'react-icons/bs';
import { TbDiscount2 } from 'react-icons/tb';
import { BsBank2 } from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation'

export default function Vacation() {
  const options1 = [
    {
      value: 1,
      label: "London"
    },
    {
      value: 2,
      label: "Washington"
    },
    {
      value: 3,
      label: "Ottawa"
    },
    {
      value: 4,
      label: "Rio de janero"
    },
    {
      value: 5,
      label: "Buenos Aires"
    },
    {
      value: 6,
      label: "Wellington"
    },
    {
      value: 7,
      label: "Delhi"
    },
    {
      value: 8,
      label: "Beijing"
    },
    {
      value: 9,
      label: "Tokyo"
    },
    {
      value: 10,
      label: "Moscow"
    }
  ];

  const options2 = [
    {
      value: 1,
      label: "Canberra, Australia"
    },
    {
      value: 2,
      label: "Jakarta, Indonesia"
    },
    {
      value: 3,
      label: "Malé, Maldives"
    },
    {
      value: 3,
      label: "Denpasar, Bali"
    }
  ];

  return (
    <div>
      <div className="video_gif">



      </div>
      <img style={{ width: "80%", height: "700px", opacity: "0.3", position: "absolute", top: "0px", left: "170px" }} src="https://i.pinimg.com/originals/d6/d1/e0/d6d1e0bbdd2eda8f44a2125154670e82.gif" alt="" />
      <div>
        <div className="vac_content">
          <div className="top" style={{ width: "70%", height: "500px", position: "relative", top: "50px", left: "282px", background: "rgba(0,0,0,0.25)", display: "flex" }}>
            <p id='book' style={{display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
              

              
            <p><h3>Payment Gateways</h3></p>
            <p> <button className='btn_travel'> <BsCreditCard2BackFill/> Debit-card</button></p>
            <p><button className='btn_travel'><BsCreditCard2BackFill/>   Credit-card</button></p>
            <p><button className='btn_travel'> <TbDiscount2/>     Special-Offers</button></p>
            <p><button className='btn_travel'>  <BsBank2/>  Net-banking</button></p>
            
            
            </p>





            <p style={{ display: "flex", justifyContent: "space-around", width: "100%", margin:"122px 0"}}>
          

              <div style={{ height: "20px" }}><Select id="sel" placeholder='select location you are coming from ' required={true} options={options1} style={{ fontFamily: "cursive", border: "2px solid black" }} /></div>

              <div style={{ height: "20px" }}><Select placeholder='select location you want to land ' required={true} options={options2} style={{ fontFamily: "cursive", border: "2px solid black" }} /></div>



            </p>



          </div>
          <p style={{  width: "60%", position: "relative", left: "422px", top: "-285px", height: "315px"}}>


            <h2 style={{ display:"flex",justifyContent:"center",borderBottom:"2px solid rgb(229, 211, 211)" }}>Our agencies</h2>
            <p id='grid' >
              <div style={{display:"flex",justifyContent:""}}>
                <img className='travel' src="data:image/png;base64,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" alt="" />
                <img className='travel' src="https://www.traveloindonesia.com/images/logo/1402974468!!-!!logo_indonesia.png" alt="Indonesia Tours" />
                <img className='travel' src="https://play-lh.googleusercontent.com/gIef9OsQlLPgRphyN6odRZlBKmrl-TUnTpuiwe-0OBJ3S_BcSsUf_qEVnlAKG_9UplE" alt="" />
                <img className='travel' src="https://seoagencychina.com/wp-content/uploads/2019/11/maldive-600x600.jpg" alt="" />
              </div>

            </p>


          </p>

        </div>
      </div>

    </div>
  )
}
