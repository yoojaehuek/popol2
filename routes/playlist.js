const express = require('express');
const router = express.Router();
const PlayList = require('../models/playList'); // 음악 모델 import
const Music = require('../models/music'); // 음악 모델 import
const { verify } = require("../utils/token");

router.route('/')
  .get(async (req,res,next)=>{
    try {
      console.log("/playlist post: ", req.body.playList);
      const { ok, id } = verify(req.headers.authorization.substring(7));
      if (ok) {
        // const playlist = new Array;
        // const playlistId = await PlayList.findAll({
        //   attributes: ['musicId'],
        //   where: {
        //     userId: id
        //   }
        // });
        // playlistId.map( async (list) => {
        //   const music = await Music.findAll({
        //     where: {
        //       id: list.dataValues.musicId
        //     }
        //   })
        //   playlist.push(music);
        // })
        // console.log("playlist: ", playlist);
        const playlist = await PlayList.findAll({ // Cart모델에서 전부(findAll) 불러와서 cart상수에 넣음
          where: { //조건
            userId: id, 
          },
          include: [{ //조인하는부분
            model: Music, // Product모델과 조인
            attributes: ['id', 'name', 'kind', 'singer', 'composer', 'lyricist', 'lyrics', 'imageUrl', 'musicUrl', 'regdate'], //Product모델에서 가져올 컬럼들
          }]
        })
        
        console.log("playlist: ", playlist); 
        res.json(playlist);
      }
    } catch (err) {
      console.error(err);
    }
  })
  .post(async (req, res, next) => {
    try{
      console.log("/playlist post: ", req.body.playList);
      const { ok, id } = verify(req.headers.authorization.substring(7));
      if (ok) {
        await PlayList.create({
          userId: id,
          musicId: req.body.playList.musicId,
        });
      }
      res.json(ok);
    } catch(err) {
      console.error(err);
    }
  })

module.exports = router