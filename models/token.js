/*
작성자: 김지환
수정일자: 2023-10-18
내용: Employee모델 정의 (관리자 테이블) 
*/
const Sequelize = require("sequelize");

class Token extends Sequelize.Model {
  static initiate(sequelize) {
    Token.init({ //테이블 컬럼에 대한 설정
      id: { //컬럼이름 (관리자 id)
        //컬럼설정
        type: Sequelize.STRING(20), //타입은 string 20문자 제한
        primaryKey: true, //기본키
        allowNull: false, //null금지
        comment: "아이디", //컬럼 설명 
      },
      token: { //관리자 폰 번호Employee
        type: Sequelize.STRING(5000), 
        allowNull: false,
        comment: "토큰",
      },
    }, {
      sequelize,
      timestamps: false, //자동 생성되는 시간 컬럼 생성 안함 
      underscored: false, //스네이크 표기법 사용
      modelName: 'Token', //모델이름 설정
      tableName: 'tokens', //테이블 이름 설정
      paranoid: false, //true하면 deletedAt이라는 컬럼이 생기고 삭제할때 삭제안되고 deletedAt에 해당 시간 들어감 
      charset: 'utf8', //한글사용
      collate: 'utf8_general_ci',//한글사용
    });
  }

  static associate(db) {} //다른 모델과 연결 안됨
};

module.exports = Token;