import React from "react";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/slider2.scss";

const Slider2 = () => {
  const settings = {
    infinite: true, // 무한 롤링 활성화
    speed: 3900, // 슬라이드 속도 (ms)
    slidesToShow: 4, // 한 번에 보여질 슬라이드 개수
    slidesToScroll: 1, // 한 번에 스크롤될 슬라이드 개수
    autoplay: true, // 자동 롤링 활성화
    autoplaySpeed: 2000, // 자동 롤링 속도 (ms)
    pauseOnHover: false,
    dots: false, // 점 표시 숨기기
    arrows: false, // 버튼 숨기기
  };

  return (
    <div className="sliders">
      <h1>Music<span style={{color:'lightseagreen'}}>Hub</span> 오디오 콘텐츠</h1>
      <h2>지브리 ost를 지금 감상해보세요</h2>
      <Sliders {...settings} className="sliders2">
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/video/ge.jpg"
          />
          <br></br>
          <a href="/"alt ="">감상하기</a>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/video/ge2.jpg"
          />
          <br></br>
          <a href="/"alt ="">감상하기</a>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/video/ge3.jpg"
          />
          <br></br>
          <a href="/"alt ="">감상하기</a>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/video/ge4.jpg"
          />
          <br></br>
          <a href="/"alt ="">감상하기</a>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/video/ge5.jpg"
          />
          <br></br>
          <a href="/"alt ="">감상하기</a>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/video/ge6.jpg"
          />
          <br></br>
          <a href="/"alt ="">감상하기</a>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/video/ge7.jpg"
          />
          <br></br>
          <a href="/"alt ="">감상하기</a>
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="/images/video/ge8.jpg"
          />
          <br></br>
          <a href="/"alt ="">감상하기</a>
        </div>
      </Sliders>
    </div>
  );
};

export default Slider2;