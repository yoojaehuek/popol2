import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../scss/Musicdetail.scss'
import { API_URL } from '../config/contansts';
import axios from "axios";
import { getCookie, removeCookie } from "../cookie";
import { useNavigate } from 'react-router-dom';

const MusicDetails = (props) => {
  // 현재 페이지의 location 정보를 가져옴
  const location = useLocation();
  // location에서 전달된 state를 추출
  const { state } = location;
  console.log("state: ", state);

  const navigate = useNavigate();
  
  // 가사 보기 상태를 관리하는 상태 변수 및 토글 함수
  const [showLyrics, setShowLyrics] = useState(false);

  // 가사 보기 버튼을 클릭했을 때 호출되는 함수
  const handleToggleLyrics = () => {
    // showLyrics 상태를 토글하여 가사를 표시하거나 숨김
    setShowLyrics(!showLyrics);
  };

  const addPlayList = async () => {
    const login = getCookie('accessToken');
    if (getCookie('accessToken') != null) {
      await axios({
        url: `${API_URL}/api/playlist`,
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + login
        },
        data: {
          playList: state.music,
        }
      })
      .then(() => {
        alert("추가되었습니다!");
      })
      .catch(err => {
        console.error(err);
      });
    }else {
      alert('다시 로그인해주세요');
      removeCookie('accessToken');
      navigate('/');
    }
  }

  const handleDownload = (music) => {
    // URL에서 GET 요청 보내기
    axios({
      url: `${API_URL}/mp3`,
      method: 'GET',
      responseType: 'blob', // Set the expected response type to Blob
      params: { url: music.musicUrl }
    })
    .then((response) => {
      console.log(response);
      const blob = new Blob([response.data], { type: 'audio/mpeg' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');

      // 생성한 URL과 다운로드할 파일명 설정
      link.setAttribute('href', url);
      link.setAttribute('download', `${music.name}.mp3`);

      // 링크를 문서(body)에 추가
      document.body.appendChild(link);

      // 링크 클릭 => 파일 다운로드
      link.click();

      // 다운로드 후 링크와 URL을 정리
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error('Error during file download:', error);
    });
  };

  // 음악 상세 정보를 화면에 렌더링
  return (
    <div className='song-main'>
      {/* <Listb/> */}
      <div className="song-details">
        <div id='detail-out'>
          {/* 음악 이미지 표시 */}
          <img src={API_URL+state.music.imageUrl} alt="노래 이미지" />
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
            <button onClick={() => {props.onMusic(state.music)}}>재생 아이콘</button>
            <button onClick={addPlayList}>플리 아이콘</button>
            <button onClick={() => handleDownload(state.music)}>다운로드 아이콘</button>
        <div id='lyrics'>
          <h2>가사</h2>
          <p> {state.music.lyrics}</p>
        </div>
      </div>
    </div>
  );
};

export default MusicDetails;
