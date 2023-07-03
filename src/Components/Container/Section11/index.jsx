import React, { Component } from 'react'
import './style.css'
import Email from  '../../../Images/emial2.png'
export default class Section11 extends Component {
  render() {
    return (
      <div>
        <div className="Section11">
            <div className='left'>
                <img src={Email} alt="" />
                <p>Subscribe To Our Newsletter</p>
            </div>  
            <div className='centre'>
                <p>Your Email id</p>
            </div>  
            <div className='right'>
                <button>
                    <p>Subscribe</p> 
                </button>
            </div>   
        </div>
      </div>
    )
  }
}
