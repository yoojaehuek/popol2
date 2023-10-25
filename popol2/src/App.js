import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './routes/Header';
import Footer from './routes/Footer';
import Main from './routes/Main';
import Login from './routes/Login';
import Join from './routes/Join';
import Playlist from './routes/Playlist';
import Mypage from './routes/Mypage';
import Musics from './routes/Musics';
import Uploader from './routes/Uploader';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/Join' element={<Join></Join>}></Route>
        <Route path='/playlist' element={<Playlist></Playlist>}></Route>
        <Route path='/mypage' element={<Mypage></Mypage>}></Route>
        <Route path='/music' element={<Musics></Musics>}></Route>
        <Route path='/uploader' element={<Uploader></Uploader>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;