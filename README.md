# 세현ICT — Smarter IT Solution Provider

> sehyunict.com 리뉴얼 프로젝트. Next.js 기반 블랙 테마 홈페이지 + 프론트엔드 CMS.

---

## 기술 스택

| 항목 | 내용 |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + CSS Custom Properties |
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
│   │   ├── globals.css         # 전역 스타일 (디자인 토큰, 애니메이션)
│   │   └── cms/
│   │       ├── layout.tsx      # CMS 레이아웃
│   │       └── page.tsx        # CMS 대시보드 (클라이언트 컴포넌트)
│   │
│   ├── components/
│   │   ├── Nav.tsx             # 상단 고정 네비게이션 (스크롤 blur 효과)
│   │   ├── Hero.tsx            # 히어로 섹션 (Canvas 파티클 + orb 애니메이션)
│   │   ├── MarqueeStrip.tsx    # 서비스 키워드 롤링 띠
│   │   ├── Features.tsx        # 핵심 강점 + 수치 통계 섹션
│   │   ├── Works.tsx           # 제품 목록 (SmartGeoKit 시리즈)
│   │   ├── Process.tsx         # 업무 프로세스 4단계
│   │   ├── CTA.tsx             # 문의 CTA + 연락처
│   │   └── Footer.tsx          # 푸터
│   │
│   ├── lib/
│   │   └── cms-store.ts        # 기본 콘텐츠 정의 + localStorage 저장/불러오기
│   │
│   └── types/
│       └── cms.ts              # 콘텐츠 타입 정의 (TypeScript interface)
│
├── public/                     # 정적 에셋
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

---

## 페이지 구성

### `/` — 메인 홈페이지

| 순서 | 섹션 | 컴포넌트 | 설명 |
|---|---|---|---|
| 1 | Navigation | `Nav.tsx` | 투명 → 스크롤 시 blur/border, 모바일 풀스크린 메뉴 |
| 2 | Hero | `Hero.tsx` | Canvas 파티클 네트워크, glow orb, 대형 한글 타이포, 통계 수치 |
| 3 | Marquee | `MarqueeStrip.tsx` | GIS / CAD / SmartGeoKit 키워드 롤링 |
| 4 | Features | `Features.tsx` | 핵심 강점 3가지 + 설립연도·프로젝트·파트너 수치 그리드 |
| 5 | Products | `Works.tsx` | SmartGeoKit 시리즈 제품 목록 (데스크탑 테이블 / 모바일 카드) |
| 6 | Process | `Process.tsx` | 4단계 업무 프로세스 카드 그리드 |
| 7 | CTA | `CTA.tsx` | 문의하기 버튼 + 이메일·전화·주소 |
| 8 | Footer | `Footer.tsx` | 브랜드 정보, 링크, 개인정보처리방침 |

### `/cms` — CMS 대시보드

| 메뉴 | 편집 가능 항목 |
|---|---|
| Overview | 전체 섹션 요약 카드 (빠른 이동) |
| Hero | 아이브로우, 헤드라인, 서브헤드라인, CTA 버튼 텍스트 |
| Features | 강점 항목 추가 / 수정 / 삭제 |
| Works | 제품·프로젝트 항목 추가 / 수정 / 삭제 |
| Process | 프로세스 단계 추가 / 수정 / 삭제 |
| CTA | 헤드라인, 서브텍스트, 버튼 텍스트 |
| Footer | 브랜드명, 태그라인, 이메일, 전화번호 |

> 저장 방식: **localStorage** (브라우저 새로고침 후에도 유지)
> 실제 서비스 전환 시 Supabase / Notion API 등 백엔드 연동 필요.

---

## 디자인 시스템

### 색상 토큰 (CSS Custom Properties)

```css
--bg:             #060606                      /* 메인 배경 */
--surface:        #0e0e0e                      /* 카드/섹션 배경 */
--surface-2:      #161616                      /* 보조 배경 */
--surface-3:      #202020                      /* 강조 배경 */
--border:         rgba(255, 255, 255, 0.07)    /* 기본 보더 */
--border-hover:   rgba(255, 255, 255, 0.14)    /* 호버 보더 */
--text-primary:   #f0ede8                      /* 주요 텍스트 */
--text-secondary: rgba(240, 237, 232, 0.48)    /* 보조 텍스트 */
--text-tertiary:  rgba(240, 237, 232, 0.20)    /* 흐린 텍스트 */
--accent:         #4f7ef5                      /* 포인트 컬러 (블루) */
```

### 타이포그래피

| 클래스 | 크기 (clamp) | 용도 |
|---|---|---|
| `.display-xl` | 3rem → 7.5rem | 히어로 메인 헤드라인 |
| `.display-lg` | 2.2rem → 4.5rem | 섹션 타이틀 |
| `.display-md` | 1.5rem → 2.8rem | 서브 타이틀, 리스트 항목 |
| `.label` | 0.63rem / 트래킹 0.2em | 라벨, 카테고리 배지 |

### CSS 유틸리티

| 클래스 | 설명 |
|---|---|
| `.glass` | glassmorphism (backdrop-blur + 반투명) |
| `.bg-grid` | 56px 격자 배경 패턴 |
| `.card-hover` | translateY + border 호버 트랜지션 |
| `.btn-primary` | 흰 배경 + 다크 텍스트 버튼 |
| `.btn-secondary` | 투명 + 보더 아웃라인 버튼 |
| `.tag` | 소형 라운드 태그 배지 |
| `.link-arrow` | 화살표 포함 텍스트 링크 |
| `.animate-fadeUp` | 아래→위 페이드인 (delay 유틸 지원) |
| `.animate-marquee` | 무한 좌측 스크롤 |
| `.animate-orb` | glow orb 플로팅 애니메이션 |

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
| [popupstudio.ai](https://popupstudio.ai/home) | 다크 테마, 대형 타이포, glassmorphism |
| [hyundairs.co.kr](https://www.hyundairs.co.kr) | 한국 기업 레이아웃 구조 |
| [gsds.kaist.ac.kr](https://gsds.kaist.ac.kr) | 클린 한글 타이포그래피 |
| [wellysis.com](https://www.wellysis.com) | 모듈형 섹션, 미니멀 UI |

---

## 향후 작업 예정

- [ ] 스크롤 트리거 애니메이션 (Intersection Observer)
- [ ] 백엔드 CMS 연동 (Supabase 또는 Notion API)
- [ ] 프로젝트 상세 페이지 (`/projects/[id]`)
- [ ] 제품 상세 페이지 (`/products/[id]`)
- [ ] 다국어 지원 (한국어 / 영어)
- [ ] 채용 페이지
- [ ] OG 이미지 및 SEO 최적화
- [ ] Vercel 배포 연결

---

## 라이선스

© 2025 세현ICT. All rights reserved.
