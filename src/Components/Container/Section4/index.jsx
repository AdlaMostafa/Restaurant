import React, { Component } from 'react'
import './style.css'
import one from '../../../Images/1.png'
import two from '../../../Images/2.png'
import three from '../../../Images/3.png'
import four from '../../../Images/4.png'
import five from '../../../Images/5.png'
import six from '../../../Images/6.png'
export default class Section4 extends Component {
  render() {
    return (
      <div id='menu3'>
        <div className='Section4'>
        <div className='title4'>
       <h1>Straight From Kitchen</h1>
          </div>
          <div className='menu'>
            <p>Our Menu</p>
          </div>
          <div className='left4'>
       <div className='leftimages'>
        <img src={one} alt=''/>
        <img src={two} alt=''/>
        <img src={three} alt='' />
        <img src={four} alt=''/>
        <img src={five} alt=''/>
        <img src={six} alt=''/>
        </div>
        <div className='lefttext'>
          <div className='first'>
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className='second'>
          <h1>Vivamus sodales augue vita</h1>
          <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className='third'>
          <h1>Pellentesque semper semper</h1>
          <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className='fourth'>
          <h1>Vestibulum est turpis</h1>
          <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className='fifht'>
          <h1>Phasellus convallis maximus</h1>
          <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className='sixth'>
          <h1>Nullam elementum magna</h1>
          <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div class="container">
  <div class="lines">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>

  <div class="prices">
    <h1>RS_222</h1>
    <h1>RS_590</h1>
    <h1>RS_130</h1>
    <h1>RS_135</h1>
    <h1>RS_148</h1>
    <h1>RS_200</h1>
  </div></div>
</div>

<div className='right'>
       <div className='rightimages'>
        <img src={five} alt=''/>
        <img src={four} alt=''/>
        <img src={two} alt=''/>
        <img src={one} alt=''/>
        <img src={six} alt=''/>
        <img src={three} alt=''/>
        </div>
        <div className='righttext'>
          <div className='first'>
          <h1>Phasellus convallis maximus</h1>
          <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className='second'>
          <h1>Vestibulum est turpis</h1>
          <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className='third'>
          <h1>Vivamus sodales augue vita</h1>
          <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className='fourth'>
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className='fifht'>
          <h1>Nullam elementum magna</h1>
          <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className='sixth'>
          <h1>Pellentesque semper semper</h1>
          <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div class="rightcontainer">
  <div class="rightlines">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>

  <div class="rightprices">
    <h1>RS_148</h1>
    <h1>RS_135</h1>
    <h1>RS_590</h1>
    <h1>RS_222</h1>
    <h1>RS_200</h1>
    <h1>RS_130</h1>
  </div></div>
</div>
       </div>
       </div>
    )
  }
}
