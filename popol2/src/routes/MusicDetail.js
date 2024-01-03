import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Button } from '@mui/material'; // Material-UI 컴포넌트 가져오기
import '../scss/Musicdetail.scss';
import { API_URL } from '../config/contansts';
import axios from 'axios';
import { getCookie, removeCookie } from '../cookie';
import { useNavigate } from 'react-router-dom';

const MusicDetails = (props) => {
  const location = useLocation();
  const { state } = location;
  console.log('state: ', state);

  const navigate = useNavigate();

  const [showLyrics, setShowLyrics] = useState(false);

  const handleToggleLyrics = () => {
    setShowLyrics(!showLyrics);
  };

  const addPlayList = async () => {
    const login = getCookie('accessToken');
    if (getCookie('accessToken') != null) {
      await axios({
        url: `${API_URL}/api/playlist`,
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + login,
        },
        data: {
          playList: state.music,
        },
      })
        .then(() => {
          alert('추가되었습니다!');
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert('다시 로그인해주세요');
      removeCookie('accessToken');
      navigate('/');
    }
  };

  const handleDownload = (music) => {
    axios({
      url: `${API_URL}/mp3`,
      method: 'GET',
      responseType: 'blob',
      params: { url: music.musicUrl },
    })
      .then((response) => {
        console.log(response);
        const blob = new Blob([response.data], { type: 'audio/mpeg' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');

        link.setAttribute('href', url);
        link.setAttribute('download', `${music.name}.mp3`);

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Error during file download:', error);
      });
  };

  return (
    <div className="song-main">
      <div className="song-details">
        <div id="detail-out">
          <img src={API_URL + state.music.imageUrl} alt="노래 이미지" />
          <div id="details-in">
            <h2>{state.music.name}</h2>
            <Typography variant="body1">가수: {state.music.singer}</Typography>
            <Typography variant="body1">작곡가: {state.music.composer}</Typography>
            <Typography variant="body1">장르: {state.music.kind}</Typography>
            <Button onClick={() => props.onMusic(state.music)}>재생 아이콘</Button>
            <Button onClick={addPlayList}>플리 아이콘</Button>
            <Button onClick={() => handleDownload(state.music)}>다운로드 아이콘</Button>
          </div>
        </div>
        <div id="lyrics">
          <h2 style={{marginTop:'50px', borderTop:"solid 1px gray", paddingTop:'30px'}}>가사</h2>
          {showLyrics && (
            <Typography variant="body2" style={{ whiteSpace: 'pre-line' }}>
              {state.music.lyrics}
            </Typography>
          )}
          <Button onClick={handleToggleLyrics}>
            {showLyrics ? '가사 숨기기' : '가사 보기'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MusicDetails;
