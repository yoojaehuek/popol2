import React from 'react';
import { Drawer, List, ListItem, ListItemText, CssBaseline, AppBar, Toolbar, Container, Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const DrawerContainer = styled('div')({
  width: drawerWidth,
  flexShrink: 0,
});

const MainContent = styled('div')({
  flexGrow: 1,
  padding: 20,
});

const PlaylistItem = styled(Box)({
  border: '1px solid #ccc',
  padding: '20px',
  borderRadius: '8px',
  margin: '10px',
  textAlign: 'center',
});

const playlists = [
  { id: 1, imageUrl: './logo192.png', artist: '아티스트 1', title: '플레이리스트 1' },
  { id: 2, imageUrl: './logo192.png', artist: '아티스트 2', title: '플레이리스트 2' },
  { id: 3, imageUrl: './logo192.png', artist: '아티스트 3', title: '플레이리스트 3' },
  { id: 4, imageUrl: './logo192.png', artist: '아티스트 4', title: '플레이리스트 4' },
  { id: 1, imageUrl: './logo192.png', artist: '아티스트 1', title: '플레이리스트 1' },
  { id: 2, imageUrl: './logo192.png', artist: '아티스트 2', title: '플레이리스트 2' },
  { id: 3, imageUrl: './logo192.png', artist: '아티스트 3', title: '플레이리스트 3' },
  { id: 4, imageUrl: './logo192.png', artist: '아티스트 4', title: '플레이리스트 4' },
];

const PlayList = () => {
  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, marginLeft: `${drawerWidth}px` }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            플레이 리스트
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
          <Grid container spacing={2}>
            {playlists.map((playlist) => (
              <Grid item xs={12} sm={6} md={3} key={playlist.id}>
                <NavLink to='/detail'>
                <PlaylistItem>
                  <img src={playlist.imageUrl} alt={playlist.title} style={{ marginBottom: '10px', width: '100%' }} />
                  <Typography variant="subtitle1" gutterBottom>{playlist.artist}</Typography>
                  <Typography variant="body1">{playlist.title}</Typography>
                </PlaylistItem>
                </NavLink>
              </Grid>
            ))}
          </Grid>
        </Container>
      </MainContent>
    </div>
  );
};

export default PlayList;
