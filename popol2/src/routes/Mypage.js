import React from 'react';
import { useState, useEffect } from 'react';
import "../scss/Mypage.scss";
import Sidebar from './Sidebar';

function MyPage() {
  // 사용자 정보를 저장할 상태 변수
  const [user, setUser] = useState({
    username: '사용자 이름',
    email: 'user@example.com',
    // 다른 사용자 정보 필드 추가
  });

  return (
    
    <div className="my-page">
      <div className='main'>
        <Sidebar></Sidebar>
      </div>
      <div className="user-info">
        <div>
          
        </div>
        <div>
          
        </div>
        {/* 다른 사용자 정보 표시 */}
      </div>
    </div>
  );
}


export default MyPage;
