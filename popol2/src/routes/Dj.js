import React, { useState } from "react";
import axios from "axios";
import useAsync from "../customHook/useAsync";
import { API_URL } from "../config/contansts";
import { CssBaseline, Box, Grid} from '@mui/material';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import Listb from './Listbar';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "../scss/dj.scss"
import Footer from './Footer';
import CustomAudioPlayer from "./Audio";

const PlaylistItem = styled(Box)({
  // border: '1px solid #ccc',
  borderRadius: '8px',
  textAlign: 'center',
  position: 'relative',
  '&:hover .play-icon': {
    opacity: 1,
    backgroundColor: 'red',
  },
  '&:hover img': {
    opacity: 0.8,
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
  { id: 1, imageUrl: './images/dj/1.png'},
  { id: 2, imageUrl: './images/dj//2.png'},
  { id: 3, imageUrl: './images/dj//3.png'},
  { id: 4, imageUrl: './images/dj//4.png'},
  { id: 1, imageUrl: './images/dj//5.png'},
  { id: 2, imageUrl: './images/dj//6.png'},
  { id: 3, imageUrl: './images/dj//7.png'},
  { id: 4, imageUrl: './images/dj//8.png'},
  { id: 1, imageUrl: './images/dj//9.png'},
  { id: 2, imageUrl: './images/dj//10.png'},
  { id: 3, imageUrl: './images/dj//11.png'},
  { id: 4, imageUrl: './images/dj//12.png'},
];

const playlist = [
  { id: 1, imageUrl: './images/dj2/1.png'},
  { id: 2, imageUrl: './images/dj2/2.png'},
  { id: 3, imageUrl: './images/dj2/3.png'},
  { id: 4, imageUrl: './images/dj2/4.png'},
  { id: 1, imageUrl: './images/dj2/5.png'},
  { id: 2, imageUrl: './images/dj2/6.png'},
  { id: 3, imageUrl: './images/dj2/7.png'},
  { id: 4, imageUrl: './images/dj2/8.png'},
  { id: 1, imageUrl: './images/dj2/9.png'},
  { id: 2, imageUrl: './images/dj2/10.png'},
  { id: 3, imageUrl: './images/dj2/11.png'},
  { id: 4, imageUrl: './images/dj2/12.png'},
  { id: 1, imageUrl: './images/dj2/13.png'},
  { id: 2, imageUrl: './images/dj2/14.png'},
  { id: 3, imageUrl: './images/dj2/15.png'},
  { id: 4, imageUrl: './images/dj2/16.png'},
  { id: 1, imageUrl: './images/dj2/17.png'},
  { id: 2, imageUrl: './images/dj2/18.png'},
  { id: 3, imageUrl: './images/dj2/19.png'},
  { id: 4, imageUrl: './images/dj2/20.png'},
  { id: 1, imageUrl: './images/dj2/21.png'},
  { id: 2, imageUrl: './images/dj2/22.png'},
  { id: 3, imageUrl: './images/dj2/23.png'},
  { id: 4, imageUrl: './images/dj2/24.png'},
];

const Dj = () => {
  const [playList, setPlayList] = useState([
    {
      name: "오늘 뭐 듣지?",
      writer: "재생 버튼을 클릭해보세요",
      img: "images/defaultMusicImg.png",
      src: `${API_URL}/upload/music/RoieShpigler-Aluminum.mp3`,
      id: 1,
    },
  ]);

  // 음악을 클릭했을 때 재생목록에 추가하는 함수
  const onMusic = (e) => {
    // e.preventDefault();
    // console.log(e.target.value);
    console.log(e.target.dataset);
    setPlayList([
      {
        name: e.target.dataset.name,
        writer: e.target.dataset.singer,
        img: e.target.src,
        src: e.target.dataset.musicurl,
        id: 1,
      },
    ]);
  };

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

  const [state] = useAsync(getMusics, []);
  const { loading, data: musics, error } = state; //state구조분해
  if (loading) return <div>로딩중 ......</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!musics) {
    return <div>로딩중입니다.</div>;
  }
  return (
    <div className='djmain'>
      <CssBaseline />
      <Listb />
      <div className='dj-item'>
        <div className='dj-cotainer'>
          <h1>DJ 스테이션</h1>
          <h2>느낌별 스테이션</h2>
          <Grid container spacing={2}>
            {playlists.map((playlist) => (
              <Grid item xs={12} sm={6} md={2} key={playlist.id}>
                <NavLink to='/detail'>
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
                <NavLink to='/detail'>
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
      <CustomAudioPlayer playList={playList} />
    </div>
  );
};

export default Dj;
