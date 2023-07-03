import React, { Component } from 'react'
import './style.css'
import Logo from '../../../Images/Logo.png'
import Insta from '../../../Images/Insta.png'
import Twitter from '../../../Images/twitter.png'
import YouTube from '../../../Images/youtube.png'
import Email from '../../../Images/email.png'
import Address from '../../../Images/address.png'
import Phone from '../../../Images/phone.png'
export default class Section10 extends Component {
  render() {
    return (
      <div>
        <div className='Section10'>
            <div className='right'>
               <div className='top'>
                <img src={Logo} alt="" />
                <h1>Golden View Dine</h1>
               </div>
               <div className='cen'>
                       <p> Lorem ipsum dolor sit Amet <br />
                        consectetur adipisicing Elit. <br />
                        Sollicitudin</p>
               </div>
               <div className='bottom'>
               <div className='out'> <div className='ti'><img src={Insta} alt="" /></div></div>
               <div className='out'><div className='ti'><img src={Twitter} alt="" /></div></div>
               <div className='out'><div className='ti'><img src={YouTube} alt="" /></div></div>
               </div>
            </div>
            <div className='center'>
             <h1>Other Links</h1>
             <ul className="ul-structure">
            <li>Privacy policy</li>
            <li>Terms & Conditions</li>
            <li>Blogs</li>
            <li>Our Team</li>
            <li>Our Kitchen</li>
        </ul>
            </div>
            <div className='left'>
             <h1>Contact Us</h1>
             <div className='top'>
                <img src={Email} alt="" />
                <p>Gogreendineservice@gmail.com</p>
             </div>
             <div className='cen'>
                <img src={Address} alt="" />
                <p>AZ complex bylane3 Mandari Rd <br />
                  Mumbai 1100867 </p>
             </div>
             <div className='bottom'>
                <img src={Phone} alt="" />
                <p>+1800 287 256</p>
             </div>
            </div>
        </div>
      </div>
    )
  }
}
