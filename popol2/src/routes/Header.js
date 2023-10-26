import React from "react";
import "../scss/Header.scss";
import logo from '../img/banners/logo5.jpg'; // 이미지 파일 경로로 수정
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="inner">
        <div className="headerimg">
          <NavLink to="/">
            <img src={logo} alt="로고" />
          </NavLink>
        </div>
        <ul className="headtext nav">
          <li>
            <NavLink to="/Join">가입하기</NavLink>
          </li>
          <li>
            <NavLink to="/Login">로그인</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;