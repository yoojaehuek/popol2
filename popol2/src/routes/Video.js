import React from 'react';
import Slider from './Slider2';
import Slider2 from './Slider3';
import Slider3 from './Slider4';
import '../scss/video.scss'

const Video = () => {

  return (
    <div className="video-container">
      <div className='video-main'>
        <video className='video' autoPlay loop muted>
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="video-text">
          <h1>이젠 음악을 다양하게 감상해보세요.</h1>
          <span className="arrow">↓</span>
        </div>
        <Slider/>
        <Slider2/>
        <Slider3/>
      </div>
    </div>
  );
}

export default Video;