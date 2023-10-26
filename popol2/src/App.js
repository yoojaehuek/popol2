import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './routes/Header';
import Footer from './routes/Footer';
import Main from './routes/Main';
import Mypage from './routes/Mypage';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/mypage' element={<Mypage></Mypage>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;