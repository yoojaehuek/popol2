import React, {useEffect, useState} from 'react';
import { CssBaseline, Container, Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink, useNavigate } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FastForwardIcon from '@mui/icons-material/FastForward';
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import Footer from './Footer'
import axios from 'axios';
import { getCookie, removeCookie } from "../cookie";
import { API_URL } from '../config/contansts';
import useAsync from '../customHook/useAsync';

const MainContent = styled('div')({
  padding: '2vw',
});

const PlaylistItem = styled(Box)({
  // border: '1px solid #ccc',
  // padding: '20px',
  borderRadius: '8px',
  // margin: '10px',
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
  width: '5%',
  transition: 'opacity 0.3s ease',
});

const PlayIcon = styled(PlayArrowIcon)({
  position: 'absolute',
  bottom: '5%',
  left: '2.5%',
  transform: 'translate(-50%, -50%)',
  opacity: 0,
  transition: 'opacity 0.3s ease',
});


// //전체곡 조회함수
// const getMusics = async () => {
//   const res = await axios.get(`${API_URL}/api/musics`);
//   // .then(() => {
//   //   // alert("음악 전체 조회 성공.");
//   //   console.log("조회성공 res데이터: ",res.data);
//   // })
//   // .catch(err => {
//   //     console.error("음악 불러오기 에러: ", err);
//   // });
//   console.log("res.data:", res.data);
//   return res.data;
// };

const Monthmusic = (props) => {
  const navigate = useNavigate();

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

  const addPlayList = async (music) => {
    const login = getCookie('accessToken');
    if (getCookie('accessToken') != null) {
      await axios({
        url: `${API_URL}/api/playlist`,
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + login
        },
        data: {
          playList: music,
        }
      })
      .then(() => {
        alert("추가되었습니다!");
      })
      .catch(err => {
        console.error(err);
      });
    }else {
      alert('다시 로그인해주세요');
      removeCookie('accessToken');
      navigate('/');
    }
  }

  return (
    <div style={{ display: 'flex', background: 'black' }}>
      <CssBaseline />
      <MainContent style={{ color: 'white' }}>
        <div>
          <h1 style={{ paddingBottom: '1vw' }}>이달의 차트</h1>
          <Grid container spacing={1}>
            {musics.map((music) => (
              <Grid item xs={12} sm={6} md={12} key={music.id}>
                <PlaylistItem style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
                  <PlaylistImage src={API_URL+music.imageUrl} alt={music.name} onClick={() => {props.onMusic(music)}} />
                  <PlayIcon className="play-icon" fontSize="large" onClick={() => {props.onMusic(music)}} />
                  <NavLink to='/login-main/detail' state={{ music }}>
                    <Typography variant="subtitle1" gutterBottom>{music.singer}</Typography>
                    <Typography variant="subtitle" gutterBottom>{music.name}</Typography>
                  </NavLink>
                  <div>
                    {/* <FastForwardIcon style={{ marginRight: '1vw' }} /> */}
                    <PlaylistAddIcon style={{ marginRight: '1vw', cursor: 'pointer'}} onClick={() => {addPlayList(music)}} />
                    {/* <MoreHorizSharpIcon /> */}
                  </div>
                </PlaylistItem>
              </Grid>
            ))}
          </Grid>
          <Footer />
        </div>
      </MainContent>
    </div>
  );
};

export default Monthmusic;
