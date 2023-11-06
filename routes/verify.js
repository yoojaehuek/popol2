const express = require('express');
const router = express.Router();
const { makeAccessToken, makeRefreshToken, refreshVerif, verify } = require("../utils/token");

// POST 요청을 처리하는 라우터 핸들러
router.post('/', async (req, res, next) => {
  try {
    // 요청 헤더에서 전달된 토큰을 검증하고, 검증 결과를 반환받음
    const { ok, id } = verify(req.headers.authorization.substring(7));
    // 클라이언트에게 토큰의 유효성 여부를 응답으로 전송
    res.json(ok);
  } catch (error) {
    // 오류 발생 시 에러 로그를 출력
    console.error(error);
    // 에러 응답 전송 (클라이언트에서 토큰 유효성 검증 실패를 처리할 수 있도록)
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
