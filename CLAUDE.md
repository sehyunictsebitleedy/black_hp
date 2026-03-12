# CLAUDE.md — 세현ICT 홈페이지 리뉴얼

## 프로젝트 개요

세현ICT (sehyunict.com) 홈페이지 리뉴얼 프로젝트.
공간정보 기반 IT 솔루션 기업의 브랜드 이미지를 MZ 감성의 블랙 테마로 재구축.

---

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (레이아웃 유틸리티) + 100% 인라인 스타일 (컴포넌트 스타일링)
- **Font**: Geist Sans
- **CMS**: localStorage 기반 프론트엔드 CMS (`/cms`)
- **배포**: 미정

---

## 디자인 원칙

- 전체 테마: **블랙** (`#08080c` 기반)
- 스타일: 20-30대 타깃 / 세련되고 심플 / 세계적 웹디자이너 수준
- 액센트 컬러: `#8b7cf8` (violet-indigo)
- 타이포: 한글+영문 혼용, 포인트 헤딩 `5vw / fontWeight:400`, 서브 헤딩 `fontWeight:200`
- 섹션: 각 섹션 `minHeight: 100svh` (한 화면 = 한 섹션)
- 배경: Aurora orb 3개 float 애니메이션 + 56px grid-drift (Hero, CTA 섹션) + 필름 그레인 노이즈
- 애니메이션: 과하지 않게 — 스크롤 Reveal + CountUp + orb float + marquee 티커
- 레퍼런스: popupstudio.ai / hyundairs.co.kr / gsds.kaist.ac.kr / wellysis.com / solution-dev.link

---

## 폴더 구조

```
src/
├── app/
│   ├── page.tsx           # 메인 홈 (서버 컴포넌트 — Nav + ClientPage)
│   ├── globals.css        # keyframe 애니메이션 (orb, grid-drift, fadeUp, marquee) + 필름 그레인
│   └── cms/
│       └── page.tsx       # CMS 대시보드 (클라이언트 컴포넌트, 로그인 게이트 포함)
├── components/
│   ├── ClientPage.tsx     # 클라이언트 래퍼 — localStorage 연동, 섹션 조합
│   ├── Nav.tsx            # 고정 네비 (스크롤 blur, 모바일 오버레이)
│   ├── Hero.tsx           # Aurora 배경 + 대형 헤드라인
│   ├── Features.tsx       # About 섹션 (강점 카드 + CountUp 통계 + ClientsTicker)
│   ├── Works.tsx          # Products 섹션 (More/Less 토글)
│   ├── Process.tsx        # Business 섹션 (4단계 프로세스)
│   ├── Projects.tsx       # Project 섹션 (카드 캐러셀 — 좌우 이동 + dot indicator)
│   ├── CTA.tsx            # Contact 섹션
│   ├── Footer.tsx         # 푸터
│   ├── ClientsTicker.tsx  # 협력사·고객사 무한 스크롤 마퀴 띠
│   ├── Reveal.tsx         # 스크롤 트리거 fade-up (IntersectionObserver)
│   └── CountUp.tsx        # 숫자 카운트업 (requestAnimationFrame + easeOutExpo)
├── lib/
│   └── cms-store.ts       # defaultContent + loadContent / saveContent / resetContent
└── types/
    └── cms.ts             # HeroContent, Feature, Product, ProcessStep, ProjectItem,
                           # ClientItem, CTAContent, FooterContent, SiteContent
```

---

## 섹션 구성 순서 (ClientPage.tsx)

| 순서 | 섹션 ID | 컴포넌트 | 설명 |
|---|---|---|---|
| 1 | — | Nav | 투명 → 스크롤 시 blur, 영문 메뉴, SEbit AI 링크 |
| 2 | — | Hero | Aurora orb 3개 + grid-drift, 대형 헤드라인 |
| 3 | `#about` | Features | 강점 카드 + CountUp 수치 + 협력사 티커 |
| 4 | `#business` | Process | 4단계 업무 프로세스 |
| 5 | `#products` | Works | SmartGeoKit 8개, More/Less 토글 |
| 6 | `#project` | Projects | 카드 캐러셀 (좌우 화살표 + dot progress) |
| 7 | `#contact` | CTA | 문의하기 버튼 + 연락처 |
| — | — | Footer | 브랜드 정보 |

---

## 컴포넌트 스타일링 규칙

- 컴포넌트 스타일은 **100% 인라인 스타일** 사용 (Tailwind 클래스 신뢰 불가)
- Tailwind는 CMS 페이지(`/cms`)와 레이아웃에서만 사용
- 이벤트 핸들러(`onMouseEnter` 등) 있는 컴포넌트는 반드시 `"use client"` 선언
- 아이콘: SVG 인라인 사용 (외부 아이콘 라이브러리 설치 금지)
- 이미지: `next/image` 사용
- 링크: 섹션 내부는 `<a href="#...">`, 페이지 이동은 `next/link`

---

## CMS 구조 (`/cms`)

### 인증
- 비밀번호: `sehyun2025!` (cms/page.tsx 상단 `CMS_PASSWORD` 상수)
- 세션: `sessionStorage` — 브라우저 탭 닫으면 자동 로그아웃

### 패널 구성

