import React, { Component } from 'react';
import './style.css';
import DivContainer from './DivContainer';
import Fresh from '../../../Images/orange-juice (1) 1.png';
import Chef from '../../../Images/chef 2.png';
import Dish from '../../../Images/Dishes.png';

const data = [
  {
    src: Fresh,
    title: 'Fresh Food',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras.',
    className: 'Fresh'
  },
  {
    src: Chef,
    title: 'skilled Chef',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras.',
    className: 'Chef'
  },
  {
    src: Dish,
    title: 'Exotic dishes',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras.',
    className: 'Dish'
  }
];

export default class Section3 extends Component {
  render() {
    // Filter out the parts without content
    const filteredData = data.filter(item => item.text.trim() !== '');

    return (
      <div id='special'>
        <div className='Section3'>
          <div className='title3'><h1>Special</h1></div>
          <div className='question'><p>What Makes Us Special</p></div>
          <div className='Section3Container'>
            {filteredData.map((item, index) => (
              <DivContainer
                key={index}
                src={item.src}
                title={item.title}
                text={item.text}
                className={item.className}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
