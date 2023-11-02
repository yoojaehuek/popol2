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
import Simple from './routes/Chatbot';
import FailPage from './routes/Fail';
import Dash from './routes/Dash';
import EditProfile from './routes/Editprofile';
import MembershipManagement from './routes/Membershipmang';
import MusicDetail from './routes/MusicDetail'
import Dj from './routes/Dj';
// import Chart from './routes/chart';
// import Monthmusic from './routes/monthmusic';
import NewChart from './routes/NewChart';
import Video from './routes/video';

function App() {
  const location = useLocation();
  const hideFooterPages = ['/playlist', '/mypage', '/musics', '/music', '/dash', '/uploader', '/dj', '/new', '/video'];

  const HideFooter = hideFooterPages.includes(location.pathname);

  const location1 = useLocation();
  const hideHeaderPages = ['/playlist', '/mypage', '/musics', '/music', '/dash', '/uploader', '/dj', '/new', '/video'];

  const HideHeader = hideHeaderPages.includes(location1.pathname);

  return (
    <div className="App">
      {!HideHeader && <Header />}
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
        <Route path='/new' element={<NewChart/>} />
        <Route path='/video' element={<Video/>} />

        {/* c */}
        <Route path="/dash" element={<Dash />} />
        <Route path="/uploader" element={<Uploader />} />

        {/* out */}
        <Route path="/chatbot" element={<Simple />} />
      </Routes>
      {!HideFooter && <Footer />}
    </div>
  );
}

export default App;
