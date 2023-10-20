import React from "react";
import '../scss/Login.scss';
import { BsGoogle } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
const Footer = () => {
    return(
        <form id="login-form" action="">
            <h1>Spotify에 로그인하기</h1>
            <div>
                <ul>
                    <li><div><BsGoogle/></div>Google로 계속하기</li>
                    <li><div><BsFacebook/></div>Facebook으로 계속하기</li>
                    <li><div><BsApple/></div>Apple로 계속하기</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <h5>이메일또는 사용자 이름</h5>
                        <input type="text" />
                    </li>
                    <li>
                        <h5>비밀번호</h5>
                        <input type="password" />
                    </li>
                </ul>
                <div id="toggle-box">
                    <input type="checkbox" id="toggle" hidden/>
                    <label for="toggle" class="toggleSwitch">
                        <span class="toggleButton"></span>
                    </label>
                    <span id="toggle-txt">내 정보 기억하기</span>
                </div>
        
                <li><button id="Login-btn">로그인 하기</button></li>
        
                <a>비밀번호를 잊었나요</a>
            </div>
        </form>
    )
}

export default Footer;