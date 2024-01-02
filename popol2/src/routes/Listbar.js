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
import { removeCookie } from "../cookie";

const drawerWidth = 245;

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
          <h2 style={{color:'white', paddingLeft:'20px'}}>MusciHub</h2>
          <ListItem button>
            <NavLink to='/user/mypage' style={{color: '#fff'}}>
              <ListItemContainer>
                <PersonIcon style={{ color: 'white', marginRight: '5px' }} /> 
                <ListItemText style={{color: 'white'}} primary="Mypage" />
              </ListItemContainer>
            </NavLink>
          </ListItem>
          <ListItem button style={{ marginTop: '2vw' }}>
            <NavLink to='/musics'>
              <ListItemContainer>
                <TodayIcon style={{ color: 'white', marginRight: '5px' }} /> 
                <ListItemText style={{color: 'white'}} primary="투데이" />
              </ListItemContainer>
            </NavLink>
          </ListItem>
          <ListItem button>
            <NavLink to='/chart'>
              <ListItemContainer>
                <BarChartIcon style={{ color: 'white', marginRight: '5px' }} /> 
                <ListItemText style={{color: 'white'}} primary="차트" />
              </ListItemContainer>
            </NavLink>
          </ListItem>
          <ListItem button>
            <NavLink to='/new'>
              <ListItemContainer>
                <NewReleasesIcon style={{ color: 'white', marginRight: '5px' }} /> 
                <ListItemText style={{color: 'white'}} primary="최신 음악" />
              </ListItemContainer>
            </NavLink>
          </ListItem>
          <ListItem button>
            <NavLink to='/month'>
              <ListItemContainer>
                <EventNoteIcon style={{ color: 'white', marginRight: '5px' }} /> 
                <ListItemText style={{color: 'white'}} primary="이달의 노래" />
              </ListItemContainer>
            </NavLink>
          </ListItem>
          <ListItem button>
            <NavLink to='/dj'>
              <ListItemContainer>
                <HeadsetIcon style={{ color: 'white', marginRight: '5px' }} /> 
                <ListItemText style={{color: 'white'}} primary="DJ 스테이션" />
              </ListItemContainer>
            </NavLink>
          </ListItem>
          <ListItem button style={{ marginTop: '2vw' }}>
            <NavLink to='/playlist'>
              <ListItemContainer>
                <ListAltIcon style={{ color: 'white', marginRight: '5px' }} /> 
                <ListItemText style={{color: 'white'}} primary="플레이리스트" />
              </ListItemContainer>
            </NavLink>
          </ListItem>
          <ListItem button>
            <NavLink to='/video'>
              <ListItemContainer>
                <MovieIcon style={{ color: 'white', marginRight: '5px' }} /> 
                <ListItemText style={{color: 'white'}} primary="내돈내산" />
              </ListItemContainer>
            </NavLink>
          </ListItem>
          <ListItem button style={{ marginTop: '10vw' }}>
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
