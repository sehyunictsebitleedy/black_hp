import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMS — Studio",
  description: "Content Management System",
};

export default function CmsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
