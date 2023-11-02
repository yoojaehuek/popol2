import React from "react";
import "../scss/Footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer class="footer-distributed" style={{ backgroundColor: "black" }}>
        <div class="footer-left">
          <h3>Music<span>Hub</span></h3>
          <p class="footer-l">
            <p>김지환</p>
            <p>김준녕</p>
            <p>김정혁</p>
            <p>박승균</p>
            <p>백승준</p>
            <p>유재혁</p>
            <p>임헌성</p>
          </p>
          <p class="footer-company-name">Kookje © 2023</p>
        </div>
        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p><span>56 Jangan Ugilgil</span> pyeongtaeg, Korea</p>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <p>+82 123-1234</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>1teamcompany@company.co.kr</p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            우리는 음악을 사랑하는 이들을 위한 따뜻한 공간을 만들어나가고자 합니다. 뮤직허브는 세계 각지의 음악 애호가들에게 음악의 아름다움과 힘을 경험하게 해주는 플랫폼입니다.
          </p>
          <div class="footer-icons">
            <p><FontAwesomeIcon icon={faFacebook} /></p>
            <p><FontAwesomeIcon icon={faTwitter} /></p>
            <p><FontAwesomeIcon icon={faYoutube} /></p>
            <p><FontAwesomeIcon icon={faGithub} /></p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
