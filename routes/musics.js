const express = require('express');
const Music = require('../models/music');

const router = express.Router();

//전체조회
router.route('/')
  .get(async (req,res,next)=>{ //전체조회
    try {
      console.log('전체조회성공');
      res.end();
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
module.exports = router;