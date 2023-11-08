import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const MusicDetails = () => {
  // 현재 페이지의 location 정보를 가져옴
  const location = useLocation();
  // location에서 전달된 state를 추출
  const { state } = location;
  
  // 가사 보기 상태를 관리하는 상태 변수 및 토글 함수
  const [showLyrics, setShowLyrics] = useState(false);

  // 가사 보기 버튼을 클릭했을 때 호출되는 함수
  const handleToggleLyrics = () => {
    // showLyrics 상태를 토글하여 가사를 표시하거나 숨김
    setShowLyrics(!showLyrics);
  };

  // 음악 상세 정보를 화면에 렌더링
  return (
    <div style={{backgroundColor:'black', width:'100%', height:'100%', color:'white'}}className="song-details">
      {/* 음악 이미지 표시 */}
      <img src={state.music.imageUrl} alt="노래 이미지" style={{ height: "30vw", width: "100%", marginBottom:'3vw' }} />
      {/* 가수 정보 표시 */}
      <h2>{state.music.singer}</h2>
      {/* 작곡가 정보 표시 */}
      <p style={{paddingBottom:'2vw'}}>작곡가: {state.music.composer}</p>
      {/* 제목 정보 표시 */}
      <p style={{paddingBottom:'2vw'}}>제목: {state.music.name}</p>
      {/* 장르 정보 표시 */}
      <p style={{paddingBottom:'2vw'}}>장르: {state.music.kind}</p>
      {/* 가사 보기 버튼 */}
      <button style={{color:'black'}}onClick={handleToggleLyrics}>가사 보기</button>
      {/* 가사를 표시하는 부분 (가사를 보여줄 때만 렌더링됨) */}
      {showLyrics && <p style={{paddingTop:'2vw'}}>가사: {state.music.lyrics}</p>}
    </div>
  );
};

export default MusicDetails;
