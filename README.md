# Week4_Assignment\_\_JavaScript 🐥

1. [프로젝트 소개 🚀](#1-프로젝트-소개-)
2. [구현 목록 📍](#2-구현-목록-)
3. [프로젝트 구조 🌲](#3-프로젝트-구조-)
4. [역할 👋🏻](#4-역할-)
5. [프로젝트 제작 과정 ✍🏻](#5-프로젝트-제작-과정-)
6. [프로젝트 설치 및 실행 ✨](#6-프로젝트-설치-및-실행-)

<br/>

[🌍 배포 링크]()

<br />

## 1. 프로젝트 소개 🚀

- 개요 : 원티드 프론트엔드 프리온보딩 2기 4주차 7번째 기업 과제
- 주제 : HTML, CSS, JavaScript를 활용해 페이지 제작
- 기간 : 2022.02.21 ~ 2022.02.23
- 요약 : 크로스 브라우징(ie 포함)을 고려해 프로젝트를 제작해야 하며, react를 사용하지 않고 순수 HTML, CSS, JS만을 활용해 제작한 프로젝트입니다. 반응형 레이아웃은 [홈페이지](https://kukka.kr/)의 레이아웃을 반영했으며 아래 구현 목록 내용을 토대로 제작했습니다.

<br />

## 2. 구현 목록 📍

### 🖼 레이아웃

- [x] 배너를 제외한 나머지 영역은 양 옆에 Margin 적용
- [x] 배너의 경우 width 100%로 꽉 차도록 구성
- [x] 반응형 웹
  - [x] 네비게이션바
  - [x] iFrame Youtube 영상
  - [x] 이미지 슬라이더
  - [x] 배너
  - [x] 푸터
  - [x] 팝업창

### 🔥 기능

#### GNB (네비게이션바)

- [x] 스크롤 이동시 상단 고정 및 따라다님
- [x] 메뉴 hover 시 글자 하단에 밑줄
- [x] GNB 하단 영역에 z-index 표현을 위한 그림자 효과
- [x] 메뉴 아이템 두 가지: 동영상, 플라워클래스 / GNB 클릭 시 해당 영역으로 이동

#### iFrame

- [x] 웹 디자인과 어울리는 동영상 영역 삽입 및 레이아웃과 어울리게 크기 조절
- [x] 동영상에 대한 간단한 Caption 삽입 및 동영상 제목 클릭 시 해당 동영상의 youtube 링크로 이동

#### 이미지 슬라이더

- [x] 이미지 hover 시 줌 효과
- [x] 화살표 버튼 클릭 시 1,2,3번 이미지가 돌아가며 교체.
- [x] 교체되면서 해당 이미지에 대한 타이틀, 가격, 태그 변경
- [x] 반응형 레이아웃

#### 배너

- [x] 이미지 / 단색 그라데이션
- [x] 부트스트랩을 사용하지 않고 캐러셀 구현
- [x] 반응형 레이아웃

#### 푸터

- [x] 순수 CSS로 레이아웃 구현
- [x] 크로스 브라우징 유의
- [x] SNS 아이콘 클릭 시 링크 이동

#### 팝업

- [x] 오늘은 더 이상 보지 않기 기능
- [x] 닫기 버튼 클릭 시 팝업 닫기

<br />

## 3. 프로젝트 구조 🌲

```bash
.
├──Asset
├──CSS
├──HTC
├──JS
│  ├── Banner.js
│  ├── Footer.js
│  ├── GNB.js
│  └── Slider.js
├──.gitignore
├──favicon.ico
└──index.html
```

<br/>

## 4. 역할 👋🏻

| 이름                                       | 담당 역할                           |
| ------------------------------------------ | ----------------------------------- |
| [황상섭](https://github.com/sangseophwang) | 초기 세팅, 슬라이더 구현, 문서 작성 |
| [정인권](https://github.com/developjik)    | 네비게이션바, 푸터, 팝업 구현       |
| [현다솜](https://github.com/som-syom)      | 유튜브, 배너, 번들링 구현           |

<br/>

## 5. 프로젝트 제작 과정 ✍🏻

### [1] 컨벤션은 다음과 같이 정했습니다 ✨

| 커밋명      | 내용                                             |
| ----------- | ------------------------------------------------ |
| ✨ feat     | 파일, 폴더, 새로운 기능 추가                     |
| 🐛 fix      | 버그 수정                                        |
| 💄 style    | 코드 스타일 변경                                 |
| 📝 docs     | 문서 생성, 추가, 수정(README.md)                 |
| ♻️ refactor | 코드 리팩토링                                    |
| 🚑️ chore   | 코드 수정 (JSON 데이터 포맷 변경 / scss 변경 등) |

자세한 내용은 [여기](https://github.com/PreOnBoarding-Team17/Week4_JavaScript/issues/1)서 확인해보실 수 있습니다!

<br/>

### [2] 풀 리퀘스트 시 팀원들과 코드 리뷰를 진행했습니다 🔥

[풀리퀘스트 링크](https://github.com/PreOnBoarding-Team17/Week4_JavaScript/pulls?q=is%3Apr+is%3Aclosed)

![스크린샷 2022-02-22 오후 11 58 17](https://user-images.githubusercontent.com/98322239/155159080-701a5b1b-7b6e-40ee-9762-ace56fb6a048.png)


<br/>

### [3] 이슈를 작성해 서로의 진행상황을 공유했습니다 👀

[이슈 링크](https://github.com/PreOnBoarding-Team17/Week4_JavaScript/issues?q=is%3Aissue+is%3Aclosed)

![스크린샷 2022-02-22 오후 11 57 47](https://user-images.githubusercontent.com/98322239/155159105-27b1e124-2e66-4229-bc9e-4bb59e9ef9ec.png)


<br/>

## 6. 프로젝트 설치 및 실행 ✨

<br/>

1. Git Clone

```plaintext
git clone https://github.com/PreOnBoarding-Team17/Week4_JavaScript.git
```

2. 실행

```plaintext
html 파일을 열거나 VSCode Live Server를 통해 열어주세요.
```

<br/>
