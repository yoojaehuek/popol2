import React, { useState } from 'react';

const SongDetails = () => {
  const [showLyrics, setShowLyrics] = useState(false);

  const handleToggleLyrics = () => {
    setShowLyrics(!showLyrics);
  };

  const songDetails = {
    image: '이미지',
    artist: '가수 이름',
    composer: '작곡가 이름',
    title: '노래 제목',
    genre: '장르',
    lyrics: '노래 가사...',
  };

  return (
    <div className="song-details">
      <img src={songDetails.image} alt="노래 이미지" />
      <h2>{songDetails.artist}</h2>
      <p>작곡가: {songDetails.composer}</p>
      <p>제목: {songDetails.title}</p>
      <p>장르: {songDetails.genre}</p>
      <button onClick={handleToggleLyrics}>가사 보기</button>
      {showLyrics && <p>가사: {songDetails.lyrics}</p>}
    </div>
  );
};

export default SongDetails;
