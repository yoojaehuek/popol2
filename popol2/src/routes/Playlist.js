import React from "react";
import axios from "axios";
import useAsync from "../customHook/useAsync";
import { API_URL } from "../config/contansts";
import { CssBaseline, Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink, useNavigate } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Footer from './Footer';
import { getCookie, removeCookie } from "../cookie";
import '../scss/Playlist.scss'

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
  if (loading) return <div>로딩중 ......</div>;
  if (error) {
    return <div>playlist가 비어있습니다</div>;
  }
  if (!musics) {
    return <div>로딩중입니다.</div>;
  }


  return (
    <div style={{ display: 'flex', background:'black' }}>
      <CssBaseline />
      {/* <Listb /> */}
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
                      <Typography variant="subtitle1" gutterBottom>{playlist.Music.singer}</Typography>
                      <Typography variant="body1">{playlist.Music.name}</Typography>
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