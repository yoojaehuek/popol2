const express = require('express');
const { Op } = require('sequelize');
const Music = require('../models/music'); // 음악 모델 import

const router = express.Router();

// 음악 전체 조회 및 새 음악 등록을 처리하는 라우터 핸들러
router.route('/')
  .get(async (req, res, next) => { // 음악 전체 조회
    try {
      const musics = await Music.findAll({}); // 모든 음악 데이터 조회
      console.log("musics", musics);
      res.json(musics); // 조회된 음악 데이터를 클라이언트에 응답으로 전송
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => { // 새 음악 등록
    try {
      console.log(req.body);
      // 클라이언트에서 전달받은 음악 정보로 새 음악 생성
      const music = await Music.create({
        imageUrl: req.body.imageUrl,
        musicUrl: req.body.musicUrl,
        name: req.body.name,
        kind: req.body.kind,
        singer: req.body.singer,
        composer: req.body.composer,
        lyricist: req.body.lyricist,
        lyrics: req.body.lyrics,
      });
      console.log(music);
      res.status(201).end(); // 성공적으로 응답 전송
    } catch (err) {
      console.log(err);
    }
  });

router.route('/new')
  .get(async (req, res, next) => { // 음악 전체 조회
    try {
      const musics = await Music.findAll({
        order: [ ['regdate', 'DESC'] ],
        limit: 10,
      }); // 모든 음악 데이터 조회
      console.log("musics", musics);
      res.json(musics); // 조회된 음악 데이터를 클라이언트에 응답으로 전송
    } catch (err) {
      console.error(err);
      next(err);
    }
  })

  router.get('/kind', async (req, res)=>{
    try {
      const {kind, limit} = req.query;
      console.log(kind);
      const musics = await Music.findAll({
        where: {
          kind: {[Op.like]: `%${kind}%`}
        },
        limit: parseInt(limit)
      });
      res.status(200).json(musics);
    } catch (error) { 
      res.status(500).json({err: error});
    } 
  });

module.exports = router;
