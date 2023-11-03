const express = require('express');
const router = express.Router();
const {makeAccessToken, makeRefreshToken, refreshVerif, verify} = require("../utils/token");

router.post('/',async (req,res,next)=>{
  try {
    const {ok, id} = verify(req.headers.authorization.substring(7));
    res.json(ok);
  } catch (error) {
    console.error(error);
  }
})

module.exports = router