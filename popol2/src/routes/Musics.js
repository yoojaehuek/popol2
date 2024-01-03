import React from "react";
import axios from "axios";
import useAsync from "../customHook/useAsync";
import { API_URL } from "../config/contansts";
import { NavLink } from "react-router-dom";
import "../scss/Musics.scss";
import { Box, Grid, Typography, CircularProgress } from '@mui/material';
import { styled } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Footer from './Footer';

const MainContent = styled("div")({
  flexGrow: 1,
  padding: 20,
});

const PlaylistItem = styled(Box)({
  // border: '1px solid #ccc',
  padding: "20px",
  borderRadius: "8px",
  margin: "10px",
  textAlign: "center",
  position: "relative",
  '&:hover .play-icon': {
    opacity: 1,
    cursor: 'pointer',
  },
  '&:hover img': {
    opacity: 0.8,
    cursor: 'pointer',
  },
});
const PlaylistImage = styled("img")({
  marginBottom: "10px",
  width: "80%",
  transition: "opacity 0.3s ease",
});

const PlayIcon = styled(PlayArrowIcon)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  opacity: 0,
  transition: "opacity 0.3s ease",
});


const Musics = (props) => {

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
  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }
  if (!musics) {
    return <div>로딩중입니다.</div>;
  }

  return (
    <div style={{ backgroundColor: 'black' }}>
      <MainContent>
        <h1 style={{ color: 'white' }}>투데이</h1>
        <div style={{padding:'2vw', backgroundColor:'black'}}>
        <img style={{objectFit:'cover', width:'10vw', height:'auto', float:'left', marginRight:'5vw'}}src="/images/aespa.png"></img>
        <h1 style={{color:'white'}}>다시 엔진을 켜는, 에스파</h1>
        <h3 style={{paddingTop:'2vw', color:'white'}}>2차엔 에스파의 다음 챕터를 향해 시동을 거는 듯한 MusicHub 프로젝트 외에도 여러 기술과 새로운 장르의 도전까지,<br/>
        다양한 컬러로 채운 성숙한 변신이 가득한다. 팬덤을 생각하며 항상 엔진을 켜두는 에스파의 또 다른 출발</h3>
        </div>
        <Grid container spacing={2}>
          {musics.map((music) => (
            <Grid item xs={12} sm={6} md={4} key={music.id}>
              <PlaylistItem>
                <PlaylistImage
                  src={API_URL+music.imageUrl}
                  onClick={() => {props.onMusic(music)}}
                  alt={music.name}
                />
                <PlayIcon 
                  className="play-icon" 
                  fontSize="large" 
                  onClick={() => {props.onMusic(music)}} 
                />
                <NavLink to='/login-main/detail' state={{music}}>
                <Typography style={{color:'white'}} variant="subtitle1" gutterBottom>
                  {music.singer}
                  <br />
                  {music.name}
                </Typography>
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

export default Musics;
