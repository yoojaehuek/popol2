import React from "react";
import AudioPlayer from "react-modern-audio-player";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import DownloadIcon from "@mui/icons-material/Download";
import axios from "axios";
import { API_URL } from "../config/contansts";
import { getCookie, removeCookie } from "../cookie";
import { NavLink, useNavigate } from 'react-router-dom';

const CustomAudioPlayer = ({ playList }) => {
  const navigate = useNavigate();

  const addPlayList = async () => {
    const login = getCookie('accessToken');
    if (getCookie('accessToken') != null) {
      // await axios.post(`${API_URL}/api/playlist`, { playList: playList[0], cookie});
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
    }else {
      alert('다시 로그인해주세요');
      removeCookie('accessToken');
      navigate('/');
    }
  }

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
          <DownloadIcon />
        </button>
        <button onClick={addPlayList}>
          <PlaylistAddIcon />
        </button>
      </AudioPlayer>
    </div>
  );
};

export default CustomAudioPlayer;
