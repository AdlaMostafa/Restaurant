import React, { Component } from 'react';
import './style.css';
import rightimg from '../../../Images/right8.png';
import star from '../../../Images/star.png';
import centimg from '../../../Images/centre8.png';

export default class Section8 extends Component {
  render() {
    return (
      <div className='Section8'>
        <div className='title8'>
          <h1>Reviews</h1>
        </div>
        <div className='words8'>
          <p>Words from our food lovers</p>
        </div>
          <div className="slides-container">
            <div className='leftslide'>
              <div className="slide1">
                <div className='top1'>
                  <div className='Alex1'><img src={centimg} alt="" /></div>
                  <div className='name1'>
                    <p>AlexAndria</p>
                    <img src={star} alt="" />
                  </div>
                </div>
                <p className='text1'>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                  Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at<br />
                  mattis cras. Quisque commodo mattis ornare a nec odio.<br />
                  Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “
                </p>
              </div>
            </div>
            <div className="slide2">
              <div className='top'>
                <div className='Alex'><img src={centimg} alt="" /></div>
                <div className='name2'>
                  <p>AlexAndria</p>
                  <img src={star} alt="" />
                </div>
              </div>
              <p className='text'>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at<br />
                mattis cras. Quisque commodo mattis ornare a nec odio.<br />
                Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “
              </p>
            </div>
          </div>
          <div className='rightslide'>
          <div className="slide1">
                <div className='top1'>
                  <div className='right8'><img src={rightimg} alt="" /></div>
                  <div className='name1'>
                    <p>AlexAndria</p>
                    <img src={star} alt="" />
                  </div>
                </div>
                <p className='text2'>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                  Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at<br />
                  mattis cras. Quisque commodo mattis ornare a nec odio.<br />
                  Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “
                </p>
              </div>
          </div>
        </div>
    );
  }
}
