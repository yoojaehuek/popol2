import { Cookies } from 'react-cookie';

// 새로운 Cookies 인스턴스를 생성
const cookies = new Cookies();

// 쿠키를 설정하는 함수/쿠키가 이미 존재한다면 먼저 삭제한 후에 설정
export const setCookie = (name, value, options) => {
  // 이미 해당 이름의 쿠키가 존재한다면 먼저 삭제
  if (getCookie(name)) {
    removeCookie(name);
  }
  // cookies.set 메서드를 사용하여 쿠키를 설정
  return cookies.set(name, value, { ...options });
}

// 특정 이름의 쿠키 값을 가져오는 함수
export const getCookie = (name) => {
  // cookies.get 메서드를 사용하여 특정 이름의 쿠키 값을 반환
  return cookies.get(name);
}

// 특정 이름의 쿠키를 삭제하는 함수
export const removeCookie = (name) => {
  // cookies.remove 메서드를 사용하여 특정 이름의 쿠키를 삭제
  return cookies.remove(name);
}
