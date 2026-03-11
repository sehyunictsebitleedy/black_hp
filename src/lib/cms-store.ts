import { SiteContent } from "@/types/cms";


export const defaultContent: SiteContent = {
  hero: {
    eyebrow: "Smarter IT Solution Provider",
    headline: "스마터한 세상을\n만들어갑니다.",
    subheadline: "세현ICT는 공간정보 기반의 IT 솔루션으로\n고객의 디지털 전환을 함께합니다.",
    ctaPrimary: "사업 소개",
    ctaSecondary: "제품 보기",
  },
  features: [
    {
      id: "f1",
      number: "01",
      title: "공간정보 기술",
      description: "GIS 엔진부터 CAD 뷰어까지, 공간정보 데이터를 최적화된 방식으로 처리합니다.",
    },
    {
      id: "f2",
      number: "02",
      title: "맞춤형 IT 솔루션",
      description: "고객의 업무 환경에 최적화된 IT 솔루션을 설계하고 구축합니다.",
    },
    {
      id: "f3",
      number: "03",
      title: "지속적인 파트너십",
      description: "구축 이후에도 지속적인 유지보수와 기술 지원으로 함께 성장합니다.",
    },
  ],
  products: [
    {
      id: "p1",
      title: "SmartGeoKit 2D GIS Engine",
      version: "v3.0",
      category: "GIS",
      description: "Html5 Canvas 기술 기반의 Web/Mobile GIS Image 엔진",
      tags: ["HTML5", "Canvas", "Web/Mobile"],
    },
    {
      id: "p2",
      title: "SmartGeoKit 3D GIS Engine",
      version: "v3.0",
      category: "GIS",
      description: "WebGL, Html5 기술 기반의 3D GIS Image 엔진",
      tags: ["WebGL", "3D", "HTML5"],
    },
    {
      id: "p3",
      title: "SmartGeoKit CAD View",
      version: "v3.0",
      category: "CAD",
      description: "Canvas, Tile Map, SVG, Html5 기술 기반의 CAD Viewer",
      tags: ["CAD", "SVG", "Web"],
    },
    {
      id: "p4",
      title: "SmartGeoKit CAD Compare",
      version: "v1.1",
      category: "CAD",
      description: "2개 버전의 CAD 파일 간 변경사항 자동 추적 Tool",
      tags: ["CAD", "비교분석"],
    },
    {
      id: "p5",
      title: "SmartGeoKit Layout Manager",
      version: "v2.3",
      category: "배치관리",
      description: "CAD/Image 기반 레이아웃 배치/정보연계 솔루션",
      tags: ["CAD", "Layout"],
    },
    {
      id: "p6",
      title: "SmartGeoKit Xler",
      version: "v1.0",
      category: "연계제어",
      description: "실시간 설비, 감지기, 시스템 연계 및 위치 판독 솔루션",
      tags: ["IoT", "실시간"],
    },
    {
      id: "p7",
      title: "SmartGeoKit AR",
      version: "v1.0",
      category: "AR",
      description: "현장정보와 Digital 정보의 복합/중첩 구현 솔루션",
      tags: ["AR", "현장"],
    },
    {
      id: "p8",
      title: "SmartGeoKit RMCP",
      version: "v1.0",
      category: "플랫폼",
      description: "Risk Monitoring Control Platform — 재해 복합 모니터링 지원",
      tags: ["모니터링", "플랫폼"],
    },
  ],
  process: [
    {
      id: "p1",
      number: "01",
      title: "요구사항 분석",
      description: "고객의 업무 환경과 요구사항을 면밀히 분석하여 최적의 방향을 설정합니다.",
      detail: "1–2주",
    },
    {
      id: "p2",
      number: "02",
      title: "솔루션 설계",
      description: "분석된 요구사항을 바탕으로 시스템 아키텍처와 UI/UX를 설계합니다.",
      detail: "2–3주",
    },
    {
      id: "p3",
      number: "03",
      title: "개발 및 구축",
      description: "검증된 기술 스택으로 안정적이고 확장 가능한 시스템을 개발합니다.",
      detail: "4–8주",
    },
    {
      id: "p4",
      number: "04",
      title: "운영 및 유지보수",
      description: "시스템 오픈 이후에도 지속적인 모니터링과 기술 지원을 제공합니다.",
      detail: "상시",
    },
  ],
  projects: [
    {
      id: "proj1",
      title: "국가도로 GIS 통합관리 플랫폼",
      client: "한국도로공사",
      year: "2023",
      category: "GIS 플랫폼",
      description: "전국 고속도로 공간데이터 통합 관리 및 시각화 웹 플랫폼 구축. SmartGeoKit 2D/3D 엔진 적용.",
      tags: ["GIS", "WebGL", "공간정보"],
    },
    {
      id: "proj2",
      title: "스마트 시설물 관리 시스템",
      client: "경기도청",
      year: "2023",
      category: "스마트시티",
      description: "IoT 센서 기반 실시간 시설물 위치 모니터링 및 이상 감지 시스템. SmartGeoKit Xler 적용.",
      tags: ["IoT", "실시간", "모니터링"],
    },
    {
      id: "proj3",
      title: "CAD 도면 통합 관리 솔루션",
      client: "LH 한국토지주택공사",
      year: "2022",
      category: "CAD / 도면",
      description: "대용량 CAD 도면 웹 뷰어 및 버전별 변경이력 추적 시스템 구축. SmartGeoKit CAD 제품군 적용.",
      tags: ["CAD", "도면관리", "Web"],
    },
    {
      id: "proj4",
      title: "AR 현장 점검 시스템",
      client: "한전KPS",
      year: "2022",
      category: "AR / 현장",
      description: "발전소 설비 AR 오버레이 점검 및 디지털트윈 연계 현장 관리 솔루션. SmartGeoKit AR 적용.",
      tags: ["AR", "디지털트윈", "현장"],
    },
    {
      id: "proj5",
      title: "재난안전 통합 모니터링",
      client: "소방청",
      year: "2021",
      category: "재난 / 안전",
      description: "다중 재해 유형 통합 모니터링 및 대응 의사결정 지원 시스템. SmartGeoKit RMCP 적용.",
      tags: ["모니터링", "재난", "GIS"],
    },
  ],
  clients: [
    { id: "c1",  name: "한국도로공사" },
    { id: "c2",  name: "국토교통부" },
    { id: "c3",  name: "경기도청" },
    { id: "c4",  name: "LH 한국토지주택공사" },
    { id: "c5",  name: "한전KPS" },
    { id: "c6",  name: "소방청" },
    { id: "c7",  name: "서울특별시" },
    { id: "c8",  name: "한국수자원공사" },
    { id: "c9",  name: "행정안전부" },
    { id: "c10", name: "국방부" },
    { id: "c11", name: "인천국제공항공사" },
    { id: "c12", name: "한국철도공사" },
  ],
  cta: {
    headline: "프로젝트를\n함께 시작할까요?",
    subtext: "공간정보 기반 IT 솔루션이 필요하다면 세현ICT와 상담해보세요.",
    buttonText: "문의하기",
  },
  footer: {
    studioName: "세현ICT",
    tagline: "Smarter IT Solution Provider Group",
    email: "asset.manager@sehyunict.com",
    instagram: "070-4047-8955",
    twitter: "@sehyunict",
  },
};

const STORAGE_KEY = "cms_content";

export function loadContent(): SiteContent {
  if (typeof window === "undefined") return defaultContent;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaultContent;
    return { ...defaultContent, ...JSON.parse(stored) };
  } catch {
    return defaultContent;
  }
}

export function saveContent(content: SiteContent): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
}

export function resetContent(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
