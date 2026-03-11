# 세현ICT — Smarter IT Solution Provider

> sehyunict.com 리뉴얼 프로젝트. Next.js 기반 블랙 테마 홈페이지 + 프론트엔드 CMS.

---

## 기술 스택

| 항목 | 내용 |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + 100% 인라인 스타일 (컴포넌트) |
| Font | Geist Sans / Geist Mono |
| 상태 관리 (CMS) | localStorage |
| 배포 대상 | Vercel / 정적 호스팅 |

---

## 프로젝트 구조

```
black_hp/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # 루트 레이아웃 (메타데이터, 폰트)
│   │   ├── page.tsx            # 메인 홈페이지
│   │   ├── globals.css         # 전역 스타일 (디자인 토큰, keyframe 애니메이션)
│   │   └── cms/
│   │       ├── layout.tsx      # CMS 레이아웃
│   │       └── page.tsx        # CMS 대시보드 (클라이언트 컴포넌트)
│   │
│   ├── components/
│   │   ├── Nav.tsx             # 상단 고정 네비게이션 (스크롤 blur, 모바일 오버레이)
│   │   ├── Hero.tsx            # 히어로 섹션 (Aurora orb 3개 + grid-drift 배경)
│   │   ├── Features.tsx        # 핵심 강점 3개 + 수치 통계 (CountUp 애니메이션)
│   │   ├── Works.tsx           # 제품 목록 (SmartGeoKit 시리즈, More/Less 토글)
│   │   ├── Process.tsx         # 업무 프로세스 4단계
│   │   ├── CTA.tsx             # 문의 CTA + 연락처
│   │   ├── Footer.tsx          # 푸터
│   │   ├── Reveal.tsx          # 스크롤 트리거 fade-up 래퍼 (IntersectionObserver)
│   │   └── CountUp.tsx         # 숫자 카운트업 애니메이션 (easeOutExpo)
│   │
│   ├── lib/
│   │   └── cms-store.ts        # 기본 콘텐츠 정의 + localStorage 저장/불러오기
│   │
│   └── types/
│       └── cms.ts              # 콘텐츠 타입 정의 (TypeScript interface)
│
├── public/
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

---

## 페이지 구성

### `/` — 메인 홈페이지

| 순서 | 섹션 ID | 컴포넌트 | 설명 |
|---|---|---|---|
| 1 | — | `Nav.tsx` | 투명 → 스크롤 시 blur/border, 영문 메뉴, SEbit AI 링크, 모바일 풀스크린 |
| 2 | — | `Hero.tsx` | Aurora orb 3개 애니메이션 + 격자 배경, 대형 헤드라인, fade-in 순차 등장 |
| 3 | `#about` | `Features.tsx` | 강점 카드 3개 + 설립연도·업력·프로젝트·파트너 CountUp 수치 |
| 4 | `#products` | `Works.tsx` | SmartGeoKit 8개 제품 목록, 초기 4개 노출 후 More 버튼 |
| 5 | `#business` | `Process.tsx` | 4단계 업무 프로세스 카드 그리드 |
| 6 | `#contact` | `CTA.tsx` | 문의하기 버튼 + 이메일·전화·주소, orb 배경 |
| — | — | `Footer.tsx` | 브랜드 정보, 섹션 링크 |

> 모든 섹션 `minHeight: 100svh` (한 화면 = 한 섹션)

### `/cms` — CMS 대시보드

| 메뉴 | 편집 가능 항목 |
|---|---|
| Overview | 전체 섹션 요약 카드 (빠른 이동) |
| Hero | 아이브로우, 헤드라인, 서브헤드라인, CTA 버튼 텍스트 |
| Features | 강점 항목 추가 / 수정 / 삭제 |
| Products | 제품명, 버전, 카테고리, 설명, 태그 — 추가 / 수정 / 삭제 |
| Process | 프로세스 단계 추가 / 수정 / 삭제 |
| CTA | 헤드라인, 서브텍스트, 버튼 텍스트 |
| Footer | 브랜드명, 태그라인, 이메일, 전화번호 |

