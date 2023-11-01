import React, { useEffect } from "react";
import "../scss/Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../cookie";

const Header = () => {
  const navigate = useNavigate();
  if(getCookie("accessToken")){ //쿠키가 있으면
    //토큰검증 요청
      //성공 -> userName 반환 받음 -> 반환 받은 이름으로 로그인 버튼 변경
      //실패(토큰만료) -> 재로그인 알림 보내기?
    
  }else{ //쿠키가 아예 없을때
    //로그인 한번도 안한거니까 아무것도 안함
  }
  // useEffect( async() => {

  // }, [])
  
  const Ck_Cookie = ()=>{
    if (getCookie('accessToken')) {
      return navigate(`/mypage`)
    }else{
      return alert('로그인을 해주세요');
      //로그인 페이지로 이동
    }
  }
  const Logout = ()=>{
    removeCookie('login');
    navigate('/');
  }
  return (
    <div id="header">
      <div className="inner">
        <h1>
          <NavLink to="/">
            <a href="/">로고</a>
            <img src="./img/banners/logo.png" alt="" />
          </NavLink>
        </h1>
        {getCookie('login') == null ? 
          <ul className="headtext nav">
            <li>
              <NavLink to="/Join">가입하기</NavLink>
            </li>
            <li>
              <NavLink to="/Login">로그인</NavLink>
            </li>
          </ul>
        : 
          <ul className="headtext nav">
            <li>
              <NavLink onClick={Ck_Cookie}>아이디</NavLink>
            </li>
            <li>
              <NavLink onClick={Logout}>로그아웃</NavLink>
            </li>
          </ul>
        }
        
      </div>
    </div>
  );
};

export default Header;