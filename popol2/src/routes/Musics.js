import React, { useState } from "react";
import axios from 'axios';
import useAsync from "../customHook/useAsync";
import { API_URL } from "../config/contansts";
import '../scss/Musics.scss';
import Music from "./Music";

import AudioPlayer from 'react-modern-audio-player'; 
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'; //플리 아이콘
import DownloadIcon from '@mui/icons-material/Download'; // 다운로드 아이콘



const Musics = () => {
  const getMusics = async () => {
    const res = await axios.get(`${API_URL}/musics`)
    console.log("res.data:", res.data);
    return res.data;
  }

  const [state ] = useAsync(getMusics, []);
  const { loading, data:musics, error} = state; //state구조분해 
  if(loading) return <div>로딩중 ......</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!musics){
      return <div>로딩중입니다.</div>
  }

  return(
    <>
      <h1>로그인 후 메인입니다.</h1>
      {/* {musics.map(music => <Music key={music.id} music={music}></Music>)} */}
      {musics.map(music => <audio src={music.musicUrl} controls></audio>)}

      <AudioPlayer playList={
          [
            {
              name: "music.name",
              writer: "music.singer",
              img: "music.imageUrl",
              src: `${API_URL}/upload/music/RoieShpigler-Aluminum.mp3`,
              id: 1,
            },
          ]
        } 
        activeUI={{ // 넣을 버튼 설정
          playButton: true, //재생 버튼
          playList: false, //플레이리스트 버튼
          prevNnext: false, // 이전/다음 버튼
          volume: true, //소리 킴/끔
          volumeSlider: false, //볼륨 조정
          repeatType: true, //무한재생
          trackTime: true, //음악 시간
          trackInfo: true, //음악 이름, 설명
          artwork: true, //이미지
          progress: "bar", //재생 바
        }}
        placement={{
          // VolumeSliderPlacement : "top",
          interface:{
            templateArea: {
              artwork: "row1-1",
              trackInfo: "row1-2",
              playButton: "row1-3",
              trackTimeCurrent: "row1-4",
              trackTimeDuration: "row1-5",
              progress: "row1-6",
              repeatType: "row1-7",
              volume: "row1-8",
            }
          }
        }}
        >
        <button><DownloadIcon/></button>
        <button><PlaylistAddIcon/></button>
      </AudioPlayer>
    </>
  )
}

export default Musics;