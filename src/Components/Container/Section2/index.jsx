import React, { Component } from 'react';
import paltes from '../../../Images/plates.png';
import './style.css';

export default class Section2 extends Component {
  render() {
    return (
      <div id='aboutus'>
        <div className='parent-container'>
          <div className='LeftContent'>
            <div className='about'>
              <p className='About'>About Us</p>
            </div>
            <div className='title'>
              <p>Discover the taste of world-class vegan dishes <br />
              from the kitchen of Go Green Dine</p>
            </div>
            <div className='content'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit. Sollicitudin hendrerit a amet viverra. Nunc pretium <br />
                in amet at mattis cras. Quisque commodo mattis ornare a nec <br />
                odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc,<br />
                elit. Nibh auctor purus nunc tellus pellentesque nibh mattis.<br />
                Malesuada integer consectetur. Imperdiet aliquam quam mauris semper <br />
                suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur<br />
                sit sagittis pretium eget vitae semper pellentesque pellentesque.</p>
            </div>
            <div className='button2'>
              <p className='read2'>Read more</p>
            </div>
          </div>
          <div className='RightContent'>
            <div className='paltes'>
              <img src={paltes} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
