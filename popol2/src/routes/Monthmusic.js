import React, { useState } from 'react';
import { CssBaseline, Box, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink, useNavigate } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Footer from './Footer'
import axios from 'axios';
import { getCookie, removeCookie } from "../cookie";
import { API_URL } from '../config/contansts';
import useAsync from '../customHook/useAsync';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter, TablePagination, } from "@material-ui/core";

const MainContent = styled('div')({
  padding: '2vw',
});

const TableCellStyle = {
  borderRadius: '8px',
  textAlign: 'center',
  position: 'relative',
  '&:hover .play-icon': {
    opacity: 1,
    cursor: 'pointer',
  },
  '&:hover img': {
    opacity: 0.8,
    cursor: 'pointer',
  },
};       

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

const Monthmusic = (props) => {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  };

  //전체곡 조회함수
  const getMusics = async () => {
    const res = await axios.get(`${API_URL}/api/musics`);
    console.log("res.data:", res.data);
    return res.data;
  };

  const [state] = useAsync(getMusics, []);
  const { loading, data: musics, error } = state; //state구조분해
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
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!musics) {
    return <div>로딩중입니다.</div>;
  }

  const addPlayList = async (music) => {
    const login = getCookie('accessToken');
    if (getCookie('accessToken') != null) {
      await axios({
        url: `${API_URL}/api/playlist`,
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + login
        },
        data: {
          playList: music,
        }
      })
      .then(() => {
        alert("추가되었습니다!");
      })
      .catch(err => {
        console.error(err);
      });
    }else {
      alert('다시 로그인해주세요');
      removeCookie('accessToken');
      navigate('/');
    }
  }

  const White = {
    color: "white"
  };

  const paginatedMusics = musics.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return (
    <div style={{ display: 'flex', background: 'black' }}>
      <CssBaseline />
      <MainContent style={{ color: 'white' }} className='mcmain'>
          <h1 style={{ paddingBottom: '1vw' }}>이달의 차트</h1>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell style={White}>순위</TableCell>
                    <TableCell style={{color: 'white'}}>앨범</TableCell>
                    <TableCell style={White}>제목</TableCell>
                    <TableCell style={White}>가수</TableCell>
                    <TableCell style={White}>재생/담기</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedMusics.map((music, index) => (
                    <TableRow key={music.id}>
                      <TableCell style={White}>{(index + 1)+10*page}</TableCell>
                      <TableCell>
                        <NavLink to='/login-main/detail' state={{ music }} style={White}>
                          <PlaylistImage style={{ width: '60px', height: '60px'}} src={API_URL + music.imageUrl} alt={music.name}  />
                          <PlayIcon className="play-icon" fontSize="large" />
                        </NavLink>
                      </TableCell>
                      <TableCell style={{ width: 'fitContent'}}>
                        <NavLink to='/login-main/detail' state={{ music }} style={White}>
                          <Typography variant="subtitle1" gutterBottom>{music.name}</Typography>
                        </NavLink>
                      </TableCell>
                      <TableCell style={{}}>
                        <NavLink to='/login-main/detail' state={{ music }} style={White}>
                          <Typography variant="subtitle1" gutterBottom>{music.singer}</Typography>
                        </NavLink>
                      </TableCell>
                      <TableCell style={White}>
                        <PlayArrowIcon style={{ cursor: 'pointer' }} onClick={() => { props.onMusic(music) }} />
                        <PlaylistAddIcon style={{ cursor: 'pointer' }} onClick={() => { addPlayList(music) }} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      count={musics.length}
                      page={page}
                      rowsPerPage={rowsPerPage}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                      style={{ backgroundColor: 'white'}}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
              {/* <Stack spacing={2}>
                <Pagination count={10} shape="rounded" style={{color: '#fff'}} />
              </Stack> */}
            </TableContainer>
          <Footer />
      </MainContent>
    </div>
  );
};

export default Monthmusic;
