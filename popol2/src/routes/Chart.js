import React, { useEffect } from 'react';
import { CssBaseline, Box, Grid, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink, useNavigate } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Footer from './Footer';
import axios from 'axios';
import { getCookie, removeCookie } from "../cookie";
import { API_URL } from '../config/contansts';
import useAsync from '../customHook/useAsync';


const MainContent = styled('div')({
  padding: '2vw',
});

const PlaylistItem = styled(Box)({
  borderRadius: '8px',
  marginBottom:"20px",
  position: 'relative',
  '&:hover .play-icon': {
    opacity: 1,
    cursor: 'pointer',
    color:"red",
  },
  '&:hover img': {
    opacity: 0.8,
    cursor: 'pointer',
  },
});       

//213
const PlaylistImage = styled('img')({
  width: '20%',
  height: '10vh',
  transition: 'opacity 0.3s ease',
	marginRight: '1vw',
});

const PlayIcon = styled(PlayArrowIcon)({
  position: 'absolute',
  bottom: '5.5%',
  left: '9.5%',
  transform: 'translate(-50%, -50%)',
  opacity: 0,
  transition: 'opacity 0.3s ease',
});

//전체곡 조회함수
const getMusics = async () => {
  const res = await axios.get(`${API_URL}/api/musics`);
  console.log("res.data:", res.data);
  return res.data;
};


