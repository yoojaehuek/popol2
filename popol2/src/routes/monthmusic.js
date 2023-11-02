import React from 'react';
import { CssBaseline, Container, Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import Listb from './Listbar';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import Footer from './Footer'

const MainContent = styled('div')({
  padding: '2vw',
});

const PlaylistItem = styled(Box)({
  // border: '1px solid #ccc',
  // padding: '20px',
  borderRadius: '8px',
  // margin: '10px',
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
  width: '5%',
  transition: 'opacity 0.3s ease',
});

const PlayIcon = styled(PlayArrowIcon)({
  position: 'absolute',
  bottom: '5%',
  left: '2.5%',
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

const Monthmusic = () => {
  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <Listb />
      <MainContent>
				<div>
          <h1 style={{ paddingBottom: '1vw'}}>이달의 차트</h1>
          <Grid container spacing={1}>
            {playlists.map((playlist) => (
              <Grid item xs={12} sm={6} md={12} key={playlist.id}>
                <NavLink to='/detail'>
                  <PlaylistItem style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <PlaylistImage src={playlist.imageUrl} alt={playlist.title} />
                    <PlayIcon className="play-icon" fontSize="large" />
                    <Typography variant="subtitle1" gutterBottom>{playlist.artist}</Typography>
										<Typography variant="subtitle" gutterBottom>{playlist.title}</Typography>
										<div>
										<FastForwardIcon style={{marginRight: '1vw'}}/>
										<FavoriteIcon style={{marginRight: '1vw'}}/>
										<MoreHorizSharpIcon/>
										</div>
									</PlaylistItem>
                </NavLink>
              </Grid>
            ))}
          </Grid>
					</div>
      </MainContent>
    </div>
  );
};

export default Monthmusic;
