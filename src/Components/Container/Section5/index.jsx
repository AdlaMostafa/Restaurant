import React, { Component } from 'react'
import './style.css'
import topping from '../../../Images/topping.png'
// const TOP='.//../../../Images/topping.png'
export default class Section5 extends Component {
  render() {
    return (
      <div>
        <div className='Section5'>
          <div className='righttop'>
            <img src={topping} alt="" />
          </div>
          <div className='centrepar'>
             <div className='title'>
                <p>Come join us for a lunch <br />
                    this weekend and enjoy</p>
             </div>
             <div className='price'>
                <p>FLAT 10% OFF</p>
             </div>
             <div className='BookButton'>
                <p>Book Table</p>
             </div>
          </div>
          <div className='lefttop'>
            <img src={topping} alt="" />
          </div>
        </div>
      </div>
    )
  }
}
