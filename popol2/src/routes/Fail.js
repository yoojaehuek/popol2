import React from 'react';
import { NavLink } from 'react-router-dom';

export function FailPage() {
  return (
    <div>
      <h1>결제 실패 페이지</h1>
      <p>결제가 실패</p>
      <NavLink to ='/'><button>메인</button></NavLink>
    </div>
  );
}

export default FailPage;