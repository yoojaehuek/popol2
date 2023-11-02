import React from 'react';
import { CssBaseline, Container, Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import Listb from './listbar';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const MainContent = styled('div')({
  flexGrow: 1,
  padding: 20,
});

const PlaylistItem = styled(Box)({
  // border: '1px solid #ccc',
  padding: '20px',
  borderRadius: '8px',
  margin: '10px',
  textAlign: 'center',
  position: 'relative',
  '&:hover .play-icon': {
    opacity: 1,
  },
  '&:hover img': {
    opacity: 0.8,
  },
});

const PlaylistImage = styled('img')({
  marginBottom: '10px',
  width: '80%',
  transition: 'opacity 0.3s ease',
});

const PlayIcon = styled(PlayArrowIcon)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: 0,
  transition: 'opacity 0.3s ease',
});

const playlists = [
  { id: 1, imageUrl: './logo192.png'},
  { id: 2, imageUrl: './logo192.png'},
  { id: 3, imageUrl: './logo192.png'},
  { id: 4, imageUrl: './logo192.png'},
  { id: 1, imageUrl: './logo192.png'},
  { id: 2, imageUrl: './logo192.png'},
  { id: 3, imageUrl: './logo192.png'},
  { id: 4, imageUrl: './logo192.png'},
];

const Dj = () => {
  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <Listb />
      <MainContent>
        <Container>
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
        </Container>
      </MainContent>
    </div>
  );
};

export default Dj;
