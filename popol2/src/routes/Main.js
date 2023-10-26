import React from 'react';
import "../scss/Main.scss";
import ReactFullpage from '@fullpage/react-fullpage';
import { useState, useEffect } from 'react';
import useAsync from '../customHook/useAsync';
import { API_URL } from '../config/contansts';
import Amount from './amount';
import axios from 'axios';

const Main = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showMainPage, setShowMainPage] = useState(false);

  useEffect(() => {
    // 1초 후에 환영 메시지를 천천히 사라지게 합니다.
    const fadeOutTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    return () => {
      clearTimeout(fadeOutTimer);
    };
    }, []);


    useEffect(() => {
      setTimeout(() => {
        setShowMainPage(true);
      }, 1000);
    }, []);


    const getAmounts = async () => {
      const res = await axios.get(`${API_URL}/amounts`);
      console.log("res.data:", res.data);
      return res.data;
    }
    const [state ] = useAsync(getAmounts, []);
    const { loading, data:amounts, error} = state; //state구조분해 
    if(loading) return <div>로딩중 ......</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!amounts){
        return <div>로딩중입니다.</div>
    }
  
  

  return (
    <ReactFullpage
      scrollingSpeed={900} 
      navigation 
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage-wrapper">
            <div className="section">
              {showWelcome ? (
                <div className={`headertxt ${showWelcome ? '' : 'fade-out'}`}>
                  <h1>저희 비발디 파크를 찾아주셔서 감사합니다.</h1>
                </div>
              ) : (
                <div className="main-page2">
                  <div className={`main-page3 ${showMainPage ? 'fade-in' : ''}`}>
                    <section className='Money'>
                      <div className='txt'>
                        <h1>저희 비발디 파크를 이용해야 하는 이유!</h1>
                      </div>
                      <ul className='section1'>
                        <li className='section2'>
                          <div className='sectionimg'></div>
                          <div className='sectionp'>
                            <p className='sectionp2'>새로운 음악 발견하기</p>
                            <p className='section5'>100개가 넘는 트랙을 즐겨보세요!</p>
                          </div>
                        </li>
                        <li className='section2'>
                          <div className='sectionimg2'></div>
                          <div className='sectionp'>
                            <p className='sectionp2'>나만의 맞춤 플레이리스트</p>
                            <p className='section5'>음악 취향에 맞춰 좋아요를 누르면 플레이리스트에 추가됩니다</p>
                          </div>
                        </li>
                        <li className='section2'>
                          <div className='sectionimg3'></div>
                          <div className='sectionp'>
                            <p className='sectionp2'>오프라인에서 감상</p>
                            <p className='section5'>내 디바이스에 노래 다운로드.</p>
                          </div>
                        </li>
                        <li className='section2'>
                          <div className='sectionimg4'></div>
                          <div className='sectionp'>
                            <p className='sectionp2'>여러 기기에서 스트리밍</p>
                            <p className='section5'>모바일, PC, 태블릿에서 음악을 들어보세요.</p>
                          </div>
                        </li>
                      </ul>
                    </section>
                    
                  </div>
                </div>
              )}
            </div>
            <div className="section">
              <h1>두 번째 섹션</h1>
            </div>
            <div className="section">
              <section className="Money">
                <div className="Moneytoptxt">
                  <h1>요금제 선택하기</h1>
                  <h2>스피커 및 기타 기기에서 제한 없이 마음껏 들으세요.</h2>
                </div>
                <div className='Moneyset3'>
                  {amounts.map(amount => <Amount key = {amount.id} amount={amount}></Amount>)}
                </div>
              </section>
            </div>
            <div className="section">
              <h1>4 번째 섹션</h1>
            </div>
          </div>
        );
      }}
    />
  );
};

export default Main;