> 저장: **localStorage** (새로고침 후에도 유지)
> 실서비스 전환 시 Supabase / Notion API 등 백엔드 연동 필요

---

## 디자인 시스템

### 배경 애니메이션

| keyframe | 설명 |
|---|---|
| `orb1` (18s) | 파란 orb — 우측 상단 float |
| `orb2` (22s) | 보라 orb — 좌측 하단 float |
| `orb3` (26s) | 청록 orb — 중앙 float |
| `grid-drift` (8s) | 56px 격자 서서히 이동 |
| `fadeUp` | 0.9s 아래→위 fade-in (Hero 등장 전용) |

### 스크롤 애니메이션

- **`Reveal` 컴포넌트**: IntersectionObserver (threshold 0.12), 지연 시간 `delay` prop 지원
- **`CountUp` 컴포넌트**: IntersectionObserver (threshold 0.3), requestAnimationFrame + easeOutExpo

### 타이포그래피 규칙

| 용도 | fontSize | fontWeight |
|---|---|---|
| 섹션 포인트 헤딩 (흰색) | `6vw` | 400 |
| 섹션 서브 헤딩 (dim) | `clamp(2rem,4vw,4rem)` | 200 |
| Hero 헤드라인 (흰색) | `6vw` | 400 |
| Hero 서브 (dim) | `clamp(3rem,7.5vw,7rem)` | 200 |
| CTA 헤드라인 (흰색) | `6vw` | 400 |
| 라벨 / 카테고리 | `11px`, `letterSpacing: 0.18em` | 500 |

### 색상

```
배경: #080810 (Hero, Features, CTA)  /  #0d0d18 (Process, Footer)  /  #0a0a0a (Products)
선:   rgba(255,255,255,0.07~0.08)
흰색 포인트: #ffffff
서브 텍스트: rgba(255,255,255,0.2 ~ 0.55)
Blue orb: rgba(74,124,247,...)
Purple orb: rgba(139,92,246,...)
Teal orb: rgba(20,184,166,...)
```

---

## 네비게이션 메뉴

| 라벨 | href |
|---|---|
| About | `#about` |
| Business | `#business` |
| Project | — (미구현) |
| Product | `#products` |
| Contact Us | `#contact` |
| SEbit AI ↗ | `#` (추후 URL 연결) |

---

## 제품 목록 (SmartGeoKit Series)

| # | 제품명 | 버전 | 카테고리 |
|---|---|---|---|
| 01 | SmartGeoKit 2D GIS Engine | v3.0 | GIS |
| 02 | SmartGeoKit 3D GIS Engine | v3.0 | GIS |
| 03 | SmartGeoKit CAD View | v3.0 | CAD |
| 04 | SmartGeoKit CAD Compare | v1.1 | CAD |
| 05 | SmartGeoKit Layout Manager | v2.3 | 배치관리 |
| 06 | SmartGeoKit Xler | v1.0 | 연계제어 |
| 07 | SmartGeoKit AR | v1.0 | AR |
| 08 | SmartGeoKit RMCP | v1.0 | 플랫폼 |

---

## 개발 시작

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 타입 체크
npx tsc --noEmit

# 프로덕션 빌드
npm run build
```

---

## 콘텐츠 수정 방법

### 방법 1 — CMS 대시보드 (권장)
1. `http://localhost:3000/cms` 접속
2. 좌측 사이드바에서 섹션 선택
3. 내용 수정 → **Save Changes** 클릭

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

- [ ] 백엔드 CMS 연동 (Supabase 또는 Notion API)
- [ ] 제품 상세 페이지 (`/products/[id]`)
- [ ] 프로젝트 수행 실적 페이지
- [ ] SEbit AI 링크 연결 (URL 확정 시)
- [ ] 다국어 지원 (한국어 / 영어)
- [ ] SEO 메타태그 및 OG 이미지 설정
- [ ] Vercel 배포 연결
- [ ] 채용 페이지

---

## 라이선스

© 2025 세현ICT. All rights reserved.
