# 세현ICT — Smarter IT Solution Provider

> sehyunict.com 리뉴얼 프로젝트. Next.js 기반 블랙 테마 홈페이지 + 프론트엔드 CMS.

---

## 기술 스택

| 항목 | 내용 |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + 100% 인라인 스타일 (컴포넌트) |
| Font | Geist Sans |
| 상태 관리 (CMS) | localStorage |
| 배포 대상 | Vercel / 정적 호스팅 |

---

## 프로젝트 구조

```
black_hp/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # 루트 레이아웃 (메타데이터, 폰트)
│   │   ├── page.tsx             # 메인 홈페이지 (Nav + ClientPage)
│   │   ├── globals.css          # 전역 스타일 (orb, grid-drift, fadeUp, marquee keyframe + 필름 그레인)
│   │   └── cms/
│   │       └── page.tsx         # CMS 대시보드 (로그인 게이트 + 9개 편집 패널)
│   │
│   ├── components/
│   │   ├── ClientPage.tsx       # 클라이언트 래퍼 — localStorage 연동, 전체 섹션 조합
│   │   ├── Nav.tsx              # 상단 고정 네비 (스크롤 blur, 모바일 오버레이)
│   │   ├── Hero.tsx             # 히어로 섹션 (Aurora orb 3개 + grid-drift 배경)
│   │   ├── Features.tsx         # About — 강점 카드 3개 + CountUp 수치 + 협력사 티커
│   │   ├── Process.tsx          # Business — 4단계 업무 프로세스 카드
│   │   ├── Works.tsx            # Products — SmartGeoKit 8개, More/Less 토글
│   │   ├── Projects.tsx         # Project — 카드 캐러셀 (화살표 + dot progress)
│   │   ├── CTA.tsx              # Contact — 문의하기 버튼 + 연락처
│   │   ├── Footer.tsx           # 푸터
│   │   ├── ClientsTicker.tsx    # 협력사·고객사 무한 마퀴 띠 (About 하단)
│   │   ├── Reveal.tsx           # 스크롤 트리거 fade-up (IntersectionObserver)
│   │   └── CountUp.tsx          # 숫자 카운트업 (easeOutExpo)
│   │
│   ├── lib/
│   │   └── cms-store.ts         # defaultContent + loadContent / saveContent / resetContent
│   │
│   └── types/
│       └── cms.ts               # HeroContent, Feature, Product, ProcessStep,
│                                # ProjectItem, ClientItem, CTAContent, FooterContent, SiteContent
│
├── public/
├── next.config.ts
└── tsconfig.json
```

---

## 페이지 구성

### `/` — 메인 홈페이지

| 순서 | 섹션 ID | 컴포넌트 | 설명 |
|---|---|---|---|
| 1 | — | `Nav.tsx` | 투명 → 스크롤 시 blur/border, 영문 메뉴, SEbit AI 링크, 모바일 풀스크린 |
| 2 | — | `Hero.tsx` | Aurora orb 3개 + grid-drift 격자 배경, 대형 헤드라인, fade-in 순차 등장 |
| 3 | `#about` | `Features.tsx` | 강점 카드 3개 + 설립연도·업력·프로젝트·파트너 CountUp + 협력사 마퀴 티커 |
| 4 | `#business` | `Process.tsx` | 4단계 업무 프로세스 카드 그리드 |
| 5 | `#products` | `Works.tsx` | SmartGeoKit 8개 제품 목록, 초기 4개 노출 후 More 버튼 |
| 6 | `#project` | `Projects.tsx` | 수행 실적 카드 캐러셀 (좌/우 화살표 + dot progress indicator) |
| 7 | `#contact` | `CTA.tsx` | 문의하기 버튼 + 이메일·전화·주소, orb 배경 |
| — | — | `Footer.tsx` | 브랜드 정보, 섹션 링크 |

> 모든 섹션 `minHeight: 100svh` (한 화면 = 한 섹션)

### `/cms` — CMS 대시보드

#### 로그인
- 기본 비밀번호: `sehyun2025!`
- 세션: sessionStorage (탭 닫으면 자동 로그아웃)

#### 편집 패널

| 메뉴 | 편집 가능 항목 |
|---|---|
| Overview | 전체 통계 + 섹션 카드 빠른 이동 |
| Hero | eyebrow, 헤드라인, 서브텍스트, CTA 버튼 텍스트 |
| About | 강점 카드 추가 / 수정 / 삭제 |
| Products | 제품명, 버전, 카테고리, 설명, 태그 |
| Business | 프로세스 단계 추가 / 수정 / 삭제 |
| Projects | 프로젝트 실적 추가 / 수정 / 삭제 |
| Clients | 협력사·고객사 이름 추가 / 수정 / 삭제 (마퀴 티커 연동) |
| Contact | 헤드라인, 서브텍스트, 버튼 텍스트 |
| Footer | 브랜드명, 태그라인, 이메일 |

> 저장: **localStorage** → 메인 페이지 `useEffect`로 실시간 반영
> 실서비스 전환 시 Supabase / Notion API 등 백엔드 연동 필요

