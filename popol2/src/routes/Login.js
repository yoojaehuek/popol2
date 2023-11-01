import React from "react";
import axios from 'axios';
import '../scss/Login.scss';
import { BsGoogle } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { setCookie } from '../cookie';
import { API_URL } from '../config/contansts'

const Login = () => {
  const navigate = useNavigate();

	const onLogin = async (e) => {
		e.preventDefault();
		// console.log(e.target.id.value);
		const id = e.target.id.value;
		const pwd = e.target.pwd.value;
		await axios.post(`${API_URL}/login`,{id,pwd})
			.then((res)=>{
				if (res.status === 200) {
					const accessToken = res.data.accessToken;
					setCookie('accessToken',accessToken,{
						// expires: new Date(Date.now() + setTime),
                        // httpOnly: true,
					});
				}
				
				console.log("로그인 성공 res: ",res);
				navigate('/');
			})
			.catch((error)=>{
				console.error("로그인 실패: ",error);
			})
	}

    return(
        <form id="login-form" onSubmit={onLogin}>
            <div id="login-form-top">
                <h2>Service_Name</h2>
                <h2>로그인 하기</h2>
            </div>
            <div id="middle">
                <ul id="login-input">
                    <li>
                        <h5>아이디</h5>
                        <input id="id" type="text" placeholder="아이디"/>
                    </li>
                    <li>
                        <h5>비밀번호</h5>
                        <input id="pwd" type="password" placeholder="비밀번호"/>
                    </li>
                    <li>
                        <div id="toggle-box">
                            <input type="checkbox" id="toggle" hidden/>
                            <label for="toggle" className="toggleSwitch">
                                <span className="toggleButton"></span>
                            </label>
                            <span id="toggle-txt">자동 로그인</span>
                        </div>
                    </li>
                </ul>

        
                <li>
                    <button id="Login-btn" type="submit">로그인 하기</button>
                    <div id="find-id"> <a href="">ID/PW찾기</a> <a href="">회원가입</a> </div>
                </li>
            </div>

            <div>
                <ul id="interwork">
                    <li><div><AiFillMessage/></div><div>카카오로 로그인하기</div></li>
                    <li><div><BsGoogle/></div><div>구글로 로그인하기</div></li>
                </ul>
            </div>

        </form>
    )
}

export default Login;