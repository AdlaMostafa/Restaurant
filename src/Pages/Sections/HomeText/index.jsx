import React, { Component } from 'react'
import './style.css'
export default class HomeText extends Component {
  render() {
    return (
      <div>
            <div className="text-center">
                      <div className='t1'>WelcomeTo <br /></div> 
                  <div className='t2'>GoldenViewDine</div> 
            </div>
            <div className="under-textcenter">
                <p className='text2'>Explore the authentic vegan dishes with your friends and family</p>
            </div>
            <div className='button1'>
           <p className='read1'>Read more</p>
        </div>
      </div>
    )
  }
}