---

## 디자인 시스템

### 액센트 컬러

```
Violet:  #8b7cf8
Dim:     rgba(139,124,248,0.12)
Glow:    rgba(139,124,248,0.25)
배경:    #08080c (About) / #0d0d15 (Products, Project, Contact)
```

### 배경 애니메이션

| keyframe | 적용 섹션 | 설명 |
|---|---|---|
| `orb1` (22s) | Hero, CTA | violet-indigo orb float |
| `orb2` (28s) | Hero, CTA | violet orb float |
| `orb3` (34s) | Hero, CTA | indigo orb float |
| `grid-drift` (12s) | Hero, CTA | 56px 격자 서서히 이동 |
| `fadeUp` | 전체 | 스크롤 진입 시 아래→위 fade-in |
| `marquee` (28s) | About | 협력사 이름 좌→우 무한 흘러가기 |
| `shake` | CMS 로그인 | 비밀번호 오류 시 흔들림 |

### 스크롤 애니메이션

- **`Reveal` 컴포넌트**: IntersectionObserver (threshold 0.12), `delay` prop 지원
- **`CountUp` 컴포넌트**: IntersectionObserver (threshold 0.3), requestAnimationFrame + easeOutExpo

### 타이포그래피 규칙

| 용도 | fontSize | fontWeight |
|---|---|---|
| 섹션 포인트 헤딩 (흰색) | `5vw` | 400 |
| 섹션 서브 헤딩 (dim) | `clamp(2rem,4vw,4rem)` | 200 |
| 라벨 / 카테고리 | `10px`, `letterSpacing: 0.22em` | 500 |

---

## 네비게이션 메뉴

| 라벨 | href |
|---|---|
| About | `#about` |
| Business | `#business` |
| Project | `#project` |
| Product | `#products` |
| Contact Us | `#contact` |
| SEbit AI ↗ | `#` (추후 URL 연결) |

---

## 제품 목록 (SmartGeoKit Series)

| # | 제품명 | 버전 | 카테고리 | 설명 |
|---|---|---|---|---|
| 01 | SmartGeoKit 2D GIS Engine | v3.0 | GIS | Html5 Canvas 기반 Web/Mobile GIS 엔진 |
| 02 | SmartGeoKit 3D GIS Engine | v3.0 | GIS | WebGL 기반 3D GIS 엔진 |
| 03 | SmartGeoKit CAD View | v3.0 | CAD | Canvas/SVG 기반 CAD Viewer |
| 04 | SmartGeoKit CAD Compare | v1.1 | CAD | CAD 파일 버전 간 변경사항 자동 추적 |
| 05 | SmartGeoKit Layout Manager | v2.3 | 배치관리 | CAD/Image 기반 레이아웃 배치 솔루션 |
| 06 | SmartGeoKit Xler | v1.0 | 연계제어 | 실시간 설비·감지기 연계 위치 판독 솔루션 |
| 07 | SmartGeoKit AR | v1.0 | AR | 현장정보 + Digital 정보 복합/중첩 솔루션 |
| 08 | SmartGeoKit RMCP | v1.0 | 플랫폼 | Risk Monitoring Control Platform |

---

## 개발 시작

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# CMS 대시보드
# http://localhost:3000/cms  (비밀번호: sehyun2025!)

# 타입 체크
npx tsc --noEmit

# 프로덕션 빌드
npm run build
```

---

## 콘텐츠 수정 방법

### 방법 1 — CMS 대시보드 (권장)
1. `http://localhost:3000/cms` 접속
2. 비밀번호 입력 후 로그인
3. 좌측 사이드바에서 섹션 선택
4. 내용 수정 → **저장** 클릭 → 메인 페이지에 즉시 반영

### 방법 2 — 코드 직접 수정
[src/lib/cms-store.ts](src/lib/cms-store.ts) 의 `defaultContent` 객체를 수정하면 기본값이 변경됩니다.

---

## 디자인 레퍼런스

| 사이트 | 참조 포인트 |
|---|---|
| [popupstudio.ai](https://popupstudio.ai/home) | 다크 테마, 대형 타이포 |
| [hyundairs.co.kr](https://www.hyundairs.co.kr) | 한국 기업 레이아웃 |
| [gsds.kaist.ac.kr](https://gsds.kaist.ac.kr) | 한글 타이포그래피 |
| [wellysis.com](https://www.wellysis.com) | 미니멀 섹션 구성 |
| [solution-dev.link](https://solution-dev.link) | Aurora 배경 스타일 |

---

## 향후 작업 예정

- [ ] 제품 상세 페이지 (`/products/[id]`)
- [ ] SEbit AI 링크 연결 (URL 확정 시)
- [ ] 백엔드 CMS 연동 (Supabase 또는 Notion API)
- [ ] 다국어 지원 (한국어 / 영어)
- [ ] SEO 메타태그 및 OG 이미지 설정
- [ ] Vercel 배포 연결
- [ ] 채용 페이지

---

## 라이선스

© 2026 세현ICT. All rights reserved.
