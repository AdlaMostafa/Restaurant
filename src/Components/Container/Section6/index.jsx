import React, { Component } from 'react'
import './style.css'
import man from '../../../Images/man.png'
export default class Section6 extends Component {
  render() {
    return (
      <div>
        <div className='Section6'>
            <div className='left'>
                <div className='title'><h1>Cooking ingredients</h1></div>
                <div className='question'><p>What Goes in</p></div>
                <div className='text'><p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                     elit. Sollicitudin hendrerit a amet viverra. Nunc <br />
                     pretium in amet at mattis cras. Quisque commodo <br />
                     mattis ornare a nec odio. Pulvinar orci, egestas <br />
                     eget nulla duis at iaculis nunc, elit. Nibh auctor<br />
                      purus nunc tellus pellentesque nibh mattis. Malesuada<br />
                       integer nulla orci convallis sit. At libero lacus,<br />
                        eget fermentum sed turpis curabitur donec consectetur.<br />
                         Imperdiet aliquam quam mauris semper suscipit.</p></div>
                         <div className='ReadButton'>
                <p>Read more</p>
             </div>
            </div>
            <div className='right'>
               <img src={man} alt="" />
            </div>
        </div>
      </div>
    )
  }
}
