/*
작성자: 김지환
수정일자: 2023-10-18
내용: express서버 
*/
const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const index = path.join(__dirname, 'popol2/build/index.html')

const { sequelize } = require('./models');
const musicRouter = require('./routes/musics');

//시퀄라이즈 연결 부분
sequelize.sync({ force: false }) //force가 true면 킬때마다 DB 새로 만듬
  .then(() => { 
    console.log("DB연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

//로그 자세히보기
app.use(morgan('dev'));

// URL-encoded방식 사용할수있게 설정
app.use(express.urlencoded({extended:false}));  
// json형식의 데이터를 처리할 수 있게 설정
app.use(express.json());


// 브라우저 cors 이슈를 막기 위해 사용(모든 브라우저의 요청을 일정하게 받겠다)
var cors = require('cors');
app.use(cors());

//app.use('요청 경로', express.static('실제 경로'));
app.use('/', express.static(path.join(__dirname, 'popol2/build'))); //POPOL2/popol2/build/ 파일 지정


app.use('/music', musicRouter); 


// 위에서 안걸린 나머지 모든 get요청 처리
// 예: http://localhost:8080/asdfasdfasd
app.get('*', (req, res) => { 
  // console.log(res);
  res.sendFile(index) //이상한 경로로 오면 띄울 html파일 설정
});

app.listen(8081, function () { //서버실행
  console.log('8081에서 대기중')
}); 