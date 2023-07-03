import React, { Component } from 'react'
import './style.css'
import left9 from '../../../Images/left9.png'
import right9 from '../../../Images/right9.png'
import center9 from '../../../Images/center9.png'
export default class Section9 extends Component {
  render() {
    return (
      <div id='Blogs'>
           <div className ="Section9">
            <div className='title9'>
                <h1>Blogs</h1>
            </div>
            <div className='text9'>
                <p>words from our food lovers</p>
                </div>
                <div className='container9'>
                  <div className='left9'>
                   <img src={left9} alt="" />
                   <div className='lefttext'>
                    <h1>Cooking Dining Experience</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur 
                     adipiscing elit. Sollicitudin </p>
                     <div className='read'>
                    <p>Read more</p>
                        </div>
                   </div>
                </div>

                <div className='center9'>
                   
                   <div className='centertext'>
                    <h1>Cooking Dining Experience</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur 
                     adipiscing elit. Sollicitudin </p>
                     <div className='read'>
                    <p>Read more</p>
                        </div>
                   </div>
                   <img src={center9} alt="" />
                </div>

                <div className='right9'>
                   <img src={right9} alt="" />
                   <div className='righttext'>
                    <h1>Cooking Dining Experience</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur 
                     adipiscing elit. Sollicitudin </p>
                     <div className='read'>
                    <p>Read more</p>
                        </div>
                   </div>
                </div>
                </div>
                
           </div>
      </div>
    )
  }
}
