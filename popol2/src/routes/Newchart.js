import React from 'react';
import { CssBaseline, Box, Grid, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Footer from './Footer';
import axios from 'axios';
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
    color:'red',
  },
  '&:hover img': {
    opacity: 0.8,
    cursor: 'pointer',
  },
});

const PlaylistImage = styled('img')({
  marginBottom: '10px',
  width: '100%',
  height:'12vw',
  transition: 'opacity 0.3s ease',
});

const PlayIcon = styled(PlayArrowIcon)({
  position: 'absolute',
  top: '40%',
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
    const res = await axios.get(`${API_URL}/api/musics/new`);
    console.log("res.data:", res.data);
    return res.data;
  };

  const [state] = useAsync(getMusics, []);
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
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!musics) {
    return <div>로딩중입니다.</div>;
  }

  return (
    <div style={{ display: 'flex', background:'black'}}>
      <CssBaseline />
      <MainContent>
        <div>
          <h1 style={{color : 'white'}}>최신 음악</h1>
          <Grid container spacing={2}>
            {musics.map((music) => (
              <Grid item xs={12} sm={6} md={2} key={music.id}>
                <PlaylistItem style={{color : 'white'}}>
                  <PlaylistImage src={API_URL+music.imageUrl} alt={music.name} onClick={() => {props.onMusic(music)}} />
                  <PlayIcon className="play-icon" fontSize="large" onClick={() => {props.onMusic(music)}}/>
                  <NavLink to='/login-main/detail' state={{music}}>
                    <Typography variant="subtitle1" gutterBottom><span style={{color:'white', fontWeight:"550", fontSize:'22px'}}>{music.name}</span></Typography>
                    <Typography variant="body1"><span style={{color:'white'}}>{music.singer}</span></Typography>
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