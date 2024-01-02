require("dotenv").config();
const jwt = require('jsonwebtoken'); 
const JWT_KEY = process.env.ACCESS_TOKEN_SECRET


// AccessToken을 만드는 함수로 회원정보(Object)를 인자로 받아 시크릿 키, 유효기간을 인자로 jwt.sign() 함수를 호출한다.
// jwt.sign() 함수는 jsonwebtoken 라이브러리의 토큰을 발급하는 함수이다.
exports.makeAccessToken = (Object) =>{
  const accessToken = jwt.sign(
      Object,  // 토큰에 담을 JSON 데이터(payload)
      JWT_KEY, //두 번째 인자로는 키(key)
      {expiresIn: "60m"} //유효시간 60분
  );
  console.log("accessToken: ", accessToken);
  return accessToken;
};


// access token의 유효성을 검사하는 함수이다. 인자로 받은 accessToken을 시크릿 키와 함께 jwt.verify에 넣어 호출하여 회원 정보를 얻는다. token값이 유효하다면 디코딩된 userID 를 리턴하고 유효하지 않다면 에러 메세지를 리턴한다.
exports.verify = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_KEY);
    return {
      ok: true,
      id: decoded.id
    };
  } catch (error) {
    return {
      ok: false,
      message: error.message,
    };
  }
};


