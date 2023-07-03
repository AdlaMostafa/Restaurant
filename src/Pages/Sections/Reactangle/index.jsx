import React, { Component } from 'react'
import './style.css'
import Searchicon from './search-interface-symbol (1).png'
import line from '../../../Images/line.png'
import Logo from '../../../Images/Logo.png'
export default class Reactangle extends Component {
  render() {
    return (
      <div id='home'>
        <div className='recparent'>
        <div className='rectangle'>
            <div className='resticon'>
                <img src={Logo} alt="" />
            </div>
            <div className='anchors'>
                <a href='#home'>Home</a>
                <a href='#aboutus'>About Us</a>
                <a href='#special'>Special</a>
                <a href='#menu3'>Menu</a>
                <a href='#Blogs'>Blogs</a>
                <div className='Searchicon'>
                <img src={Searchicon} alt="" />
                </div>
            </div>
            <div className='Book'>
            <img src={line} alt="" />
                <div className='BookNow'><p>Book Now</p></div>
               <div className='image2'>
                <img src={line} alt="" /></div> 
            </div>
        </div>
      </div>
      </div>
    )
  }
}

