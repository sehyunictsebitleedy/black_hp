# CLAUDE.md — 세현ICT 홈페이지 리뉴얼

## 프로젝트 개요

세현ICT (sehyunict.com) 홈페이지 리뉴얼 프로젝트.
공간정보 기반 IT 솔루션 기업의 브랜드 이미지를 MZ 감성의 블랙 테마로 재구축.

---

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + CSS Custom Properties
- **Font**: Geist Sans
- **CMS**: localStorage 기반 프론트엔드 CMS (`/cms`)
- **배포**: 미정

---

## 디자인 원칙

- 전체 테마: **블랙** (`#060606` 기반)
- 스타일: MZ 감성 / 세련되고 심플 / 10년차 디자이너 퀄리티
- 타이포: 한글+영문 혼용, 대형 weight-300 헤드라인
- 애니메이션: 과하지 않게, 의미 있는 모션만
- 레퍼런스: popupstudio.ai / hyundairs.co.kr / gsds.kaist.ac.kr / wellysis.com

---

## 폴더 구조

```
src/
├── app/
│   ├── page.tsx          # 메인 홈
│   ├── globals.css       # 디자인 토큰 + 유틸리티
│   └── cms/
│       └── page.tsx      # CMS 대시보드
├── components/           # 섹션 컴포넌트
├── lib/
│   └── cms-store.ts      # 콘텐츠 기본값 + 저장 로직
└── types/
    └── cms.ts            # 타입 정의
```

---

## 콘텐츠 (세현ICT)

- **회사명**: 세현ICT (Sehyun ICT)
- **슬로건**: Smarter IT Solution Provider Group / Leader of Smarter World
- **주요 제품**: SmartGeoKit 시리즈 (2D GIS Engine, CAD Compare, CAD View)
- **회사브랜드**: SEbit AI - 추가
- **주소**: 경기도 화성시 동탄기흥로 557, 1901호
- **이메일**: asset.manager@sehyunict.com
- **전화**: 070-4047-8955

---

## 작업 규칙

- 컴포넌트는 `src/components/` 에만 생성
- 새 페이지는 `src/app/` App Router 방식으로 생성
- 스타일은 Tailwind + `globals.css` 유틸리티 클래스 우선 사용
- 인라인 스타일은 CSS 변수 참조할 때만 허용
- 아이콘은 SVG 인라인 사용 (외부 아이콘 라이브러리 설치 금지)
- 이미지 최적화: `next/image` 사용
- 링크: `next/link` 사용

---

## 앞으로 할 작업

- [ ] 디자인 퀄리티 검토 및 개선
- [ ] 스크롤 트리거 애니메이션 (Intersection Observer)
- [ ] 프로젝트 상세 페이지 (`/projects/[id]`)
- [ ] 제품 상세 페이지 (`/products/[id]`)
- [ ] 다국어 지원 (KO / EN)
- [ ] 백엔드 CMS 연동 (미정)
- [ ] SEO 및 OG 이미지 설정
- [ ] Vercel 배포 연결
- [ ] 채용 페이지

---

## Git 규칙

- 브랜치: `main` (기본)
- 커밋 메시지: `feat:` / `fix:` / `style:` / `refactor:` / `docs:` prefix 사용
- 작성자: leedy / leedy@sehyunict.com
