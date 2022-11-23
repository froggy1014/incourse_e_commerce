# 🧴 Incourse E-commerce Service 

<div align="center" width="300px">
    
<img src="./public/images/ReadMeLogo.png" />

</div>

<br>

<div align="center">
    
<p>
    <a target="_blank" rel="noopener noreferrer nofollow">    
        <img src="https://img.shields.io/badge/Typescript-^4.2.4-3178C6?style=for-the-badge&logo=TypeScript&logoColor=3178C6"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/Axios-^0.27.2-5A29E4?style=for-the-badge&logo=Axios&logoColor=5A29E4"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/React-^18.1.0-61DAFB?style=for-the-badge&logo=React&logoColor=61DAFB"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/React Query-^3.39.2-FF4154?style=for-the-badge&logo=React Query&logoColor=FF4154"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/Redux-^7.2.0-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/Chakra UI-^7.2.0-319795?style=for-the-badge&logo=Chakra UI&logoColor=319795"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/Node.js-^16.15.1-339933?style=for-the-badge&logo=Node.js&logoColor=339933"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/React Hook Form-^3.39.2-EC5990?style=for-the-badge&logo=React Hook Form&logoColor=EC5990"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/Next.js-^3.39.2-black?style=for-the-badge&logo=Next.js&logoColor=black"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/SlickPic-^0.29.0-5f9ea1?style=for-the-badge&logo=SlickPic&logoColor=5f9ea1"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/ESLint-^7.24.0-4B32C3?style=for-the-badge&logo=ESLint&logoColor=4B32C3"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/Prettier-^2.2.1-F7B93E?style=for-the-badge&logo=Prettier&logoColor=F7B93E"/>
    </a>
    <a target="_blank" rel="noopener noreferrer nofollow">
        <img src="https://img.shields.io/badge/Yarn-^1.22.19-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=2C8EBB"/>
    </a>
</p>

</div>

<br>

# 📄 Project Description


프론트엔드를 처음부터 끝까지 혼자힘으로 기능을 구현하며 학습이 주된 목적인 E-commerce 서비스 프로젝트입니다. 이슈 발생할때마다 백엔드 개발자와 슬랙을 통해 문제를 개선해 나갔습니다. 서비스는 배포 및 사용 가능하지만 코드 리팩토링이 필요하여 꾸준히 리팩토링 작업중에 있습니다.

This is an E-commerce service project which main purpose is to learn by implementing all the features of Front-End from the beginning to the end by myself. I have communicated with back-end developer on slack whenever issue caused. also I'm still working on this project since it needs code refactoring

<br>

### 🤔 What I've learnt? 

<pre>
    * JWT Token을 이용한 인증 로직                 - Implement Authorization logic by JWT Token
    * RESTful API를 활용한 CRUD                  - CRUD features by RESTful API
    * 전역, 서버 상태관리 라이브러리                  - Statement Management 
    * UI 컴포넌트 커스터마이즈                      - UI Component Customization
    * Next.js 프레임워크                         - NextJS Framwork features
    * 토스를 이용한 결제 로직 구성                   - Implement Payment Logic with Toss Module
    * presigned URL를 이용한 S3 이미지 업로드       - Image Upload to S3 with presigned URL
</pre>

<br>

### 📚 Project Detail 

- **Framework:** [Next.js](https://nextjs.org/)
- **State Management:** [React Query](https://react-query.tanstack.com/), [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling:** [Chakra-ui](https://chakra-ui.com/), [Emotion](https://emotion.sh/docs/introduction)
- **Forms:** [React Hook Form](https://react-hook-form.com/)
- **Auth-Provider:** [Kakao](https://developers.kakao.com/docs/latest/ko/kakaologin/common)
- **Payment-Module:** [Toss](https://www.tosspayments.com/)
    


<br>

# ✍️ Project Summary

### 📁 Folder Structure         [-> Wiki](https://github.com/froggy1014/Incourse_E-commerce/wiki/%F0%9F%93%81-Folder-Structure)

### 🔁 User Flow                [-> Wiki]()

### ⚠️ Trial and Error          [-> Wiki]()

### 𝍌 Pages Feature Summary    [-> Wiki]()


<br>


# 🏁 How to run this App 

> ### **Environment Varibles Required** <br>
> create .env.development.local or .env.production.local file in `root` directory

```
SOCIAL_REDIRECT_URL=http://localhost:3000/social_login/callback
TOSS_CLIENT_KEY=[Toss Test Client Key]
NEXT_PUBLIC_API_BASE_URL=https://api.commerce.incourse.run/v1/
NEXT_PUBLIC_KAKAO_CLIENT_ID=[Authorized KAKAO CLIENT ID from server]
```

test command 

```
yarn install
yarn run build
yarn run start
```

or 

```
yarn install
yarn run dev
```



