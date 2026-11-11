// 사이트 전역 설정 (이름, 설명, 내비게이션)
export const siteConfig = {
  name: "Next.js Starter Kit",
  description:
    "Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui, lucide-react 기반의 스타터킷",
  nav: [
    { title: "홈", href: "/" },
    { title: "문서", href: "https://nextjs.org/docs" },
  ],
} as const;
