const express = require('express');
const router = express.Router();
const Amount = require('../models/amount'); // 이용권 금액 모델 import

// 모든 이용권 금액 조회를 처리하는 라우터 핸들러
router.get('/', async (req, res, next) => {
  try {
    const amounts = await Amount.findAll({}); // 모든 이용권 금액 데이터 조회
    res.json(amounts); // 조회된 이용권 금액 데이터를 클라이언트에 응답으로 전송
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 특정 이용권 금액의 상세 정보 조회를 처리하는 라우터 핸들러
router.route('/:id')
  .get(async (req, res, next) => {
    try {
      // 클라이언트에서 전달받은 ID에 해당하는 이용권 금액 데이터를 조회
      const detailAmount = await Amount.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.json(detailAmount); // 조회된 이용권 금액의 상세 정보를 클라이언트에 응답으로 전송
    } catch (error) {
      console.error(error);
    }
  });

module.exports = router;
