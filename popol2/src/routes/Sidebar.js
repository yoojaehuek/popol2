import React from 'react';
import '../scss/Sidebar.scss'; // 스타일 파일 임포트

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>메인</h3>
      <h3>내 정보</h3>
      <h3>플레이리스트</h3>
    </div>
  );
}

export default Sidebar;