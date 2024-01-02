const express = require('express');
const { User, Token } = require('../models');
const router = express.Router();
const {makeAccessToken, makeRefreshToken, refreshVerify} = require("../utils/token");

router.get('/',async (req,res,next)=>{
  try {
    //아이디로 DB검색해서 비번 비교
  } catch (error) {
    
  }
})
.post('/',async (req,res,next)=>{
  try {
    console.log('login_test: ',req.body);
    const id = req.body.id;
    const pwd = req.body.pwd;
    const Ck_pwd = await User.findOne({
      where:{id: id}
    })
    // console.log('test',Ck_pwd.pwd); //db에서 로그인한 id랑 같은 데이터중 비밀번호 가져오기 => asd7584
    if (pwd == Ck_pwd.pwd) {
      // console.log(Ck_pwd);
      const accessToken = makeAccessToken({id: id});
      // await Token.create({
      //   id : id,
      //   token: refreshToken,
      // }).catch( async (err) => {
      //   await Token.destroy({
      //     where: {
      //       id: id,
      //     }
      //   })
      // })
      // console.log("accessToken: ", accessToken);
      res.status(200).json({accessToken: accessToken});
    }else{
      res.status(400).end();
    }
  } catch (error) {
    console.error(error);
  }
})
module.exports = router;