import React from "react";
import "../scss/Footer.scss"

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-info">
        <div className="footer-inner">
          <div>
            <h3>회사</h3>
            <ul>
              <li>국제대학교</li>
              <li></li>
              <li> </li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div>
            <h3>만든이</h3>
            <div className="econ">
              <ul className="icon">
                <li>김지환</li>
                <li>김준녕</li>
                <li>김정혁</li>
              </ul>
              <ul className="icon">
                <li>박승균</li>
                <li>백승준</li>
                <li>유재혁</li>
              </ul>
              <ul className="icon">
                <li>임헌성</li>
              </ul>
            </div>
          </div>
          <div>
            <h3>유용한 링크</h3>
            <ul>
              <li>GIT HUB</li>
            </ul>
          </div>
          <div className="icon">
            <div className="icon2">
              <li>
                <i className="fa-brands fa-facebook fa-lg"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter fa-lg"></i>
              </li>
              <li>
                <i className="fa-brands fa-tiktok fa-lg"></i>
              </li>
              <li>
                <i className="fa-brands fa-youtube fa-lg"></i>
              </li>
            </div>
          </div>
          <div>
            <h3>Music Hub</h3>
          </div>
        </div>
      </div>
      {/* <div id="footer-copy">
        <div id="copyright">
          <div className="copyright-inner">
            상호 :쇼핑몰 주소 : 평택 남구 삼산중로 100번길 대표전화 :
            국번없이 052-1234-4223 대표이사 : 3Team 개인정보관리자 : 국제대학교
            사업자 등록번호 : 102-12-12345 copyright(c) Green Lamp,.LTD all
            rights reserved. Korea
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
