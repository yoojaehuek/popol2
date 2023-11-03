import React, { useState } from 'react';
import { useLocation  } from 'react-router-dom';

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
      <img src={state.music.imageUrl} alt="노래 이미지" style={{height: "100px", width: "100px"}}/>
      <h2>{state.music.singer}</h2>
      <p>작곡가: {state.music.composer}</p>
      <p>제목: {state.music.name}</p>
      <p>장르: {state.music.kind}</p>
      <button onClick={handleToggleLyrics}>가사 보기</button>
      {showLyrics && <p>가사: {state.music.lyrics}</p>}
    </div>
  );
};

export default MusicDetails;