| 사이드바 메뉴 | 편집 가능 항목 |
|---|---|
| Overview | 전체 통계 + 섹션 카드 빠른 이동 |
| Hero | eyebrow, 헤드라인, 서브텍스트, CTA 버튼 |
| About | 강점 카드 추가 / 수정 / 삭제 |
| Products | 제품명, 버전, 카테고리, 설명, 태그 |
| Business | 프로세스 단계 추가 / 수정 / 삭제 |
| Projects | 프로젝트 실적 추가 / 수정 / 삭제 |
| Clients | 협력사·고객사 이름 추가 / 수정 / 삭제 (마퀴 티커 연동) |
| Contact | 헤드라인, 서브텍스트, 버튼 텍스트 |
| Footer | 브랜드명, 태그라인, 이메일 |

> 저장: **localStorage** → 메인 페이지 useEffect로 실시간 반영

---

## 콘텐츠 (세현ICT)

- **회사명**: 세현ICT (Sehyun ICT)
- **슬로건**: Smarter IT Solution Provider Group
- **설립**: 2015년
- **주소**: 경기도 화성시 동탄기흥로 557, 1901호
- **이메일**: asset.manager@sehyunict.com
- **전화**: 070-4047-8955
- **2차 브랜드**: SEbit AI (Nav에 외부 링크로 표시, href 추후 연결)

### SmartGeoKit 제품 목록

| 제품명 | 버전 | 카테고리 |
|---|---|---|
| SmartGeoKit 2D GIS Engine | v3.0 | GIS |
| SmartGeoKit 3D GIS Engine | v3.0 | GIS |
| SmartGeoKit CAD View | v3.0 | CAD |
| SmartGeoKit CAD Compare | v1.1 | CAD |
| SmartGeoKit Layout Manager | v2.3 | 배치관리 |
| SmartGeoKit Xler | v1.0 | 연계제어 |
| SmartGeoKit AR | v1.0 | AR |
| SmartGeoKit RMCP | v1.0 | 플랫폼 |

### 기본 고객사 (ClientsTicker)

한국도로공사 / 국토교통부 / 경기도청 / LH 한국토지주택공사 / 한전KPS /
소방청 / 서울특별시 / 한국수자원공사 / 행정안전부 / 국방부 /
인천국제공항공사 / 한국철도공사

---

## 네비게이션 메뉴

| 라벨 | 링크 |
|---|---|
| About | `#about` |
| Business | `#business` |
| Project | `#project` |
| Product | `#products` |
| Contact Us | `#contact` |
| SEbit AI ↗ | `href="#"` (추후 URL 연결, `target="_blank"`) |

---

## 구현 완료 항목

- [x] Next.js 16 + TypeScript + Tailwind CSS v4 셋팅
- [x] 전체 섹션 100svh 풀스크린 레이아웃
- [x] Aurora orb 3개 + grid-drift 배경 (Hero, CTA)
- [x] 필름 그레인 노이즈 (body::after, opacity 0.038)
- [x] 스크롤 트리거 Reveal 애니메이션 (Reveal.tsx)
- [x] CountUp 숫자 카운트업 애니메이션 (CountUp.tsx)
- [x] 네비게이션 영문 메뉴 + SEbit AI 링크
- [x] 모바일 풀스크린 오버레이 메뉴
- [x] Product 타입 + SmartGeoKit 8개 실데이터 + 설명 추가
- [x] Products 섹션 More/Less 토글 (초기 4개 노출)
- [x] Projects 섹션 — 카드 캐러셀 (좌우 화살표, dot progress)
- [x] ClientsTicker — 협력사·고객사 무한 마퀴 띠 (About 하단)
- [x] CMS 전체 리디자인 (인라인 스타일, 아코디언 UI)
- [x] CMS 로그인 화면 (비밀번호 인증, sessionStorage 세션)
- [x] CMS 사이드바 로그아웃 버튼
- [x] CMS Clients 패널 (고객사 추가/수정/삭제)
- [x] CMS Projects 패널 (프로젝트 실적 관리)
- [x] localStorage → ClientPage.tsx useEffect로 메인 페이지 실시간 반영
- [x] 섹션 순서 변경: About → Business → Product → Project 순
- [x] 포인트 헤딩 5vw / fontWeight:400 통일
- [x] 전체 액센트 컬러 violet(`#8b7cf8`) 통일
- [x] Hero 섹션 — `main_bg.png` 배경 이미지 (opacity 0.35 + 다크 오버레이)
- [x] Business 섹션 — `business_bg.png` 배경 이미지 (opacity 0.28 + 다크 오버레이)
- [x] 섹션 컬러 포인트 — About `#0c0a1a` (violet), Project `#080d18` (navy)
- [x] 전체 카드·섹션 보더 opacity 강화 (카드 `0.06→0.13`, 섹션 구분선 `0.055→0.10`)
- [x] ClientsTicker 마퀴 애니메이션 — 인라인 style animation으로 수정, WebkitMaskImage 추가
- [x] globals.css — shake keyframe 추가 (CMS 로그인 오류 흔들림용)

---

## 앞으로 할 작업

- [ ] 제품 상세 페이지 (`/products/[id]`)
- [ ] SEbit AI 링크 연결 (URL 확정 시)
- [ ] 백엔드 CMS 연동 (Supabase 또는 Notion API)
- [ ] 다국어 지원 (KO / EN)
- [ ] SEO 메타태그 및 OG 이미지 설정
- [ ] Vercel 배포 연결
- [ ] 채용 페이지

---

## Git 규칙

- 브랜치: `main`
- 커밋 prefix: `feat:` / `fix:` / `style:` / `refactor:` / `docs:`
- 작성자: leedy / leedy@sehyunict.com
- 원격: `https://github.com/sehyunictsebitleedy/black_hp.git`
