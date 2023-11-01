import React from "react";
import { getCookie } from "../cookie";
import { API_URL } from "../config/contansts";
import useAsync from "../customHook/useAsync";
import '../scss/Mypage.scss';
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Mypage = () => {
  const login = getCookie('accessToken');
  const navigate = useNavigate();
  
  const getMypage = async () => {
    // const res = await axios.post(`${ API_URL }/user/mypage`, {login})
    try {
      // const res = await axios.post(`${ API_URL }/user/mypage`, {login});
      const res = await axios({
        url: `${ API_URL }/user/mypage`,
        method: 'POST',
        headers: {
          Authorization: 'Bearer '+ login
        }
      })
      // console.log("getMypage res: ",res.data.name);
      
      return res.data;
    } catch (error) {
      console.error(error);
    }
    // if (res) {
      
    // }
      // .then((res)=>{
      //   if (res.status === 201) {
      //     console.log("access토큰 검증 성공");
      //   }else if(res.status === 400){
      //     console.log("accessToken만료 or 로그인 안함");
      //   }
      // }).catch((err)=> {
      //   console.error(err);
      // });
  }

  const [state ] = useAsync(getMypage, []);
  const { loading, data:user, error} = state; //state구조분해 
  if(loading) return <div>로딩중 ......</div>
  if(error){
    alert("다시 로그인해주세요");
    navigate('/');
    return <div>에러가 발생했습니다.</div>
  } 
  if(!user){
      return <div>로딩중입니다.</div>
  }
  return(
    <>
       <div id="container">
    {/* <div id="toptop">
      <div id="topMenu"> 
        <div className="profile">
          <img src={'images/profile.png'}/>
          <p>김준녕</p>
        </div>
        <a href="#" className="logout">로그아웃</a>
      </div>
    </div> */}
    
  <div id="gamssa">
      <nav id="leftMenu">
        <div id="logo">
          <img src={'images/logo.png'}/>
        </div>
        <div id="left">
          <ul>
            <li><a href="#">내정보 홈</a></li>
            <li><a href="#">개인정보 관리</a></li>
            <li><a href="#">로그인 및 보안</a></li>
            <li><a href="#">개인정보 이용</a></li>
          </ul>
        </div>
        <ul>
          <li><a href="#">멜론이용권/결제정보</a></li>
          <li><a href="#">이벤트 응모내역</a></li>
        </ul>
      </nav>
      <div className="contents">
        <h1>내 정보</h1>
        <div id="grid">
          <div id="box1">
            <div id="wi">
              <img src={'images/human.png'}/>
              <div id="witext">
                <p>{user.name}님 환영합니다.</p>
                <p>rlarorn@naver.com</p>
              </div>
            </div>
            <div id="are">
              <h5>회원님의 등급은 <b>플레티넘</b> 입니다.</h5>
              <p>2개월 후 <b>다이아</b>회원으로 등급 업데이트 예정입니다.</p>
              <p>등업 후 <b>다이아</b>혜택을 누리세요.</p>
              <div className="btn1">
                <a href="#">멜론 라운지</a>
              </div>
            </div>
          </div>
          <div id="box2">
            <div className="title">로그인 및 보안</div>
            <div className="detail">
              <p>로그인시 비밀번호를 재설정하고</p>
              <p>로그인 보안기능을 설정합니다.</p>
            </div>
            <div className="bottom">
              <div className="link">
                <a href="#">바로가기</a>
              </div>
              <div className="ikon">
                <img src={'images/Lock.png'}/>
              </div>
            </div>
          </div>
          <div id="box3">
            <div className="title">개인정보 관리</div>
            <div className="detail">
              <p>닉네임, 연락처 등</p>
              <p>개인정보를 확인하고관리합니다.</p>
            </div>
            <div className="bottom2">
              <div className="link">
                <a href="#">바로가기</a>
              </div>
              <div className="ikon">
                <img src={'images/Gear.png'}/>
              </div>
            </div>
          </div>
          <div id="box4">
            <div className="title">개인정보 이용</div>
            <div className="detail">
              <p>서비스 내 동의한 내역 조회 및</p>
              <p>동의 철회를 관리합니다.</p>
            </div>
            <div className="bottom2">
              <div className="link">
                <a href="#">바로가기</a>
              </div>
              <div className="ikon">
                <img src={'images/key.png'}/>
              </div>
            </div>
          </div>
          <div id="box5">
            <div className="title">이용권/쿠폰/캐시</div>
            <div className="detail">
              <p>멜론에 보유한 이용권/쿠폰/캐시</p>
              <p>내역을 확인할 수 있습니다.</p>
            </div>
            <div className="bottom2">
              <div className="link">
                <a href="#">바로가기</a>
              </div>
              <div className="ikon">
                <img src={'images/gift.png'}/>
              </div>
            </div>
          </div>
        </div>
        
  </div>
      <div id="footer">
        <div id="footer_c">
          <ul>
            <li><a href="#">이용약관</a></li>
            <li><a href="#">위치기반서비스이용약관</a></li>
            <li><a href="#">개인정보처리방침</a></li>
          </ul>
        </div>
        <div id="footer_detail">
          <p>문의전화:1566-7277(평일09:00-18:00, 유료)</p>
          <p>@Kakao Entertainment Corp.</p>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Mypage;