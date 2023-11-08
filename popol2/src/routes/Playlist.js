import React from 'react';
import { CssBaseline, Container, Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Listb from './Listbar';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Footer from './Footer';
import useAsync from '../customHook/useAsync';

import axios from "axios";
import { API_URL } from "../config/contansts";
import { getCookie, removeCookie } from "../cookie";

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
  }else 
  // const location = useLocation();
  // const musicData = location.state ? location.state.musicData : null;
  // const musicData = location.state.musicData;
  // if (!musicData) {
  //   return <div>데이터가 없습니다.</div>;
  // }
  return (
    <div style={{ display: 'flex', background:'black' }}>
      <CssBaseline />
      <Listb />
      <MainContent>
          <h1 style={{ color: 'white' }}>playlist</h1>
          <Grid container spacing={2}>
            {musics.map((playlist) => (
              <Grid item xs={12} sm={6} md={2} key={playlist.Music.id}>
                <NavLink to='/detail' state={{music: playlist.Music}}>
                  <PlaylistItem style={{color : 'white'}} >
                    <PlaylistImage src={playlist.Music.imageUrl} alt={playlist.Music.name} />
                    <PlayIcon className="play-icon" fontSize="large" />
                    <Typography variant="subtitle1" gutterBottom>{playlist.Music.singer}</Typography>
                    <Typography variant="body1">{playlist.Music.name}</Typography>
                  </PlaylistItem>
                </NavLink>
              </Grid>
            ))}
          </Grid>
          <Footer/>
      </MainContent>
    </div>
  );
};

export default PlayList;