import React from "react";
import '../scss/Join.scss';
import { BsGoogle } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
const Join = () => {
    return(
        <form id="join-form" action="">
        <div id="join-form-top">
            <h2>간편하게 가입하고</h2>
            <h2>음악의 세계로 뛰어드세요</h2>
        </div>
        <div>
            <ul id="login-input">
                <li>
                    <h5>이메일</h5>
                    <input type="text" placeholder="이메일"/>
                </li>
                <li>
                    <h5>비밀번호</h5>
                    <input type="password" placeholder="비밀번호"/>
                </li>
                <li>
                    <h5>비밀번호 확인</h5>
                    <input type="password" placeholder="비밀번호"/>
                </li>
            </ul>
        </div>

        <fieldset>
            <legend>또는</legend>
            <ul id="interwork">
                <li><div><AiFillMessage/></div><div>카카오로 로그인하기</div></li>
                <li><div><BsGoogle/></div><div>구글로 로그인하기</div></li>
            </ul>
        </fieldset>

    </form>
    
    )
}

export default Join;