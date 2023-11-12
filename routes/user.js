const express = require('express');
const User = require('../models/user');
const { verify } = require("../utils/token");

const router = express.Router();

// 회원 가입, 정보 수정, 탈퇴, 마이페이지 조회 등의 요청을 처리하는 라우터 핸들러
router.route('/')
  .get(async (req, res, next) => {
    try {
      console.log("성공"); // GET 요청에 대한 응답 (임시로 성공 메시지 출력)
    } catch (error) {
      console.error(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      // 클라이언트에서 전달받은 사용자 정보로 새로운 사용자 생성
      const user = await User.create({
        id: req.body.id,
        pwd: req.body.pwd,
        name: req.body.name,
        phone: req.body.phone,
      });
      console.log("join, user", user);
      // 클라이언트에게 성공적인 응답 전송
      res.status(201).json("OK");
      console.log("join req.body: ", req.body);
    } catch (error) {
      console.error(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      console.log(req.body);
      // 클라이언트에서 전달받은 새로운 비밀번호와 전화번호로 사용자 정보 업데이트
      const { ok, id } = verify(req.headers.authorization.substring(7));
      if (ok) {
        await User.update(
          {
            pwd: req.body.newPassword,
            phone: req.body.newPhone,
          },
          {
            where: {
              id: id,
            },
          }
        );
      }
      // 클라이언트에게 업데이트 결과 응답 전송
      res.json(ok);
    } catch (error) {
      console.error(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      // 클라이언트에서 전달받은 토큰을 검증하고, 검증이 성공한 경우 사용자 정보 삭제
      const { ok, id } = verify(req.headers.authorization.substring(7));
      if (ok) {
        await User.destroy({
          where: {
            id: id,
          },
        });
        // 클라이언트에게 성공적인 응답 전송
        res.status(200).end();
      }
    } catch (error) {
      console.error(error);
    }
  });

// 마이페이지 조회 요청을 처리하는 라우터 핸들러
router.route('/mypage')
  .post(async (req, res, next) => {
    try {
      // 클라이언트에서 전달받은 토큰을 검증하고, 검증이 성공한 경우 해당 사용자의 이름 정보 조회
      const { ok, id } = verify(req.headers.authorization.substring(7));
      if (ok) {
        const user = await User.findOne({
          attributes: ['name'],
          where: {
            id: id,
          },
        });
        console.log("user.js /mypage", user);
        // 클라이언트에게 사용자 이름 정보 응답 전송
        res.status(200).json(user);
      } else {
        // 검증 실패 시 클라이언트에게 실패 응답 전송
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
  });

module.exports = router;
