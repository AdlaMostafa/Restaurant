import React from 'react';
import './style.css';

class DivContainer extends React.Component {
  render() {
    const { src, title, text, className } = this.props;
    
    return (
      <div className='parts'>
        <div className={className}>
          {src && <img src={src} alt={title} />}
          <div className='titleh1'>
            <h1>{title}</h1>
          </div>
          <div className='textp'>
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DivContainer;
