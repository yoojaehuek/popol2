import React from "react";
import axios from "axios";
import useAsync from "../customHook/useAsync";
import { API_URL } from "../config/contansts";
import { CssBaseline, Box, Grid, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "../scss/dj.scss"
import Footer from './Footer';

const PlaylistItem = styled(Box)({
  borderRadius: '8px',
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
  width: '90%',
  transition: 'opacity 0.3s ease',
});

const PlayIcon = styled(PlayArrowIcon) ({
  border  :  'solid 1px rgba(0, 0, 0, 0); ',
  borderRadius : '50px',
  backgroundColor : 'gray',
  position: 'absolute',
  color : 'white',
  top: '90%',
  left: '15%',
  transform: 'translate(-50%, -50%)',
  opacity: 0,
  transition: 'opacity 0.3s ease',
});

const playlists = [
  { id: 1, imageUrl: '/images/dj/1.png'},
  { id: 2, imageUrl: '/images/dj//2.png'},
  { id: 3, imageUrl: '/images/dj//3.png'},
  { id: 4, imageUrl: '/images/dj//4.png'},
  { id: 1, imageUrl: '/images/dj//5.png'},
  { id: 2, imageUrl: '/images/dj//6.png'},
  { id: 3, imageUrl: '/images/dj//7.png'},
  { id: 4, imageUrl: '/images/dj//8.png'},
  { id: 1, imageUrl: '/images/dj//9.png'},
  { id: 2, imageUrl: '/images/dj//10.png'},
  { id: 3, imageUrl: '/images/dj//11.png'},
  { id: 4, imageUrl: '/images/dj//12.png'},
];

const playlist = [
  { id: 1, imageUrl: '/images/dj2/1.png'},
  { id: 2, imageUrl: '/images/dj2/2.png'},
  { id: 3, imageUrl: '/images/dj2/3.png'},
  { id: 4, imageUrl: '/images/dj2/4.png'},
  { id: 1, imageUrl: '/images/dj2/5.png'},
  { id: 2, imageUrl: '/images/dj2/6.png'},
  { id: 3, imageUrl: '/images/dj2/7.png'},
  { id: 4, imageUrl: '/images/dj2/8.png'},
  { id: 1, imageUrl: '/images/dj2/9.png'},
  { id: 2, imageUrl: '/images/dj2/10.png'},
  { id: 3, imageUrl: '/images/dj2/11.png'},
  { id: 4, imageUrl: '/images/dj2/12.png'},
  { id: 1, imageUrl: '/images/dj2/13.png'},
  { id: 2, imageUrl: '/images/dj2/14.png'},
  { id: 3, imageUrl: '/images/dj2/15.png'},
  { id: 4, imageUrl: '/images/dj2/16.png'},
  { id: 1, imageUrl: '/images/dj2/17.png'},
  { id: 2, imageUrl: '/images/dj2/18.png'},
  { id: 3, imageUrl: '/images/dj2/19.png'},
  { id: 4, imageUrl: '/images/dj2/20.png'},
  { id: 1, imageUrl: '/images/dj2/21.png'},
  { id: 2, imageUrl: '/images/dj2/22.png'},
  { id: 3, imageUrl: '/images/dj2/23.png'},
  { id: 4, imageUrl: '/images/dj2/24.png'},
];

const Dj = (props) => {

  //전체곡 조회함수
  const getMusics = async () => {
    const res = await axios.get(`${API_URL}/api/musics`);
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
    <div className='djmain'>
      <CssBaseline />
      {/* <Listb /> */}
      <div className='dj-item'>
        <div className='dj-cotainer'>
          <h1>DJ 스테이션</h1>
          <h2>느낌별 스테이션</h2>
          <Grid container spacing={2}>
            {playlists.map((playlist) => (
              <Grid item xs={12} sm={6} md={2} key={playlist.id}>
                <NavLink to='/login-main/detail'>
                  <PlaylistItem>
                    <PlaylistImage src={playlist.imageUrl}/>
                    <PlayIcon className="play-icon" fontSize="large" />
                  </PlaylistItem>
                </NavLink>
              </Grid>
            ))}
          </Grid>
          <h2>장르 스테이션</h2>
          <Grid container spacing={2}>
            {playlist.map((playlist) => (
              <Grid item xs={12} sm={6} md={2} key={playlist.id}>
                <NavLink to='/login-main/detail'>
                  <PlaylistItem>
                    <PlaylistImage src={playlist.imageUrl}/>
                    <PlayIcon className="play-icon" fontSize="large" />
                  </PlaylistItem>
                </NavLink>
              </Grid>
            ))}
          </Grid>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Dj;