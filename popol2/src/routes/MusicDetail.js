import React, { useState } from 'react';
import { useLocation  } from 'react-router-dom';
import '../scss/musicsdetail.scss';

const MusicDetails = () => {
  const location = useLocation();
	const { state } = location;
  console.log("MusicDetails state: ",state);
  const [showLyrics, setShowLyrics] = useState(false);

  const handleToggleLyrics = () => {
    setShowLyrics(!showLyrics);
  };

  return (
    <div className="song-details">
      <div id='detail-out'>
        <img src={state.music.imageUrl} alt="노래 이미지"/>
        <div id='details-in'>
          <h1> {state.music.name}</h1>
          <p>작곡가: {state.music.composer}</p>
          <p>가수: {state.music.singer}</p>
          <p>장르: {state.music.kind}</p>
        </div>
      </div>
      <div id='lyrics'>
        {/* <button onClick={handleToggleLyrics}>가사 보기</button> */}
        {/* {showLyrics && } */}
        <h2>가사</h2>
        <p> {state.music.lyrics}</p>
      </div>
    </div>
  );
};

export default MusicDetails;
