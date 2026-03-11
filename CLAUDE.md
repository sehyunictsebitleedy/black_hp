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

- 전체 테마: **블랙** (`#080810` 기반)
- 스타일: MZ 감성 / 세련되고 심플 / 10년차 디자이너 퀄리티
- 타이포: 한글+영문 혼용, 포인트 헤딩 `6vw / fontWeight:400`, 서브 헤딩 `fontWeight:200`
- 섹션: 각 섹션 `minHeight: 100svh` (한 화면 = 한 섹션)
- 배경: Aurora orb 3개 float 애니메이션 + 56px grid-drift (Hero, CTA 섹션)
- 애니메이션: 과하지 않게 — 스크롤 Reveal + CountUp + orb float만 사용
- 레퍼런스: popupstudio.ai / hyundairs.co.kr / gsds.kaist.ac.kr / wellysis.com / solution-dev.link

---

## 폴더 구조

```
src/
├── app/
│   ├── page.tsx          # 메인 홈 (서버 컴포넌트, defaultContent 사용)
│   ├── globals.css       # keyframe 애니메이션 + CSS 변수 + CMS 유틸리티
│   └── cms/
│       └── page.tsx      # CMS 대시보드 (클라이언트 컴포넌트)
├── components/
│   ├── Nav.tsx           # 고정 네비 (스크롤 blur, 모바일 오버레이)
│   ├── Hero.tsx          # Aurora 배경 + 대형 헤드라인
│   ├── Features.tsx      # About 섹션 (강점 카드 + CountUp 통계)
│   ├── Works.tsx         # Products 섹션 (More/Less 토글)
│   ├── Process.tsx       # Business 섹션 (4단계 프로세스)
│   ├── CTA.tsx           # Contact 섹션
│   ├── Footer.tsx        # 푸터
│   ├── Reveal.tsx        # 스크롤 트리거 fade-up (IntersectionObserver)
│   └── CountUp.tsx       # 숫자 카운트업 (requestAnimationFrame + easeOutExpo)
├── lib/
│   └── cms-store.ts      # defaultContent + loadContent / saveContent / resetContent
└── types/
    └── cms.ts            # HeroContent, Feature, Product, ProcessStep, CTAContent, FooterContent, SiteContent
```

---

## 컴포넌트 스타일링 규칙

- 컴포넌트 스타일은 **100% 인라인 스타일** 사용 (Tailwind 클래스 신뢰 불가)
- Tailwind는 CMS 페이지(`/cms`)와 레이아웃에서만 사용
- 이벤트 핸들러(`onMouseEnter` 등) 있는 컴포넌트는 반드시 `"use client"` 선언
- 아이콘: SVG 인라인 사용 (외부 아이콘 라이브러리 설치 금지)
- 이미지: `next/image` 사용
- 링크: 섹션 내부는 `<a href="#...">`, 페이지 이동은 `next/link`

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

---

## 네비게이션 메뉴

| 라벨 | 링크 |
|---|---|
| About | `#about` |
| Business | `#business` |
| Project | — (미구현) |
| Product | `#products` |
| Contact Us | `#contact` |
| SEbit AI ↗ | `href="#"` (추후 URL 연결, `target="_blank"`) |

---

## 구현 완료 항목

- [x] Next.js 16 + TypeScript + Tailwind CSS v4 셋팅
- [x] 전체 섹션 100svh 풀스크린 레이아웃
- [x] Aurora orb 3개 + grid-drift 배경 (Hero, CTA)
- [x] 스크롤 트리거 Reveal 애니메이션 (Reveal.tsx)
- [x] CountUp 숫자 카운트업 애니메이션 (CountUp.tsx)
- [x] 네비게이션 영문 메뉴 + SEbit AI 링크
- [x] 모바일 풀스크린 오버레이 메뉴
- [x] Product 타입 + SmartGeoKit 8개 실데이터
- [x] Products 섹션 More/Less 토글 (초기 4개 노출)
- [x] CMS `/cms` — Products 편집 (버전, 카테고리, 태그, 설명)
- [x] 흰색 포인트 헤딩 6vw / fontWeight:400 통일

---

## 앞으로 할 작업

- [ ] 제품 상세 페이지 (`/products/[id]`)
- [ ] 프로젝트 수행 실적 페이지
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