const Chartmusic = (props) => {
  const navigate = useNavigate();

  // 페이지가 로드될 때 실행되는 useEffect hook.
  useEffect(() => {
    // 사용자의 accessToken을 쿠키에서 가져옴
    const token = getCookie('accessToken');

    // 토큰이 존재하는 경우, 서버에서 토큰 유효성을 검증함
    const verify = async () => {
      if(token != null) {
        try {
          // 서버에 인증 요청을 보냄
          const response = await axios.post(`${API_URL}/api/verify`, null, {
            headers: {
              Authorization: 'Bearer ' + token
            }
          });

          // 서버 응답이 OK일 경우 (토큰이 유효한 경우)
          if (response.statusText === "OK") {
            // 토큰이 유효하면 아무 작업도 수행하지 않음
            // 사용자를 현재 페이지에 둠
          }
        } catch (error) {
          // 서버 응답이 OK가 아닐 경우 (토큰이 유효하지 않은 경우)
          // 에러 메시지를 콘솔에 기록
          console.log(error);
          
          // 경고창을 띄우고, 쿠키에 저장된 토큰을 제거함
          alert('다시 로그인 해주세요');
          removeCookie('accessToken');
          
          // 사용자를 로그인 페이지로 리다이렉트함
          navigate('/');
        }
      } else {
        // 토큰이 없는 경우 (로그인되지 않은 사용자)
        // 경고창을 띄우고, 사용자를 로그인 페이지로 리다이렉트함
        alert('다시 로그인 해주세요');
        navigate('/');
      }
    }

    // verify 함수 실행 (페이지가 로드될 때마다 실행됨)
    verify();
  }, []); // useEffect의 의존성 배열이 빈 배열이므로 한 번만 실행됨


// 특정 음악 장르에 해당하는 음악만 필터링하여 반환하는 함수
const getFilteredMusics = (kinds) => {
  console.log("kind: ", kinds);
  const arr = musics.filter((music) => kinds.includes(music.kind));
  console.log("arr: ", arr);
  return arr;
};

// useAsync 커스텀 훅을 사용하여 음악 데이터를 비동기적으로 가져오는 로직
const [state] = useAsync(getMusics, []); // getMusics 함수를 사용하여 데이터를 비동기적으로 가져옴
const { loading, data: musics, error } = state; // state 객체에서 loading, musics, error 값을 구조 분해

// 로딩 중일 때는 로딩 메시지를 표시
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
// 에러 발생 시 에러 메시지를 표시
if (error) return <div>에러가 발생했습니다.</div>;

// musics가 존재하지 않는 경우 로딩 메시지를 표시
if (!musics) {
  return <div>로딩중입니다.</div>;
}
  

  return (
    <div style={{ display: 'flex', background:'black'}}>
      <CssBaseline />
      {/* <Listb /> */}
      <MainContent style={{color : 'white'}}>
				<div>
          <h1 style={{ paddingBottom: '1vw'}}>차트</h1>
					<h2 style={{ paddingBottom: '1vw'}}>오늘의 TOP 10</h2>
          <Grid container spacing={1}>
            {getFilteredMusics(['한국-발라드', '한국-힙합', '한국-트로트', '한국-동요', '한국-아이돌']).map((music) => (
              <Grid item xs={12} sm={6} md={4} key={music.id}>
                <PlaylistItem style={{display:'flex', alignItems:'center', color :'white'}}>
                  <PlaylistImage 
                    src={`${API_URL}${music.imageUrl}`} 
                    alt={music.name} 
                    onClick={() => {props.onMusic(music)}} 
                  />
                  <PlayIcon 
                    className="play-icon" 
                    fontSize="large" 
                    onClick={() => {props.onMusic(music)}} 
                  />
                  <NavLink to='/login-main/detail' state={{music}} style={{color:'white'}}>
                    <Typography variant="subtitle1" gutterBottom><span style={{fontWeight:"550", fontSize:'22px'}}>{music.name}</span><br/><span style={{fontWeight:"300"}}>{music.singer}</span></Typography>
                  </NavLink>
                </PlaylistItem>
              </Grid>
            ))}
          </Grid>
				</div>
				<div style={{ paddingTop: '2vw'}}>
					<h2 style={{ paddingBottom: '1vw'}}>BILLBOARD TOP 10</h2>
          <Grid container spacing={1}>
            {getFilteredMusics(['POP-솔로', 'POP-힙합', 'POP-락', 'POP-OST']).map((music) => (
              <Grid item xs={12} sm={6} md={4} key={music.id}>
                  <PlaylistItem style={{display:'flex', alignItems:'center', color : 'white'}}>
                    <PlaylistImage 
                      src={`${API_URL}${music.imageUrl}`} 
                      alt={music.name} 
                      onClick={() => {props.onMusic(music)}} 
                    />
                    <PlayIcon 
                      className="play-icon" 
                      fontSize="large" 
                      onClick={() => {props.onMusic(music)}} 
                    />
                    <NavLink to='/login-main/detail' state={{music}} style={{color:'white'}}>
                      <Typography variant="subtitle1" gutterBottom><span style={{fontWeight:"550", fontSize:'22px'}}>{music.name}</span><br/><span style={{fontWeight:"300"}}>{music.singer}</span></Typography>
                    </NavLink>
                </PlaylistItem>
              </Grid>
            ))}
          </Grid>
				</div>
				<div style={{ paddingTop: '2vw'}}>
					<h2 style={{ paddingBottom: '1vw'}}>J-POP TOP 10</h2>
          <Grid container spacing={1}>
            {getFilteredMusics(['일본-아이돌', '일본-애니', '일본-가요', '일본-락']).map((music) => (
              <Grid item xs={12} sm={6} md={4} key={music.id}>
                  <PlaylistItem style={{display:'flex', alignItems:'center',color : 'white'}}>
                    <PlaylistImage 
                      src={`${API_URL}${music.imageUrl}`} 
                      alt={music.name} 
                      onClick={() => {props.onMusic(music)}} 
                    />
                    <PlayIcon 
                      className="play-icon" 
                      fontSize="large" 
                      onClick={() => {props.onMusic(music)}} 
                    />
                    <NavLink to='/login-main/detail' state={{music}} style={{color:'white'}}>
                      <Typography variant="subtitle1" gutterBottom><span style={{fontWeight:"550", fontSize:'22px'}}>{music.name}</span><br/><span style={{fontWeight:"300"}}>{music.singer}</span></Typography>
                    </NavLink>
                  </PlaylistItem>
              </Grid>
            ))}
          </Grid>
				</div>
        <Footer/>
      </MainContent>
      {/* <CustomAudioPlayer playList={playList} /> */}
    </div>
  );
};

export default Chartmusic;
