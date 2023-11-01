import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/slider.scss";

const InfiniteRollingSlider = () => {
  const settings = {
    infinite: true, // 무한 롤링 활성화
    speed: 1000, // 슬라이드 속도 (ms)
    slidesToShow: 7, // 한 번에 보여질 슬라이드 개수
    slidesToScroll: 1, // 한 번에 스크롤될 슬라이드 개수
    autoplay: true, // 자동 롤링 활성화
    autoplaySpeed: 2000, // 자동 롤링 속도 (ms)
    pauseOnHover: false,
  };

  const customSettings = {
    infinite: true, // 무한 롤링 활성화
    speed: 1000, // 슬라이드 속도 (ms)
    slidesToShow: 7, // 한 번에 보여질 슬라이드 개수
    slidesToScroll: 1, // 한 번에 스크롤될 슬라이드 개수
    autoplay: true, // 자동 롤링 활성화
    autoplaySpeed: 2000, // 자동 롤링 속도 (ms)
    pauseOnHover: false,
    rtl: true, // 역방향 슬라이딩
  };

  return (
    <div className="slider">
      <h1>나라별 인기 노래를 찾아서 들어보세요</h1>
      <h3>K-POP</h3>
      <Slider {...settings} className="slider2">
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/bts.png"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/aespa.jpg"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/ENHYPEN.jpg"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/ive.jpg"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/bts.png"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/NCT U.jpg"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/Seven.jpg"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/Stray Kids.jpg"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/Tomorrw.jpg"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/TWICE.jpg"
          />
        </div>
      </Slider>
      <h3>POP</h3>
      <Slider {...customSettings} className="slider2">
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/bts.png"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/bts.png"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/bts.png"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/bts.png"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/bts.png"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/bts.png"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/bts.png"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/bts.png"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/bts.png"
          />
        </div>
      </Slider>
      <h3>J-POP</h3>
      <Slider {...settings} className="slider2">
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/bts.png"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/bts.png"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/bts.png"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/bts.png"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/bts.png"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/bts.png"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/bts.png"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/bts.png"
          />
        </div>
        <div>
          <img
            className="phoneImage"
            alt="이미지"
            src="images/all/k-pop/bts.png"
          />
        </div>
      </Slider>
    </div>
  );
};

export default InfiniteRollingSlider;
