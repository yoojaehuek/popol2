import React from 'react';
import { Drawer, List, ListItem, ListItemText} from '@mui/material';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import TodayIcon from '@mui/icons-material/Today';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import EventNoteIcon from '@mui/icons-material/EventNote';
import HeadsetIcon from '@mui/icons-material/Headset';
import MovieIcon from '@mui/icons-material/Movie';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { removeCookie } from "../cookie";

const drawerWidth = 250;

const DrawerContainer = styled('div')({
  width: drawerWidth,
  flexShrink: 0,
});

const ListItemContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Listb = () => {
  
  const logout = () => {
    removeCookie("accessToken");
    window.location.replace("/");
  }

  return(
    <DrawerContainer>
      <Drawer variant="permanent" sx={{width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, zIndex:'0'} }}>
        <List style={{height : '100%', background : 'rgb(0, 0, 0)'}}>
          <NavLink to='/login-main/musics'><h2 style={{color: 'white', textAlign: 'center', fontSize: '2rem', marginBottom: '2vw', marginTop: '1vw'}}>Music<span style={{color:  "lightseagreen"}}>Hub</span></h2></NavLink>
          <ListItem button  style={{ padding: '8px 16px', justifyContent: 'start' }}>
            <NavLink to='/login-main/user/mypage' style={{color: '#fff'}}>
              <ListItemContainer>
                <PersonIcon style={{ color: 'white', marginRight: '5px' }} /> 
                <ListItemText style={{color: 'white'}} primary="Mypage" />
              </ListItemContainer>
            </NavLink>
          </ListItem>
          <ListItem button  style={{ marginTop: '2vw', padding: '8px 16px', justifyContent: 'start' }}>
            <NavLink to='/login-main/musics'>
              <ListItemContainer>
                <TodayIcon style={{ color: 'white', marginRight: '5px' }} /> 
                <ListItemText style={{color: 'white'}} primary="투데이" />
              </ListItemContainer>
            </NavLink>
          </ListItem>
          <ListItem button  style={{ padding: '8px 16px', justifyContent: 'start' }}>
            <NavLink to='/login-main/chart'>
              <ListItemContainer>
                <BarChartIcon style={{ color: 'white', marginRight: '5px' }} /> 
                <ListItemText style={{color: 'white'}} primary="차트" />
              </ListItemContainer>
            </NavLink>
          </ListItem>
          <ListItem button  style={{ padding: '8px 16px', justifyContent: 'start' }}>
            <NavLink to='/login-main/new'>
              <ListItemContainer>
                <NewReleasesIcon style={{ color: 'white', marginRight: '5px' }} /> 
                <ListItemText style={{color: 'white'}} primary="최신 음악" />
              </ListItemContainer>
            </NavLink>
          </ListItem>
          <ListItem button  style={{ padding: '8px 16px', justifyContent: 'start' }}>
            <NavLink to='/login-main/month'>
              <ListItemContainer>
                <EventNoteIcon style={{ color: 'white', marginRight: '5px' }} /> 
                <ListItemText style={{color: 'white'}} primary="이달의 노래" />
              </ListItemContainer>
            </NavLink>
          </ListItem>
          <ListItem button  style={{ padding: '8px 16px', justifyContent: 'start' }}>
            <NavLink to='/login-main/dj'>
              <ListItemContainer>
                <HeadsetIcon style={{ color: 'white', marginRight: '5px' }} /> 
                <ListItemText style={{color: 'white'}} primary="DJ 스테이션" />
              </ListItemContainer>
            </NavLink>
          </ListItem>
          <ListItem button style={{ marginTop: '2vw', padding: '8px 16px', justifyContent: 'start' }}>
            <NavLink to='/login-main/playlist'>
              <ListItemContainer>
                <ListAltIcon style={{ color: 'white', marginRight: '5px' }} /> 
                <ListItemText style={{color: 'white'}} primary="플레이리스트" />
              </ListItemContainer>
            </NavLink>
          </ListItem>
          <ListItem button style={{ padding: '8px 16px', justifyContent: 'start' }}>
            <NavLink to='/login-main/video'>
              <ListItemContainer>
                <MovieIcon style={{ color: 'white', marginRight: '5px' }} /> 
                <ListItemText style={{color: 'white'}} primary="내돈내산" />
              </ListItemContainer>
            </NavLink>
          </ListItem>
          <ListItem button>
            <NavLink to='/uploader'>
              <ListItemContainer>
                <FileUploadIcon style={{ color: 'white', marginRight: '5px' }} /> 
                <ListItemText style={{color: 'white'}} primary="음악 업로드" />
              </ListItemContainer>
            </NavLink>
          </ListItem>
          <ListItem button  style={{ marginTop: '5vw', padding: '8px 16px', justifyContent: 'start' }}>
            <NavLink onClick={logout} style={{ textDecoration: 'none' }}>
              <ListItemContainer>
                <LogoutIcon style={{color :'white', marginRight: '5px', position:'relative' , top:'4px'}}/>
                <ListItemText style={{ color: 'white' }} primary="로그아웃" />
              </ListItemContainer>
            </NavLink>
          </ListItem>
        </List>
      </Drawer>
    </DrawerContainer>
  );
}

export default Listb;
