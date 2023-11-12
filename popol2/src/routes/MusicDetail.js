import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../scss/Musicdetail.scss'
import Listb from './Listbar';

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
    <div className='song-main'>
      <Listb/>
      <div className="song-details">
        <div id='detail-out'>
          {/* 음악 이미지 표시 */}
          <img src={state.music.imageUrl} alt="노래 이미지" />
          <div id="details-in">
            {/* 가수 정보 표시 */}
            <h2>{state.music.singer}</h2>
            {/* 작곡가 정보 표시 */}
            <p>작곡가: {state.music.composer}</p>
            {/* 제목 정보 표시 */}
            <p>제목: {state.music.name}</p>
            {/* 장르 정보 표시 */}
            <p>장르: {state.music.kind}</p>
          </div>
        </div>
        <div id='lyrics'>
          <h2>가사</h2>
          <p> {state.music.lyrics}</p>
        </div>

        {/* {showLyrics && <p style={{paddingTop:'2vw'}}>가사: {state.music.lyrics}</p>} */}
      </div>
    </div>
  );
};

export default MusicDetails;
