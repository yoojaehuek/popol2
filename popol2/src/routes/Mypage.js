import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, CssBaseline, AppBar, Toolbar, Container, Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink, useNavigate } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
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
  marginBottom: '20px',
  height: '400px',
  display: 'flex',
  alignItems: 'center',
});
// -----------------------------------------------

const MyPage = () => {
  const [open, setOpen] = useState(false);
  const login = getCookie('accessToken');
  const navigate = useNavigate();
  
  const getMypage = async () => {
    // const res = await axios.post(`${ API_URL }/user/mypage`, {login})
    try {
      // const res = await axios.post(`${ API_URL }/user/mypage`, {login});
      const res = await axios({
        url: `${ API_URL }/user/mypage`,
        method: 'POST',
        headers: {
          Authorization: 'Bearer '+ login
        }
      })
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }

  const [state ] = useAsync(getMypage, []);
  const { loading, data:user, error} = state; //state구조분해 
  if(loading) return <div>로딩중 ......</div>
  if(error){
    alert("다시 로그인해주세요");
    navigate('/');
    return <div>에러가 발생했습니다.</div>
  } 
  if(!user){
      return <div>로딩중입니다.</div>
  }


  const handleToggle = () => {
    setOpen(!open);
  };

  const secession = async () => {
    if(window.confirm("정말 탈퇴하시겠습니까?")) {
      try {
      const response = await axios.delete(`${API_URL}/user`, {
        headers: {
          Authorization: `Bearer ${login}`
        }
      });
      if (response.status === 200) {
        alert('회원 탈퇴가 완료되었습니다.');
        removeCookie("accessToken");
        navigate('/'); //탈퇴 성공하면 홈페이지로 이동
      }
    } catch (error) {
      console.error(error);
      alert('회원 탈퇴 중 오류가 발생했습니다.');
    }}
    else{
      return;
    }
  };
  const style = {
    color: "black"
  };

  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, marginLeft: `${drawerWidth}px` }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            마이페이지
          </Typography>
        </Toolbar>
      </AppBar>
      <DrawerContainer>
        <Toolbar />
        <Drawer variant="permanent" sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth } }}>
          <Toolbar />
          <List>
          <ListItem button>
              <NavLink to='/musics'><ListItemText primary="메인" /></NavLink>
            </ListItem>
            <ListItem button onClick={handleToggle}>
              <ListItemText primary="내 정보" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <NavLink to='/edit'><ListItemText primary="회원정보 수정" /></NavLink>
                </ListItem>
                <ListItem button>
                  <NavLink to='/member'><ListItemText primary="이용권 관리" /></NavLink>
                </ListItem>
              </List>
            </Collapse>
            <ListItem button>
              <NavLink to='/playlist'><ListItemText primary="플레이리스트" /></NavLink>
            </ListItem>
          </List>
        </Drawer>
      </DrawerContainer>
      <MainContent>
        <Toolbar />
        <Container>
          <BoxContainer1>
            <AiOutlineUser size={100}/>
            <div>
              <h3>{user.name}님 반갑습니다.</h3>
              <p>이번달 등급은 xxx입니다.</p>
            </div>
          </BoxContainer1>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <BoxContainer>
                <NavLink to='/edit'>
                  <AiOutlineLock id='icon1' size={40}/>
                  <h2>회원정보 수정</h2>
                  </NavLink>
              </BoxContainer>
            </Grid>
            <Grid item xs={6}>
              <BoxContainer>
                <NavLink to='/member'>
                <IoTicketOutline id='icon1' size={40}/>
                  <h2>이용권 관리</h2>
                  </NavLink>
              </BoxContainer>
            </Grid>
          </Grid>
          <button onClick={secession} 
          style={{ width: '80px', float: 'right', backgroundColor: '#fff'}}>
            회원 탈퇴
          </button>
        </Container>
      </MainContent>
    </div>
  );
};

export default MyPage;
