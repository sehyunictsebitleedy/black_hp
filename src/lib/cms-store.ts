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
  works: [
    {
      id: "w1",
      title: "SmartGeoKit 2D GIS Engine",
      category: "공간정보",
      year: "2024",
      description: "웹 기반 2D GIS 엔진으로 대용량 공간데이터를 빠르게 시각화합니다.",
      tags: ["GIS", "Web", "Engine"],
    },
    {
      id: "w2",
      title: "CAD Compare",
      category: "도면 비교",
      year: "2024",
      description: "CAD 도면을 레이어 단위로 비교·분석하는 솔루션입니다.",
      tags: ["CAD", "비교분석", "설계"],
    },
    {
      id: "w3",
      title: "CAD View",
      category: "도면 뷰어",
      year: "2023",
      description: "별도 설치 없이 브라우저에서 CAD 파일을 바로 열람합니다.",
      tags: ["CAD", "뷰어", "Web"],
    },
    {
      id: "w4",
      title: "공간정보 통합 플랫폼",
      category: "플랫폼",
      year: "2023",
      description: "공공기관용 공간정보 수집·관리·서비스 통합 플랫폼 구축.",
      tags: ["공공", "GIS", "플랫폼"],
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
