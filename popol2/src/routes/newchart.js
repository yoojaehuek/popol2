import React from 'react';
import { CssBaseline, Container, Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import Listb from './Listbar';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Footer from './Footer';

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
  { id: 1, imageUrl: './logo192.png', artist: '아티스트 1', title: '플레이리스트 1' },
  { id: 2, imageUrl: './logo192.png', artist: '아티스트 2', title: '플레이리스트 2' },
  { id: 3, imageUrl: './logo192.png', artist: '아티스트 3', title: '플레이리스트 3' },
  { id: 4, imageUrl: './logo192.png', artist: '아티스트 4', title: '플레이리스트 4' },
  { id: 1, imageUrl: './logo192.png', artist: '아티스트 1', title: '플레이리스트 1' },
  { id: 2, imageUrl: './logo192.png', artist: '아티스트 2', title: '플레이리스트 2' },
  { id: 3, imageUrl: './logo192.png', artist: '아티스트 3', title: '플레이리스트 3' },
  { id: 4, imageUrl: './logo192.png', artist: '아티스트 4', title: '플레이리스트 4' },
];

const NewChart = () => {
  return (
    <div style={{ display: 'flex', background:'black'}}>
      <CssBaseline />
      <Listb />
      <MainContent>
        <div>
          <h1 style={{color : 'white'}}>최신 앨범</h1>
          <Grid container spacing={2}>
            {playlists.map((playlist) => (
              <Grid item xs={12} sm={6} md={2} key={playlist.id}>
                <NavLink to='/detail'>
                  <PlaylistItem style={{color : 'white'}}>
                    <PlaylistImage src={playlist.imageUrl} alt={playlist.title} />
                    <PlayIcon className="play-icon" fontSize="large" />
                    <Typography variant="subtitle1" gutterBottom>{playlist.artist}</Typography>
                    <Typography variant="body1">{playlist.title}</Typography>
                  </PlaylistItem>
                </NavLink>
              </Grid>
            ))}
          </Grid>
          <Footer/>
        </div>
      </MainContent>
    </div>
  );
};

export default NewChart;