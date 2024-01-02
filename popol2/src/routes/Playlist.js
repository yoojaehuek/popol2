import React, { useState } from "react";
import axios from "axios";
import useAsync from "../customHook/useAsync";
import { API_URL } from "../config/contansts";
import { CssBaseline, Container, Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Listb from './Listbar';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Footer from './Footer';
import { getCookie, removeCookie } from "../cookie";
import CustomAudioPlayer from "./Audio"
import '../scss/Playlist.scss'

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




const PlayList = () => {
  const navigate = useNavigate();

  const [playList, setPlayList] = useState([
    {
      name: "오늘 뭐 듣지?",
      writer: "재생 버튼을 클릭해보세요",
      img: "images/defaultMusicImg.png",
      src: `${API_URL}/upload/music/RoieShpigler-Aluminum.mp3`,
      id: 1,
    },
  ]);

  //전체곡 조회함수
  const getPlayList = async () => {
    const login = getCookie('accessToken');
    if (getCookie('accessToken') != null) {
      const res = await axios({
        url: `${API_URL}/playlist`,
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + login
        }
      })
      console.log("res.data:", res.data);
      return res.data;
    }else {
      alert('다시 로그인해주세요');
      removeCookie('accessToken');
      navigate('/');
    }
  };

  const [state] = useAsync(getPlayList, []);
  const { loading, data: musics, error } = state; //state구조분해
  if (loading) return <div>로딩중 ......</div>;
  if (error) {
    return <div>playlist가 비어있습니다</div>;
  }
  if (!musics) {
    return <div>로딩중입니다.</div>;
  }
  // const location = useLocation();
  // const musicData = location.state ? location.state.musicData : null;
  // const musicData = location.state.musicData;
  // if (!musicData) {
  //   return <div>데이터가 없습니다.</div>;
  // }
  

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


  return (
    <div style={{ display: 'flex', background:'black' }}>
      <CssBaseline />
      <Listb />
      <MainContent>
          <h1 style={{ color: 'white' }}>playlist</h1>
          <Grid container spacing={2}>
            {musics.map((playlist) => (
              <Grid item xs={12} sm={6} md={2} key={playlist.Music.id}>
                  <PlaylistItem style={{color : 'white'}} >
                    <PlaylistImage 
                      src={playlist.Music.imageUrl}
                      alt={playlist.Music.name}
                      data-singer={playlist.Music.singer}
                      data-musicurl={playlist.Music.musicUrl}
                      data-name={playlist.Music.name}
                      data-id={playlist.Music.id}
                      onClick={onMusic}
                      />
                    <PlayIcon className="play-icon" fontSize="large" />
                    <NavLink to='/detail' state={{music: playlist.Music}} style={{color: "#fff"}}>
                      <Typography variant="subtitle1" gutterBottom>{playlist.Music.singer}</Typography>
                      <Typography variant="body1">{playlist.Music.name}</Typography>
                    </NavLink>
                  </PlaylistItem>
              </Grid>
            ))}
          </Grid>
          <Footer/>
      </MainContent>
      <CustomAudioPlayer playList={playList} />
    </div>
  );
};

export default PlayList;