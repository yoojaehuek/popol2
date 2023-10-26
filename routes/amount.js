const express = require('express');
const router = express.Router();
const Amount = require('../models/amount');

router.get('/',async (req,res,next)=>{
  try {
    const amounts = await Amount.findAll({})
    res.json(amounts)
  } catch (err) {
    console.error(err);
    next(err);
  }
})

router.route('/:id')
	.get(async (req,res,next)=>{
		try {
			const detailAmount = await Amount.findOne({
				where:{
					id: req.params.id,
				}
			})
			res.json(detailAmount);
		} catch (error) {
			console.error(error);
		}
	})

module.exports = router