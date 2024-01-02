import React, {useEffect, useState} from 'react';
import { CssBaseline, Container, Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink, useNavigate } from 'react-router-dom';
import Listb from './Listbar';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Footer from './Footer';
import CustomAudioPlayer from "./Audio";
import axios from 'axios';
import { getCookie, removeCookie } from "../cookie";
import { API_URL } from '../config/contansts';
import useAsync from '../customHook/useAsync';

const MainContent = styled('div')({
  flexGrow: 1,
  padding: 20,
});

const PlaylistItem = styled(Box)({
  // border: '1px solid #ccc',
  padding: '20px',
  borderRadius: '8px',
  margin: '10px',
  textAlign: 'center',
  position: 'relative',
  '&:hover .play-icon': {
    opacity: 1,
  },
  '&:hover img': {
    opacity: 0.8,
  },
});

const PlaylistImage = styled('img')({
  marginBottom: '10px',
  width: '80%',
  transition: 'opacity 0.3s ease',
});

const PlayIcon = styled(PlayArrowIcon)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: 0,
  transition: 'opacity 0.3s ease',
});

// const playlists = [
//   { id: 1, imageUrl: './logo192.png', artist: '아티스트 1', title: '플레이리스트 1' },
//   { id: 2, imageUrl: './logo192.png', artist: '아티스트 2', title: '플레이리스트 2' },
//   { id: 3, imageUrl: './logo192.png', artist: '아티스트 3', title: '플레이리스트 3' },
//   { id: 4, imageUrl: './logo192.png', artist: '아티스트 4', title: '플레이리스트 4' },
//   { id: 1, imageUrl: './logo192.png', artist: '아티스트 1', title: '플레이리스트 1' },
//   { id: 2, imageUrl: './logo192.png', artist: '아티스트 2', title: '플레이리스트 2' },
//   { id: 3, imageUrl: './logo192.png', artist: '아티스트 3', title: '플레이리스트 3' },
//   { id: 4, imageUrl: './logo192.png', artist: '아티스트 4', title: '플레이리스트 4' },
// ];

//전체곡 조회함수
const getMusics = async () => {
  const res = await axios.get(`${API_URL}/musics/new`);
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

const NewChart = () => {
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
    <div style={{ display: 'flex', background:'black'}}>
      <CssBaseline />
      <Listb />
      <MainContent>
        <div>
          <h1 style={{color : 'white'}}>최신 앨범</h1>
          <Grid container spacing={2}>
            {musics.map((music) => (
              <Grid item xs={12} sm={6} md={2} key={music.id}>
                <NavLink to='/detail' state={{music}}>
                  <PlaylistItem style={{color : 'white'}}>
                    <PlaylistImage src={music.imageUrl} alt={music.name} />
                    <PlayIcon className="play-icon" fontSize="large" />
                    <Typography variant="subtitle1" gutterBottom>{music.singer}</Typography>
                    <Typography variant="body1">{music.name}</Typography>
                  </PlaylistItem>
                </NavLink>
              </Grid>
            ))}
          </Grid>
          <Footer/>
        </div>
      </MainContent>
      <CustomAudioPlayer playList={playList} />
    </div>
  );
};

export default NewChart;