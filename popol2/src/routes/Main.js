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
  
  useEffect(() => {
    // 1초 후에 환영 메시지를 천천히 사라지게 합니다.
    const fadeOutTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    return () => {
      clearTimeout(fadeOutTimer);
    };
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
                <div className="main-page">
                  <h1>섹션1</h1>
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