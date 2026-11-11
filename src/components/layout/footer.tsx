import { siteConfig } from "@/config/site";

// 하단 푸터
export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="text-muted-foreground mx-auto max-w-5xl px-4 text-center text-sm">
        {siteConfig.name} · Next.js, Tailwind CSS, shadcn/ui
      </div>
    </footer>
  );
}
