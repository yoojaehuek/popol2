import { Drawer, List, ListItem, ListItemText, CssBaseline, AppBar, Toolbar, Container, Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import AudioPlayer from 'react-modern-audio-player'; 
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'; //플리 아이콘
import DownloadIcon from '@mui/icons-material/Download'; // 다운로드 아이콘
import React from "react";
import axios from 'axios';
import useAsync from "../customHook/useAsync";
import { API_URL } from "../config/contansts";
import '../scss/Musics.scss';



const drawerWidth = 240;

const DrawerContainer = styled('div')({
  width: drawerWidth,
  flexShrink: 0,
});

const MainContent = styled('div')({
  flexGrow: 1,
  padding: 20,
});

const Musics = () => {

    const playList = [
      {
        name: "music.name",
        writer: "music.singer",
        img: "music.imageUrl",
        src: "http://localhost:8081/upload/music/Roie Shpigler - Aluminum.mp3",
        id: 1,
      },
    ]
    
    //전체곡 조회함수
    const getMusics = async () => {
      const res = await axios.get(`${API_URL}/musics`)
        // .then(() => {
        //   // alert("음악 전체 조회 성공.");
        //   // console.log(res.data);
        // })
        // .catch(err => {
        //     console.error("음악 불러오기 에러", err);
        // });
      console.log("res.data:", res.data);
      return res.data;
    }
  
    const [state ] = useAsync(getMusics, []);
    const { loading, data:musics, error} = state; //state구조분해 
    if(loading) return <div>로딩중 ......</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!musics){
        return <div>로딩중입니다.</div>
    }
  
    
    // if(musics) {
    //   // setPlayList(musics);
    //   // playList = musics
    //   console.log("playList", playList);
    // }
  
  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, marginLeft: `${drawerWidth}px` }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            메인 홈
          </Typography>
        </Toolbar>
      </AppBar>
      <DrawerContainer>
        <Toolbar />
        <Drawer variant="permanent" sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth } }}>
          <Toolbar />
          <List>
            <ListItem button>
              <NavLink to='/Musics'><ListItemText primary="메인" /></NavLink>
            </ListItem>
            <ListItem button>
              <NavLink to='/mypage'><ListItemText primary="내 정보" /></NavLink>
            </ListItem>
            <ListItem button>
              <NavLink to='/playlist'><ListItemText primary="플레이리스트" /></NavLink>
            </ListItem>
          </List>
        </Drawer>
      </DrawerContainer>
      <MainContent>
        <Toolbar />
      <Container>
      {musics.map(music => <audio src={music.musicUrl} controls></audio>)}

      <div className="audio-player-container">
        <AudioPlayer playList={
            [
              {
                name: "music.name",
                writer: "music.singer",
                img: "music.imageUrl",
                src: `${API_URL}/upload/music/RoieShpigler-Aluminum.mp3`,
                id: 1,
              },
            ]
          } 
          activeUI={{ // 넣을 버튼 설정
            playButton: true, //재생 버튼
            playList: false, //플레이리스트 버튼
            prevNnext: false, // 이전/다음 버튼
            volume: true, //소리 킴/끔
            volumeSlider: false, //볼륨 조정
            repeatType: true, //무한재생
            trackTime: true, //음악 시간
            trackInfo: true, //음악 이름, 설명
            artwork: true, //이미지
            progress: "bar", //재생 바
          }}
          placement={{
            // VolumeSliderPlacement : "top",
            interface:{
              templateArea: {
                artwork: "row1-1",
                trackInfo: "row1-2",
                playButton: "row1-3",
                trackTimeCurrent: "row1-4",
                trackTimeDuration: "row1-5",
                progress: "row1-6",
                repeatType: "row1-7",
                volume: "row1-8",
              }
            }
          }}
          >
          <button><DownloadIcon/></button>
          <button><PlaylistAddIcon/></button>
          
        </AudioPlayer>
      </div>

      <div className="audio-player-container">
        <AudioPlayer playList={
            [
              {
                name: "music.name",
                writer: "music.singer",
                img: "music.imageUrl",
                src: `${API_URL}/upload/music/RoieShpigler-Aluminum.mp3`,
                id: 1,
              },
            ]
          } 
          activeUI={{ // 넣을 버튼 설정
            playButton: true, //재생 버튼
            playList: false, //플레이리스트 버튼
            prevNnext: false, // 이전/다음 버튼
            volume: true, //소리 킴/끔
            volumeSlider: false, //볼륨 조정
            repeatType: true, //무한재생
            trackTime: true, //음악 시간
            trackInfo: true, //음악 이름, 설명
            artwork: true, //이미지
            progress: "bar", //재생 바
          }}
          placement={{
            // VolumeSliderPlacement : "top",
            interface:{
              templateArea: {
                artwork: "row1-1",
                trackInfo: "row1-2",
                playButton: "row1-3",
                trackTimeCurrent: "row1-4",
                trackTimeDuration: "row1-5",
                progress: "row1-6",
                repeatType: "row1-7",
                volume: "row1-8",
              }
            }
          }}
          >
          <button><DownloadIcon/></button>
          <button><PlaylistAddIcon/></button>
          
        </AudioPlayer>
      </div>
      <div className="audio-player-container">
        <AudioPlayer playList={
            [
              {
                name: "music.name",
                writer: "music.singer",
                img: "music.imageUrl",
                src: `${API_URL}/upload/music/RoieShpigler-Aluminum.mp3`,
                id: 1,
              },
            ]
          } 
          activeUI={{ // 넣을 버튼 설정
            playButton: true, //재생 버튼
            playList: false, //플레이리스트 버튼
            prevNnext: false, // 이전/다음 버튼
            volume: true, //소리 킴/끔
            volumeSlider: false, //볼륨 조정
            repeatType: true, //무한재생
            trackTime: true, //음악 시간
            trackInfo: true, //음악 이름, 설명
            artwork: true, //이미지
            progress: "bar", //재생 바
          }}
          placement={{
            // VolumeSliderPlacement : "top",
            interface:{
              templateArea: {
                artwork: "row1-1",
                trackInfo: "row1-2",
                playButton: "row1-3",
                trackTimeCurrent: "row1-4",
                trackTimeDuration: "row1-5",
                progress: "row1-6",
                repeatType: "row1-7",
                volume: "row1-8",
              }
            }
          }}
          >
          <button><DownloadIcon/></button>
          <button><PlaylistAddIcon/></button>
          
        </AudioPlayer>
      </div>
        </Container>
      </MainContent>
    </div>
  );
};

export default Musics;