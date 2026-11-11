import { Layers, Moon, Palette, Shapes, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// 스타터킷이 제공하는 기술 스택 목록
const features: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Next.js 16",
    description: "App Router, Turbopack 기본 번들러",
    icon: Zap,
  },
  {
    title: "Tailwind CSS v4",
    description: "설정 파일 없이 CSS 중심 구성",
    icon: Palette,
  },
  {
    title: "shadcn/ui",
    description: "복사해서 쓰는 접근성 좋은 컴포넌트",
    icon: Layers,
  },
  { title: "lucide-react", description: "일관된 아이콘 세트", icon: Shapes },
  {
    title: "다크 모드",
    description: "next-themes 기반 라이트/다크/시스템",
    icon: Moon,
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <section className="flex flex-col items-center gap-6 text-center">
        <Badge variant="secondary">Starter Kit</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          빠르게 시작하는 웹 개발
        </h1>
        <p className="text-muted-foreground max-w-xl">
          Next.js, TypeScript, Tailwind CSS, shadcn/ui가 준비되어 있습니다.
          <code className="bg-muted mx-1 rounded px-1.5 py-0.5 font-mono text-sm">
            src/app/page.tsx
          </code>
          를 수정해 시작하세요.
        </p>
        <div className="flex gap-3">
          <Button asChild>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js 문서
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href="https://ui.shadcn.com/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              shadcn/ui 문서
            </a>
          </Button>
        </div>
      </section>

      <section className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, icon: Icon }) => (
          <Card key={title}>
            <CardHeader>
              <Icon className="text-muted-foreground mb-2 size-5" />
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </div>
  );
}
