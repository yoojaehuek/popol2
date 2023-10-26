import React from "react";
import axios from 'axios';
import useAsync from "../customHook/useAsync";
import { API_URL } from "../config/contansts";
import '../scss/Musics.scss';
import AudioPlayer, {
  ActiveUI,
  InterfaceGridTemplateArea,
  PlayerPlacement,
  PlayListPlacement,
  ProgressUI,
  VolumeSliderPlacement
} from 'react-modern-audio-player';

const playList = [
  {
    name: 'name',
    writer: 'writer',
    img: 'http://localhost:8081/upload/image/pexels-andrea-piacquadio-3791664.jpg',
    src: 'http://localhost:8081/upload/music/Roie Shpigler - Aluminum.mp3',
    id: 1,
  },
]

const Musics = () => {
  
  //전체곡 조회함수
  const getMusics = async () => {
    await axios.get(`${API_URL}/music`);
  }
  return(
    <>
      <h1>로그인 후 메인입니다.</h1>
      <button onClick={getMusics}>서버 로그 확인</button>
    
      <AudioPlayer playList={playList} activeUI={{
          all: true,
          progress: "bar",
          placement:{
            
            VolumeSliderPlacement : "top",
          },
        }}/>
      <AudioPlayer playList={playList} activeUI={{
          all: true,
          progress: "bar",
          placement:{
            
            VolumeSliderPlacement : "top",
          },
        }}/>
      <AudioPlayer playList={playList} activeUI={{
          all: true,
          progress: "bar",
          placement:{
            
            VolumeSliderPlacement : "top",
          },
        }}/>
      <AudioPlayer playList={playList} activeUI={{
          all: true,
          progress: "bar",
          placement:{
            
            VolumeSliderPlacement : "top",
          },
        }}/>
      <AudioPlayer playList={playList} activeUI={{
          all: true,
          progress: "bar",
          placement:{
            
            VolumeSliderPlacement : "top",
          },
        }}/>
    </>
  )
}

export default Musics;