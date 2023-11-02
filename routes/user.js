const express = require('express');
const User = require('../models/user');
const {makeAccessToken, makeRefreshToken, refreshVerif, verify} = require("../utils/token");


const router = express.Router();

router.route('/')
  .get(async(req,res,next)=> {
    try {
      console.log("성공");
    } catch (error) {
      console.error(error);
    }
  })
  .post(async(req,res,next)=>{
    try {
      const user = await User.create({
        id : req.body.id,
        pwd : req.body.pwd,
        name : req.body.name,
        phone : req.body.phone,
      })
      console.log("join,user",user);
      res.status(201).json("OK");
      console.log("join req.body: ",req.body);
    } catch (error) {
      console.error(error);
      next(error);
    }
  })
  .delete(async(req,res,next)=>{
    try {
      const {ok, id} = verify(req.headers.authorization.substring(7));
      if (ok == true) {
        const user = await User.destroy({
          where: {
            id: id
          }
        })
        res.status(200).end();
      } 
    } catch (error) {
      console.error(error);
    }
  })
router.route('/mypage')
  .post(async (req,res,next)=>{
    try {
      const {ok, id} = verify(req.headers.authorization.substring(7));
      console.log(id);
      if (ok == true) {
        const user = await User.findOne({
          attributes: ['name'],
          where: {
            id: id
          }
        })
        console.log("user.js /mypage", user);
        res.status(200).json(user);
      }else {
        res.send(false);
      }
      // const token = req.headers.authorization.substring(7);
      // console.log(token);
      // console.log("req.headers.authorization: ",req.headers.authorization);

      // if(req.body.login != null){
      //   const userData = verify(req.body.login);
      //   console.log("userData: ",userData);
      //   res.status(201).json(userData);
      // }else {
      //   console.log("req.body.login 없음: ",req.body.login);
      //   res.send(false);
      // }
    } catch (error) {
      console.error(error);
    }
  })

module.exports = router;