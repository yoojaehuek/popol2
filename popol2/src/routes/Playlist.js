import React from "react";
import axios from "axios";
import useAsync from "../customHook/useAsync";
import { API_URL } from "../config/contansts";
import { CssBaseline, Box, Grid, Typography, CircularProgress, Button } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink, useNavigate } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Footer from './Footer';
import { getCookie, removeCookie } from "../cookie";
import '../scss/Playlist.scss'

const EmptyPlaylistScreen = styled("div")({
  textAlign: "center",
  padding: "20px",
  color: "white",
  background: "black",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const ExploreButton = styled(Button)({
  marginTop: '20px',
  backgroundColor: '#3f51b5',
  color: 'white',
  "&:hover": {
    backgroundColor: '#2a3f8d',
  },
});

const MainContent = styled('div')({
  flexGrow: 1,
  padding: 20,
});

const PlaylistItem = styled(Box)({
  padding: '20px',
  borderRadius: '8px',
  margin: '10px',
  textAlign: 'center',
  position: 'relative',
  '&:hover .play-icon': {
    opacity: 1,
    cursor: 'pointer',
    color:'red',
  },
  '&:hover img': {
    opacity: 0.8,
    cursor: 'pointer',
  },
});

const PlaylistImage = styled('img')({
  marginBottom: '10px',
  width: '90%',
  height:"20vh",
  transition: 'opacity 0.3s ease',
});

const PlayIcon = styled(PlayArrowIcon)({
  position: 'absolute',
  top: '36%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: 0,
  transition: 'opacity 0.3s ease',
});


const PlayList = (props) => {
  const navigate = useNavigate();


  //전체곡 조회함수
  const getPlayList = async () => {
    const login = getCookie('accessToken');
    if (getCookie('accessToken') != null) {
      const res = await axios({
        url: `${API_URL}/api/playlist`,
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
  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: 'white', backgroundColor: '#000', height: '100vh', display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h5" gutterBottom>
          잠시만 기다려주세요...
        </Typography>
        <CircularProgress style={{ marginTop: '10px' }} />
      </div>
    )
  }
  if (!musics || musics.length === 0) {
    return (
      <EmptyPlaylistScreen>
        <Typography variant="h5" gutterBottom>
          플레이 리스트가 비었습니다.
        </Typography>
        <Typography variant="body1" paragraph>
          플레이 리스트를 만들어보세요!
        </Typography>
        <ExploreButton variant="contained" color="primary" onClick={() => {navigate('/login-main/musics')}}>
          구경.
        </ExploreButton>
        <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px', fontFamily: 'Arial', fontSize: '16px', fontWeight: 'bold' }}>
          <NavLink to='/explore' style={{ color: "#fff" }}>다른 기능을 이용하여 더 많은 즐거움을 느껴보세요.</NavLink>
        </Typography>
        
      </EmptyPlaylistScreen>
    );
  }


  return (
    <div style={{ display: 'flex', background:'black' }}>
      <CssBaseline />
      <MainContent>
          <h1 style={{ color: 'white' }}>playlist</h1>
          <Grid container spacing={2}>
            {musics.map((playlist) => (
              <Grid item xs={12} sm={6} md={2} key={playlist.Music.id}>
                  <PlaylistItem style={{color : 'white'}} >
                    <div onClick={() => {props.onMusic(playlist.Music)}}>
                      <PlaylistImage 
                        src={`${API_URL}${playlist.Music.imageUrl}`} 
                        alt={playlist.Music.name}
                      />
                      <PlayIcon className="play-icon" fontSize="large" />
                    </div>
                    <NavLink to='/login-main/detail' state={{music: playlist.Music}} style={{color: "#fff"}}>
                      <Typography variant="subtitle1" gutterBottom><span style={{fontWeight: "550", fontSize: "22px"}}>{playlist.Music.name}</span></Typography>
                      <Typography variant="body1">{playlist.Music.singer}</Typography>
                    </NavLink>
                  </PlaylistItem>
              </Grid>
            ))}
          </Grid>
          <Footer/>
      </MainContent>
    </div>
  );
};

export default PlayList;