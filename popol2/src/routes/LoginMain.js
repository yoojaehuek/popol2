import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Listb from "./Listbar.js";
import EditProfile from './EditProfile.js';
import MembershipManagement from './Membershipmang';
import MusicDetail from './MusicDetail'
import Dj from './Dj.js';
import Chart from './Chart.js';
import Monthmusic from './Monthmusic.js';
import Newchart from './Newchart.js';
import Video from './Video.js';
import Playlist from './Playlist';
import Mypage from './Mypage';
import Musics from './Musics';
import CustomAudioPlayer from './Audio.js';
import { API_URL } from '../config/contansts.js';
import '../scss/LoginMain.scss';

const LoginMain = () => {
  // const navigate = useNavigate();
  // const location = useLocation();
  
  // useEffect(() => {
  //   console.log("location: ", location);
  //   if(!getCookie('login')){
  //     alert('다시 로그인 해주세요');
  //     navigate('/admin/login');
  //   }
  // }, [location]);

  const [playList, setPlayList] = useState([
    {
      name: "오늘 뭐 듣지?",
      writer: "재생 버튼을 클릭해보세요",
      img: "/images/defaultMusicImg.png",
      src: `${API_URL}/upload/music/RoieShpigler-Aluminum.mp3`,
      id: 1,
    },
  ]);

  // 음악을 클릭했을 때 재생목록에 추가하는 함수
  const onMusic = (music) => {
    // e.preventDefault();
    // console.log(e.target.value);
    console.log(music);
    setPlayList([
      {
        name: music.name,
        writer: music.singer,
        img: API_URL+music.imageUrl,
        src: API_URL+music.musicUrl,
        musicId: music.id,
        id: 1,
      },
    ]);
  };

  return (
    <div id="loginMain">
      <Listb id='Listb'/>
      <div id='loginMain-content'>
        <Routes>
          <Route path="/playlist" element={<Playlist onMusic={onMusic} />} />
          <Route path="/user/mypage" element={<Mypage />} />
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/member" element={<MembershipManagement />} />
          <Route path="/musics" element={<Musics onMusic={onMusic} />} />
          <Route path="/detail" element={<MusicDetail onMusic={onMusic} />} />
          <Route path="/dj" element={<Dj onMusic={onMusic} />} />
          <Route path="/month" element={<Monthmusic onMusic={onMusic} />} />
          <Route path="/chart" element={<Chart onMusic={onMusic} />} />
          <Route path='/new' element={<Newchart onMusic={onMusic} />} />
          <Route path='/video' element={<Video onMusic={onMusic} />} />
        </Routes>
      </div>
      <CustomAudioPlayer playList={playList} />
    </div>
  );
};


export default LoginMain;
