# 📝 MBTI 테스트

mbti 성격 유형을 테스트할 수 있는 서비스 입니다.

배포링크 👉 https://4-personal-assignment.vercel.app/

## 작업기간

2024.09.06.(금) ~ 2024.09.11.(수)

## 프로젝트 구조

```
.
├── mbti-test
│   ├── README.md
│   ├── db.json
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── public
│   │   └── vite.svg
│   ├── src
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── api
│   │   │   ├── AuthContext.jsx
│   │   │   └── testResults.js
│   │   ├── assets
│   │   │   └── react.svg
│   │   ├── components
│   │   │   ├── AuthForm.jsx
│   │   │   ├── Layout
│   │   │   │   ├── Layout.jsx
│   │   │   │   ├── PrivateLayout.jsx
│   │   │   │   └── PublicLayout.jsx
│   │   │   └── TestForm.jsx
│   │   ├── context
│   │   │   └── UserContext.jsx
│   │   ├── data
│   │   │   ├── mbtiDescriptions.js
│   │   │   └── questions.js
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── TestPage.jsx
│   │   │   └── TestResultList.jsx
│   │   ├── shared
│   │   │   ├── PrivateRoute.jsx
│   │   │   ├── PublicRoute.jsx
│   │   │   └── Router.jsx
│   │   └── utils
│   │       └── mbtiCalculator.jsx
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── yarn.lock
└── mbti-test.txt
```

## 주요기능

### 1. 회원가입 / 로그인 / 프로필 관리 기능

- JWT 인증 서버를 사용하여 회원가입, 로그인, 프로필 수정을 구현
- 인증이 되지 않은 사용자는 서비스를 이용할 수 없도록 설정

### 2. MBTI 테스트 제공

- 로그인한 사용자는 MBTI 테스트를 진행할 수 있음
- 문항은 총 20개로 사용자는 문항에 대한 답변을 선택하여 테스트를 완료할 수 있음

### 3. 테스트 결과 계산 및 저장

- 사용자가 MBTI 테스트를 완료하면, 결과를 계산하여 json-server에 저장
- MBTI 결과는 `E/I`, `S/N`, `T/F`, `J/P` 네 가지 지표를 기반으로 계산됨
