import React from "react";
import "../scss/Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="inner">
        <h1>
          <NavLink to="/">
            <a href="/">로고</a>
            <img src="./img/banners/logo.png" alt="" />
          </NavLink>
        </h1>
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