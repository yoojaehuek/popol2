import React from 'react';
import { Drawer, List, ListItem, ListItemText, CssBaseline, AppBar, Toolbar, Container, Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import SimpleChatBot from './Chatbot';

const drawerWidth = 240;

const DrawerContainer = styled('div')({
  width: drawerWidth,
  flexShrink: 0,
});

const Listb = () => {
  return(
<DrawerContainer style={{ height: '80vh' }}>
<Toolbar />
<Drawer variant="permanent" sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth } }}>
  <Toolbar />
  <List>
    <ListItem button>
      <NavLink to='/musics'><ListItemText primary="투데이" /></NavLink>
    </ListItem>
    <ListItem button>
      <NavLink to='/chart'><ListItemText primary="차트" /></NavLink>
    </ListItem>
    <ListItem button>
      <NavLink to='/new'><ListItemText primary="최신 음악" /></NavLink>
    </ListItem>
    <ListItem button>
      <NavLink to='/month'><ListItemText primary="이달의 노래" /></NavLink>
    </ListItem>
    <ListItem button>
      <NavLink to='/dj'><ListItemText primary="DJ 스테이션" /></NavLink>
    </ListItem>
    <ListItem button style={{ marginTop: '2vw' }}>
            <NavLink to='/playlist'><ListItemText primary="플레이리스트" /></NavLink>
          </ListItem>
          <ListItem style={{ paddingTop: '8vw' }}>
            <SimpleChatBot />
            <button>로그아웃</button>
          </ListItem>
        </List>
      </Drawer>
    </DrawerContainer>
  );
}
export default Listb