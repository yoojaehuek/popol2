import React, {useEffect, useState} from 'react';
import { CssBaseline, Container, Box, Grid, Typography, useThemeProps } from '@mui/material';
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
    cursor: 'pointer',
  },
  '&:hover img': {
    opacity: 0.8,
    cursor: 'pointer',
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


// //전체곡 조회함수
// const getMusics = async () => {
//   const res = await axios.get(`${API_URL}/api/musics/new`);
//   console.log("res.data:", res.data);
//   return res.data;
// };

const NewChart = (props) => {


  //전체곡 조회함수
  const getMusics = async () => {
    const res = await axios.get(`${API_URL}/api/musics`);
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
      <MainContent>
        <div>
          <h1 style={{color : 'white'}}>최신 앨범</h1>
          <Grid container spacing={2}>
            {musics.map((music) => (
              <Grid item xs={12} sm={6} md={2} key={music.id}>
                <PlaylistItem style={{color : 'white'}}>
                  <PlaylistImage src={API_URL+music.imageUrl} alt={music.name} onClick={() => {props.onMusic(music)}} />
                  <PlayIcon className="play-icon" fontSize="large" onClick={() => {props.onMusic(music)}}/>
                  <NavLink to='/login-main/detail' state={{music}}>
                    <Typography variant="subtitle1" gutterBottom>{music.singer}</Typography>
                    <Typography variant="body1">{music.name}</Typography>
                  </NavLink>
                </PlaylistItem>
              </Grid>
            ))}
          </Grid>
          <Footer/>
        </div>
      </MainContent>
    </div>
  );
};

export default NewChart;