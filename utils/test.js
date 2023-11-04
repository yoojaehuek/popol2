
const {makeAccessToken, makeRefreshToken, refreshVerify} = require("../utils/token");

require("dotenv").config();
const jwt = require('jsonwebtoken'); 
const JWT_KEY = process.env.ACCESS_TOKEN_SECRET
const Token = require('../models/token');
const userId = 123;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTg2NjAwMDQsImV4cCI6MTY5ODY2MDYwNH0.zOf5hszey23UghbNTWiCHRcdHsQH4OOnr0XTJu1JMo0";

const value = refreshVerify(token, userId);
// if(value){
//   console.log("dd");
// }else{
//   console.log("ss");
// }