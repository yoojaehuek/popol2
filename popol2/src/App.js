import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './routes/Header';
import Footer from './routes/Footer';
import Main from './routes/Main';
import Login from './routes/Login.tsx';
import Join from './routes/Join.tsx';
import Playlist from './routes/Playlist';
import Mypage from './routes/Mypage';
import Musics from './routes/Musics';
import Uploader from './routes/Uploader';
import Payment from './routes/Payment.tsx';
import SuccessPage from './routes/Success';
import Simple from './routes/ChatBot';
import FailPage from './routes/Fail';
import Dash from './routes/Dash';
import EditProfile from './routes/EditProfile';
import MembershipManagement from './routes/Membershipmang';
import MusicDetail from './routes/MusicDetail'
import Dj from './routes/dj';
import Chart from './routes/chart';
import Monthmusic from './routes/monthmusic';
// import Newchart from './routes/newchart';

function App() {
  const location = useLocation();
  const hidePages = ['/playlist', '/user/mypage', '/musics', '/music', '/dash', '/uploader', '/dj', '/month', "/chart"];
  const Hide = hidePages.includes(location.pathname);

  return (
    <div className="App">
      {!Hide && <Header />}
      <Routes>
        {/* a */}
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/fail" element={<FailPage />} />

        {/* b */}
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/user/mypage" element={<Mypage />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/member" element={<MembershipManagement />} />
        <Route path="/musics" element={<Musics />} />
        <Route path="/detail" element={<MusicDetail />} />
        <Route path="/dj" element={<Dj />} />
        <Route path="/month" element={<Monthmusic />} />
        <Route path="/chart" element={<Chart />} />

        {/* c */}
        <Route path="/dash" element={<Dash/>} />
        <Route path="/uploader" element={<Uploader />} />

        {/* out */}
        <Route path="/chatbot" element={<Simple />} />
      </Routes>
      {!Hide && <Footer />}
    </div>
  );
}

export default App;
