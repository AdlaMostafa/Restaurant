import React, { Component } from 'react';
import Reactangle from '../Reactangle';
import HomeText from '../HomeText';
import open1 from '../../../Images/open1.png';

export default class FirstPage extends Component {
  render() {
    return (
      <div>
        <div className='FirstPage'>
          <div className='openimg'>
            <img src={open1} alt="" />
            <div className='shad'>
              <Reactangle />
              <HomeText />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
