import React from 'react';
import useAsync from '../customHook/useAsync';
import axios from 'axios';
import { API_URL } from '../config/contansts';
import { NavLink } from 'react-router-dom';

import AudioPlayer from 'react-modern-audio-player'; 
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'; //플리 아이콘
import DownloadIcon from '@mui/icons-material/Download'; // 다운로드 아이콘

const Music = ({music}) => {
	console.log("music:", music);

  const playList = [
    {
      name: music.name,
      writer: music.singer,
      img: music.imageUrl,
      src: "http://localhost:8081/upload/music/Roie Shpigler - Aluminum.mp3",
      id: music.id,
    },
  ]

	// const id = amount.amount.id;
	// const getAmount = async () => {
	// 	const res = await axios.get(`${API_URL}/amounts/${id}`);
	// 	return res.data;
	// }

	// const [state ] = useAsync(getAmount, []);
  //   const { loading, data:detailAmount, error} = state; //state구조분해 
  //   if(loading) return <div>로딩중 ......</div>
  //   if(error) return <div>에러가 발생했습니다.</div>
  //   if(!detailAmount){
  //       return <div>로딩중입니다.</div>
  //   }
	// 	const tempprice = Number(detailAmount.price);
	// 	// console.log(typeof(tempprice)); 타입 알고싶으면 typeof

  return(
    <>
      {/* {music.musicUrl} */}
      {/* <AudioPlayer playList={[
          {
            name: music.name,
            writer: music.singer,
            img: music.imageUrl,
            src: music.musicUrl,
            id: music.id,
          },
        ]} 
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
      </AudioPlayer> */}
      <audio src={music.musicUrl} controls></audio>
    </>
  )
}

export default Music;