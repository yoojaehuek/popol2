import React, {useEffect} from 'react';
import { CssBaseline, Container, Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink, useNavigate } from 'react-router-dom';
import Listb from './Listbar';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FavoriteIcon from '@mui/icons-material/Favorite';
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
  },
  '&:hover img': {
    opacity: 0.8,
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

const Monthmusic = () => {
  const navigate = useNavigate();

  //EditProfile 들어왔을때 토큰 검증
  useEffect(() => {
    const verify = async () => {
      if(getCookie('accessToken') != null){
        const login = getCookie('accessToken');
        await axios({
          url: `${ API_URL }/verify`,
          method: 'POST',
          headers: {
            Authorization: 'Bearer '+ login
          }
        }).then((res) => {
          if (res.statusText != "OK") {
            alert('다시 로그인 해주세요');
            removeCookie('accessToken');
            navigate('/');
          }
        }).catch((err) => {
          console.log(err);
        })
      }else{
        alert('다시 로그인 해주세요');
        navigate("/");
      }
    }
    
    verify();
  }, []);

  const [state] = useAsync(getMusics, []);
  const { loading, data: musics, error } = state; //state구조분해
  if (loading) return <div>로딩중 ......</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!musics) {
    return <div>로딩중입니다.</div>;
  }

  return (
    <div style={{ display: 'flex', background:'black' }}>
      <CssBaseline />
      <Listb />
      <MainContent style={{ color : 'white'}}>
				<div>
          <h1 style={{ paddingBottom: '1vw'}}>이달의 차트</h1>
          <Grid container spacing={1}>
            {musics.map((music) => (
              <Grid item xs={12} sm={6} md={12} key={music.id}>
                <NavLink to='/detail' state={{music}}>
                  <PlaylistItem style={{display:'flex', justifyContent:'space-between', alignItems:'center',  color : 'white'}}>
                    <PlaylistImage src={music.imageUrl} alt={music.name} />
                    <PlayIcon className="play-icon" fontSize="large" />
                    <Typography variant="subtitle1" gutterBottom>{music.singer}</Typography>
										<Typography variant="subtitle" gutterBottom>{music.name}</Typography>
										<div>
										<FastForwardIcon style={{marginRight: '1vw'}}/>
										<FavoriteIcon style={{marginRight: '1vw'}}/>
										<MoreHorizSharpIcon/>
										</div>
									</PlaylistItem>
                </NavLink>
              </Grid>
            ))}
          </Grid>
          <Footer/>
					</div>
      </MainContent>
    </div>
  );
};

export default Monthmusic;
