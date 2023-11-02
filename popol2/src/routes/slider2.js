import React from "react";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/slider2.scss";

const Slider2 = () => {
  const settings = {
    infinite: true, // 무한 롤링 활성화
    speed: 1000, // 슬라이드 속도 (ms)
    slidesToShow: 7, // 한 번에 보여질 슬라이드 개수
    slidesToScroll: 1, // 한 번에 스크롤될 슬라이드 개수
    autoplay: true, // 자동 롤링 활성화
    autoplaySpeed: 2000, // 자동 롤링 속도 (ms)
    pauseOnHover: false,
		dots: false, // 점 표시 숨기기
 		arrows: false, // 버튼 숨기기
  };

  return (
    <div className="sliders">
      <h1>미리 만나는 MusicHub 오디오 콘텐츠</h1>
      <Sliders {...settings} className="sliders2">
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="images/all/k-pop/aespa.jpg"
          />
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="images/all/k-pop/ENHYPEN.jpg"
          />
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="images/all/k-pop/ive.jpg"
          />
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="images/all/k-pop/reper.jpg"
          />
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="images/all/k-pop/NCT U.jpg"
          />
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="images/all/k-pop/Seven.jpg"
          />
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="images/all/k-pop/Stray Kids.jpg"
          />
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="images/all/k-pop/Tomorrw.jpg"
          />
        </div>
        <div>
          <img
            className="phoneImages"
            alt="이미지"
            src="images/all/k-pop/TWICE.jpg"
          />
        </div>
      </Sliders>
    </div>
  );
};

export default Slider2;