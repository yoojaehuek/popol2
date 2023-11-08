import React, { useState } from "react";
import axios from "axios";
import useAsync from "../customHook/useAsync";
import { API_URL } from "../config/contansts";
import { NavLink } from "react-router-dom";
import "../scss/Musics.scss";
import AudioPlayer from "react-modern-audio-player";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd"; //플리 아이콘
import DownloadIcon from "@mui/icons-material/Download"; // 다운로드 아이콘
import Listb from "./Listbar";
import { CssBaseline, Container, Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CustomAudioPlayer from "./Audio";
import Footer from './Footer';

const MainContent = styled("div")({
  flexGrow: 1,
  padding: 20,
});

const PlaylistItem = styled(Box)({
  // border: '1px solid #ccc',
  padding: "20px",
  borderRadius: "8px",
  margin: "10px",
  textAlign: "center",
  position: "relative",
  "&:hover .play-icon": {
    opacity: 1,
  },
  "&:hover img": {
    opacity: 0.8,
  },
});
const PlaylistImage = styled("img")({
  marginBottom: "10px",
  width: "80%",
  transition: "opacity 0.3s ease",
});

const PlayIcon = styled(PlayArrowIcon)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  opacity: 0,
  transition: "opacity 0.3s ease",
});


const Musics = () => {
  const [playList, setPlayList] = useState([
    {
      name: "오늘 뭐 듣지?",
      writer: "재생 버튼을 클릭해보세요",
      img: "images/defaultMusicImg.png",
      src: `${API_URL}/upload/music/RoieShpigler-Aluminum.mp3`,
      id: 1,
    },
  ]);

  // 음악을 클릭했을 때 재생목록에 추가하는 함수
  const onMusic = (e) => {
    // e.preventDefault();
    // console.log(e.target.value);
    console.log(e.target.dataset);
    setPlayList([
      {
        name: e.target.dataset.name,
        writer: e.target.dataset.singer,
        img: e.target.src,
        src: e.target.dataset.musicurl,
        id: 1,
      },
    ]);
  };

  //전체곡 조회함수
  const getMusics = async () => {
    const res = await axios.get(`${API_URL}/musics`);
    // .then(() => {
    //   // alert("음악 전체 조회 성공.");
    //   console.log("조회성공 res데이터: ",res.data);
    // })
    // .catch(err => {
    //     console.error("음악 불러오기 에러: ", err);
    // });
    console.log("res.data:", res.data);
    return res.data;
  };

  const [state] = useAsync(getMusics, []);
  const { loading, data: musics, error } = state; //state구조분해
  if (loading) return <div>로딩중 ......</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!musics) {
    return <div>로딩중입니다.</div>;
  }

  return (
    <div style={{ display: "flex", backgroundColor: 'black' }}>
      <Listb />
      <MainContent>
        <h1 style={{ color: 'white' }}>투데이</h1>
        <div style={{border:'solid 1px black', padding:'2vw', backgroundColor:'purple'}}>
        <img style={{objectFit:'cover', width:'10vw', height:'auto', float:'left', marginRight:'5vw'}}src="./images/Gear.png"></img>
        <h1>다시 엔진을 켜는, 임헌성</h1>
        <h3 style={{paddingTop:'2vw'}}>2차 프로젝트엔 임헌성의 풀스택 챕터를 향해 시동을 거는 듯한 MusicHub 프로젝트 외에도 여러 기술과 새로운 장르의 도전까지,<br/>
        다양한 컬러로 채운 성숙한 변신이 가득한다. 팬덤을 생각하며 항상 엔진을 켜두는 임헌성의 또 다른 출발</h3>
        </div>
        <h2 style={{ color: 'white' }}>VIBE 추천 플레이리스트</h2>
        <Grid container spacing={2}>
          {musics.map((music) => (
            <Grid item xs={12} sm={6} md={3} key={music.id}>
              <PlaylistItem>
                <PlaylistImage
                  src={music.imageUrl}
                  data-singer={music.singer}
                  data-musicurl={music.musicUrl}
                  data-name={music.name}
                  data-id={music.id}
                  onClick={onMusic}
                  alt=""
                />
                <PlayIcon className="play-icon" fontSize="large" />
                <NavLink to='/detail' state={{music}}>
                <Typography variant="subtitle1" gutterBottom>
                  {music.singer}
                  <br />
                  {music.name}
                </Typography>
                </NavLink>
              </PlaylistItem>
            </Grid>
          ))}
        </Grid>
        <Footer/>
      </MainContent>
      {console.log(playList)}

      {playList.name === "music.name" ? (
        <></>
      ) : (
        <CustomAudioPlayer playList={playList} />
      )}
    </div>
  );
};

export default Musics;
