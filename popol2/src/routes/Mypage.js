import React from 'react';
import { CssBaseline, Toolbar, Container, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink, useNavigate } from 'react-router-dom';
import { getCookie, removeCookie } from "../cookie";
import { API_URL } from "../config/contansts";
import useAsync from "../customHook/useAsync";
import axios from "axios";
import '../scss/Mypage.scss';
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { IoTicketOutline } from "react-icons/io5";



const drawerWidth = 240;

const DrawerContainer = styled('div')({
  width: drawerWidth,
  flexShrink: 0,
});

const MainContent = styled('div')({
  flexGrow: 1,
  padding: 20,
});

// ---------------------------------------------- 
const BoxContainer = styled(Box)({
  border: '3px solid #ccc',
  padding: '50px',
  borderRadius: '8px',
  marginBottom: '20px',
  height: '300px',
  display: 'flex',
  alignItems: 'center',
});
const BoxContainer1 = styled(Box)({
  borderBottom: '3px solid #ccc',
  padding: '20px',
  paddingTop: '100px',
  marginBottom: '20px',
  height: '300px',
  display: 'flex',
  alignItems: 'center',
});
// -----------------------------------------------

const MyPage = () => {
  // const [open, setOpen] = useState(false);
  const login = getCookie('accessToken'); // 쿠키에서 로그인 정보를 가져옴
  const navigate = useNavigate();

  // 마이페이지 정보를 가져오는 비동기 함수 정의
  const getMypage = async () => {
    // const res = await axios.post(`${ API_URL }/user/mypage`, {login})
    try {
      // 서버에 로그인 정보를 전송하여 마이페이지 정보를 가져옴
      // const res = await axios.post(`${ API_URL }/user/mypage`, {login});
      const res = await axios({
        url: `${API_URL}/api/user/mypage`,
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + login
        }
      })
      return res.data; // 가져온 마이페이지 정보 반환
    } catch (error) {
      console.error(error);
    }
  }
  // useAsync 훅을 사용하여 마이페이지 정보를 비동기적으로 가져오기
  const [state] = useAsync(getMypage, []);
  const { loading, data: user, error } = state; //state구조분해 
  // 로딩 중일 때 로딩 메시지 표시
  if (loading) return <div>로딩중 ......</div>
  // 에러 발생 시 에러 메시지 표시하고 로그아웃 후 홈페이지로 이동
  if (error) {
    alert("다시 로그인해주세요");
    removeCookie("accessToken");
    navigate('/');
    return <div>에러가 발생했습니다.</div>
  } 
  if(!user){
      return <div>로딩중입니다.</div>
  }
  // 마이페이지 정보가 없을 때 로딩 메시지 표시
  if (!user) {
    return <div>로딩중입니다.</div>
  }
  // 사용자가 회원 탈퇴 버튼을 클릭했을 때 실행되는 함수
  const secession = async () => {
    // 사용자에게 회원 탈퇴 확인 창 표시
    if (window.confirm("정말 탈퇴하시겠습니까?")) {
      try {
        // 서버에 회원 탈퇴 요청을 보냄
        const response = await axios.delete(`${API_URL}/api/user`, {
          headers: {
            Authorization: `Bearer ${login}`
          }
        });
        if (response.status === 200) {
          // 회원 탈퇴 성공 시 알림을 표시하고 로그아웃 후 홈페이지로 이동
          alert('회원 탈퇴가 완료되었습니다.');
          removeCookie("accessToken");
          navigate('/'); //탈퇴 성공하면 홈페이지로 이동
        }
      } catch (error) {
        // 회원 탈퇴 중 오류 발생 시 에러 메시지 표시
        console.error(error);
        alert('회원 탈퇴 중 오류가 발생했습니다.');
      }
    }
    else {
      // 사용자가 회원 탈퇴를 취소한 경우
      return;
    }
  };
  const style = {
    color: "white"
  };

  return (
    <div id='mypageC' style={{ display: 'flex' }}>
      <CssBaseline />
      {/* <Listb /> */}
      <MainContent>
        <Toolbar />
        <Container>
          <BoxContainer1>
            <AiOutlineUser size={200} style={style}/>
            <div>
              <h3 style={style}>{user.name}님 반갑습니다.</h3>
            </div>
          </BoxContainer1>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <BoxContainer>
                <NavLink to='/login-main/edit' state={{ user }}>
                  <AiOutlineLock id='icon1' size={40} style={style}/>
                  <div id='mp2' style={style}>회원정보 수정</div>
                </NavLink>
              </BoxContainer>
            </Grid>
            <Grid item xs={6}>
              <BoxContainer>
                <NavLink to='/login-main/member'>
                  <IoTicketOutline id='icon1' size={40} style={style}/>
                  <div id='mp2' style={style}>이용권 관리</div>
                </NavLink>
              </BoxContainer>
            </Grid>
          </Grid>
          <button onClick={secession}
            style={{ width: '160px', height: '40px', float: 'right', backgroundColor: '#000', color: '#fff', borderRadius: '8px', border: '2px solid #fff'}}>
            회원 탈퇴
          </button>
        </Container>
      </MainContent>
    </div>
  );
}


export default MyPage;
