import React, { useState } from "react";
import axios from 'axios';
import useAsync from "../customHook/useAsync";
import { API_URL } from "../config/contansts";
import { NavLink} from 'react-router-dom';
import '../scss/Musics.scss';
import AudioPlayer from 'react-modern-audio-player'; 
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import DownloadIcon from '@mui/icons-material/Download';
import Listb from "./listbar";



const Musics = () => {
  const [playList, setPlayList] = useState(
    [
      {
        name: "오늘 뭐 듣지?",
        writer: "재생 버튼을 클릭해보세요",
        img: "images/defaultMusicImg.png",
        src: `${API_URL}/upload/music/RoieShpigler-Aluminum.mp3`,
        id: 1,
      },
    ]
  );

  const onMusic = (e) => {
    // e.preventDefault();
    // console.log(e.target.value);
    console.log(e.target.dataset);
    setPlayList(
      [
        {
          name: e.target.dataset.name,
          writer: e.target.dataset.singer,
          img: e.target.src,
          src: e.target.dataset.musicurl,
          id: 1,
        },
      ]
    )
  }
  
  //전체곡 조회함수
  const getMusics = async () => {
    const res = await axios.get(`${API_URL}/musics`)
      // .then(() => {
      //   // alert("음악 전체 조회 성공.");
      //   console.log("조회성공 res데이터: ",res.data);
      // })
      // .catch(err => {
      //     console.error("음악 불러오기 에러: ", err);
      // });
    console.log("res.data:", res.data);
    return res.data;
  }

  const [state] = useAsync(getMusics, []);
  const { loading, data:musics, error} = state; //state구조분해 
  if(loading) return <div>로딩중 ......</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!musics){
      return <div>로딩중입니다.</div>
  }


  return(
    <>
    <Listb/>
    <div id="musicsC">
      <h1>투데이</h1>
      {/* {musics.map(music => <Music key={music.id} music={music}></Music>)} */}
      {/* {musics.map(music => <audio src={music.musicUrl} controls></audio>)} */}
      
      <div id="musics-grid">
        {musics.map(music => 
          <div key={music.id} className="musicItems">
            <img data-singer={music.singer} data-musicurl={music.musicUrl} data-name={music.name} 
            data-id={music.id} onClick={onMusic} src={music.imageUrl} alt="" className="musicImg" />
            <div id="singer-name">
              <NavLink to="/detail" id={music.name}>{music.name}</NavLink><br/>
              <NavLink to="/detail" id={music.singer}>{music.singer}</NavLink>
            </div>
          </div>
        )}
      </div>

      {console.log(playList)}
      </div>
      {
        playList.name === "music.name" ? <></> : 
      
        <AudioPlayer playList={playList}
          // audioInitialState={{
          //   muted: true,
          //   volume: 0.2,
          //   curPlayId: 1,
          // }}
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
            },
            player: "bottom",
          }}
          >
          <button><DownloadIcon/></button>
          <button><PlaylistAddIcon/></button>
        </AudioPlayer>
      }

</>
  )
}

export default Musics;