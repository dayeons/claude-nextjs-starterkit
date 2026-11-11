"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  variant?: "desktop" | "mobile";
  className?: string;
}

// http(s)로 시작하면 외부 링크로 판단한다
function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

// 현재 경로와 비교해 active 여부를 판단한다 ("/"는 정확히 일치할 때만)
function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

// 내비게이션 링크: 외부 링크는 새 창 + 아이콘, 내부 링크는 active 표시
export function NavLink({
  href,
  children,
  variant = "desktop",
  className,
}: NavLinkProps) {
  const pathname = usePathname();
  const external = isExternal(href);
  const active = !external && isActivePath(pathname, href);

  const classes = cn(
    "inline-flex items-center gap-1 text-sm transition-colors",
    variant === "desktop" &&
      "relative py-1 after:absolute after:inset-x-0 after:-bottom-[15px] after:h-0.5 after:rounded-full after:bg-transparent",
    variant === "mobile" && "rounded-md px-3 py-2",
    active
      ? cn(
          "font-medium text-foreground",
          variant === "desktop" && "after:bg-foreground",
          variant === "mobile" && "bg-accent",
        )
      : "text-muted-foreground hover:text-foreground",
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        <ExternalLink className="size-3.5" aria-hidden="true" />
        <span className="sr-only">(새 창에서 열림)</span>
      </a>
    );
  }

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={classes}
    >
      {children}
    </Link>
  );
}
