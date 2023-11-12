# Mplay 

> 바쁜 현대시대에 내 기분에 맞춘 음악 서비스

## 어떤 서비스인가요?

- 바쁜 현대시대에 내 기분에 맞춘 음악 서비스

## Contents

Click to scroll to that page

1. How to start? : 시작 가이드
2. Project Info : 프로젝트 소개

- ​Project intention : 프로젝트 기획 의도
- Service : 서비스
- How can use this project?

3. Stacks : 사용 기술 스택
4. WEB MVP & Project tree : 주요 기능 및 프로젝트 구조

- Page Image 페이지 구성
- 기능 소개
- ERD

5. Trouble Shooting : 트러블 슈팅
6. END with Members: 프로젝트 멤버 및 역할 소개

## 1. How to start : 시작 가이드

For building and running the application you need :

- [Node.js 18.16.1](https://nodejs.org/en)
- [npm 9.7.2](https://www.npmjs.com/)

Installation

```bash
git clone https://github.com/IkGy/Popol.git
cd Popol2
```

Front

```
cd popol2
npm install
npm start
```

Back

```
npm install
npm start
```

## 💻 2. Project Info : 프로젝트 소개

### ✔️개발 기간

- 2023.10.19 ~ 2023.11.09 (3주)

### ✔️ 배포 서버

- 

### ✔️ 프로젝트 기획 의도

서비스 소개

- 노래를 다운로드해 오프라인으로도 음악을 저장해서 어디서든 들어보세요 (예정)
- 월정액으로 노래를 제한없이 들어보세요
기능 소개

- 음원 등록
- 음원 조회
- 음원 듣기
- 음원 플레이리스트 담기
- 회원 가입 / 탈퇴
- 로그인 / 로그아웃
- 월정액 결제
- 마이페이지

### ✔️ 서비스

#### 서비스 설명
1. 웹 서비스의 최종적인 메인 기능과 서브 기능 설명

   1. 음원 등록 기능
      - 대표 이미지, 음원 파일, 음원 제목, 카테고리, 가수 이름, 작곡가, 작사가, 가사를 입력 받아 음원 등록

    2. 음원 조회 기능  
        - 텍스트 클릭 시 상세페이지로 이동 후 음원 정보 표시
        - 로그인 후  페이지의 투데이 페이지에서 메뉴전체 조회
        - 업로드하면 차트페이지에서 카테고리 분석 후 해당 나라에 맞게 자동 추가
        - DJ스테이션 페이지 이미지 클릭 시 DB에 저장된 플레이 리스트 목록 조회 및 재생
        - 업로드 시 이달의 차트 페이지에 해당 달에 등록한 음원 조회

    3. 음원 듣기 기능
        - 재생 시 오디오 플레이어에 이미지, 제목, 가수 데이터를 보내 해당 음원 재생
        - 오디오 플레이어에서 재생, 정지, 음량 조절 등 컨트롤 가능
    
    4. 플레이리스트 기능
        - 플레이리스트 아이콘 클릭 시 선택한 음원 데이터가 플레이리스트 페이지로 이동
        - 저장된 플레이리스트는 언제든지 다시 들을 수 있도록 저장
    
    5. 회원가입/탈퇴 기능
        - 회원가입을 통해 서비스에 가입 및 이용 가능
        - 필요한 정보를 데이터베이스에 저장(아이디, 비밀번호 등)
        - 가입 후 로그인 가능
        - 마이페이지에서 회원 탈퇴 가능
        - 탈퇴 전 추가 확인 창이 표시되며, 확인 후 회원 정보 삭제
    
    6. 로그인/로그아웃 기능
        - 등록된 사용자 아이디, 비밀번호를 입력하여 로그인 가능
        - 서버는 입력된 정보를 검증 후 올바른 경우 인증 토큰 부여
        - 인증 토큰 확인하여 권한 있는지 확인 후 서비스 모든 기능 이용
        - 사용자는 세션 토큰을 통해 로그인 상태 유지
        - 서버에 요청을 보낼 때마다 토큰 유효성 확인/만료시 로그인 페이지로 리다이렉트
        - 로그아웃 클릭 시 세션 토큰을 무효화하여 로그아웃 처리
        - 로그아웃 후 일부 기능 접근 제한
    
    7. 월정액 결제 기능
        - 월정액 결제를 통해 서비스를 이용
        - 신용카드, 휴대폰, 토스 등 다양한 결제 수단 지원
    
    8. 마이페이지 기능
        - 마이페이지에서 개인 정보를 확인하고 수정 가능
        - 이용 중인 서비스 정보, 내역, 개인 설정 등을 관리  
      
4. 유저 시나리오
  - WHO 
    - 일이나 공부로 바쁜 학생 직장인
  - WHAT
    - 좋아하는 장르별로 쉽게찾아 음악감상
  - WHEN
    - 이동중이거나 운동중에 
  - WHERE
    - 버스나 지하철등 이동중
  - WHY
    - 할 것이 없는 자투리 시간동안 음악감상으로 보내기
    - 잘 듣는 장르별로 음악듣기


### ✔️ 프로젝트 구조

#### 🧩 front-end

![front-end](/readme-img/front.png)

> 페이지별 구조

- Products 페이지 기반으로 구현된 서비스.

* Main Products : 처음 접속 했을떄 보이는 전체 상품 목록을 보여주는 페이지.
* Join : 회원가 페이지
* Login : 로그인 페이지.
* MyPage : 회원 정보, 상품등록 페이지로 가는 버튼이 있는 페이지.
* DetailProd: 상품 목록에서 상품 클릭시 상품의 상세정보를 보여주고 상품결제, 장바구니 등록 기능이 있는 페이지
* Cart: 장바구니에 담긴 상품들을 보여주고 결제할 수 있는 페이지  

#### 🧩 back-end

![back-end](/readme-img/back.png)

> 로직 구조

- config : 환경변수 설정
- model : DB와 연동
- routes : 요청받은 정보를 알맞게 가공하고 사용자가 입력한 데이터나 사용자에게 출력할 데이터 질의
- upload : 상품등록에 첨부한 이미지 저장하는 디렉터리

#### 🧩 ERD

![erd](/readme-img/foodingERD.png)

### ✔️ 페이지 구성

## 💻 3. Stacks

<img alt="Html" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"/> <img alt="react" src ="https://img.shields.io/badge/react-61DAFB.svg?&style=for-the-badge&logo=react&logoColor=white"/> <img alt="node.js" src ="https://img.shields.io/badge/node.js-339933.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> <img alt="express" src ="https://img.shields.io/badge/express-000000.svg?&style=for-the-badge&logo=express&logoColor=white"/> <img alt="Sequelize" src ="https://img.shields.io/badge/sequelize-52B0E7.svg?&style=for-the-badge&logo=sequelize&logoColor=white"/> <img alt="MySQL" src ="https://img.shields.io/badge/mysql-4479A1.svg?&style=for-the-badge&logo=mysql&logoColor=white"/> <img alt="MUI" src ="https://img.shields.io/badge/mui-007FFF.svg?&style=for-the-badge&logo=mui&logoColor=white"/> <img alt="antd" src ="https://img.shields.io/badge/antd-111111.svg?&style=for-the-badge&logo=antd&logoColor=White"/>

### 💻 Dependencies

<img alt="npm" src ="https://img.shields.io/badge/npm-CB3837.svg?&style=for-the-badge&logo=npm&logoColor=white"/> <img alt="axios" src ="https://img.shields.io/badge/axios-5A29E4.svg?&style=for-the-badge&logo=axios&logoColor=white"/> <img alt=".env" src ="https://img.shields.io/badge/.ENV-ECD53F.svg?&style=for-the-badge&logo=dotenv&logoColor=white"/> <img alt="multer" src ="https://img.shields.io/badge/multer-000000.svg?&style=for-the-badge&logo=multer&logoColor=White"/>


## 6. END

- 한국정보교육원 웹 프론트엔드 클라우드 콘솔 개발자 양성과정 3회차차 1조 

## ✔️프로젝트 멤버 구성

|  front-end   | back-end |
| :----------: | :------- |
| 김지환(팀장) | 김지환    |
|    조경익    | 조경익    |
|    유재혁    |          |
|    박승균    |          |

## 팀원별 역할

### 김지환

- 백엔드, 프론트엔드
- erd 작성 및 데이터베이스 연결 및 관리
- 시퀄라이즈로 mysql 적용
- 상품검색 기능 구현
- 카테고리별 상품조회 기능 구현
- 장바구니 등 기능 구

### 김준녕

  - 토스페이먼츠 SDK 결제 구현
  - 로그인 후 메인페이지
    - 프론트엔드
    - css 스타일링

### 유재혁

- 회원가입 페이지 구현
- 헤더 구현
- CSS 스타일링
- 디자인
- UI 리서치

### 김정혁

- 마이페이지 제작
- 회원탈퇴 기능 구현 및 제작
- CSS 스타일링
  
### 임헌성
  - 메인페이지
      - 프론트엔드
      - css 스타일링 
      - 디자인 
      - 풀페이지 기능 
      - Ul 리서치
      - 자동 이미지 슬라이더 구현
      - 헤더 구현
      - 푸터 구현 
  - 내돈내산 페이지
      - css 스타일링
      - 디자인 
      - Ul 리서치

### 박승균

### 백승준
  - 전반적인 디자인 담당
    - 페이지 전체의 기본 틀 디자인  
    - Ul 리서치
    - icon 디자인
    - logo 디자인


