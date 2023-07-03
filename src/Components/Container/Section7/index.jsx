import React, { Component } from 'react';
import './style.css';
import left from '../../../Images/left.png';
import right from '../../../Images/right.png';
import center from '../../../Images/centre.png';

export default class Section7 extends Component {
  render() {
    return (
      <div className="Section7">
        <div className="container">
          <div className="leftgroup">
            <img src={left} alt="" />
            <div className="le">
              <h1>250+</h1>
              <p>Delicacy</p>
            </div>
          </div>
          <div className="centergroup">
            <img src={center} alt="" />
            <div className="cen">
              <h1>10+</h1>
              <p>renownedchefs</p>
            </div>
          </div>
          <div className="rightgroup">
            <img src={right} alt="" />
            <div className="ri">
              <h1>30+</h1>
              <p>Members</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
