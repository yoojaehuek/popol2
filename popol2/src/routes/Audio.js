import React from "react";
import AudioPlayer from "react-modern-audio-player";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import DownloadIcon from "@mui/icons-material/Download";
import axios from "axios";
import { API_URL } from "../config/contansts";
import { getCookie, removeCookie } from "../cookie";
import { useNavigate } from 'react-router-dom';

const CustomAudioPlayer = ({ playList }) => {
  const navigate = useNavigate();

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
          playList: playList[0],
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

  // const formet_playlist = 

  const handleDownload = (music) => {
    // console.log(music.src.substr(21));
    // URL에서 GET 요청 보내기
    const formet_musicUrl = music.src.substr(21); // "http://localhost:3000"부분 자르기
    axios({
      url: `${API_URL}/mp3`,
      method: 'GET',
      responseType: 'blob', // Set the expected response type to Blob
      params: { url: formet_musicUrl }
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

  return (
    <div id="Audio">
      <AudioPlayer
        playList={playList}
        activeUI={{
          playButton: true,
          playList: false,
          prevNnext: false,
          volume: true,
          volumeSlider: false,
          repeatType: true,
          trackTime: true,
          trackInfo: true,
          artwork: true,
          progress: "bar",
        }}
        placement={{
          interface: {
            templateArea: {
              artwork: "row1-1",
              trackInfo: "row1-2",
              playButton: "row1-3",
              trackTimeCurrent: "row1-4",
              trackTimeDuration: "row1-5",
              progress: "row1-6",
              repeatType: "row1-7",
              volume: "row1-8",
            },
          },
          player: "bottom",
        }}
      >
        <button>
          <DownloadIcon onClick={() => {handleDownload(playList[0])}} />
        </button>
        <button onClick={addPlayList}>
          <PlaylistAddIcon />
        </button>
      </AudioPlayer>
    </div>
  );
};

export default CustomAudioPlayer;
