# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 명령어

```bash
npm run dev        # 개발 서버 (Turbopack, http://localhost:3000)
npm run build      # 프로덕션 빌드
npm run lint       # ESLint (자동 수정: npm run lint:fix)
npm run typecheck  # tsc --noEmit
npm run format     # Prettier (prettier-plugin-tailwindcss로 클래스 정렬)
```

테스트 러너는 설정되어 있지 않다.

## 중요: Next.js 16 주의

`AGENTS.md`에 명시된 대로 이 Next.js(16.x)는 기존 지식과 다른 breaking change가 있다. Next.js 코드를 작성하기 전에 `node_modules/next/dist/docs/`의 관련 가이드를 먼저 읽을 것. (`AGENTS.md`는 `next dev`가 자동으로 다시 추가하는 블록이다.)

## 아키텍처

- **App Router + `src/` 구조**, 경로 별칭 `@/*` → `src/*`.
- **`next.config.ts`에서 `cacheComponents`, `partialPrefetching`, `reactCompiler`가 켜져 있다.**
  - Cache Components: 요청 시점 데이터(cookies, headers, fetch 등)는 `<Suspense>` 경계 안에서 사용해야 한다.
  - React Compiler: 수동 `useMemo`/`useCallback`은 대체로 불필요하다.
- **루트 레이아웃** (`src/app/layout.tsx`): `ThemeProvider`(next-themes, class 방식, 기본 system) → `Header` / `main` / `Footer` / `Toaster`. 타입은 전역 `LayoutProps<"/">`를 사용한다. `<html lang="ko" suppressHydrationWarning>`은 next-themes 때문에 필요하다.
- **`src/config/site.ts`의 `siteConfig`**가 사이트명, 설명, 내비게이션(`nav`)의 단일 출처다. 메타데이터 템플릿과 Header(데스크톱 가로 메뉴 + 모바일 Sheet 메뉴)가 모두 이를 참조한다. 메뉴 추가는 `nav` 배열만 수정하면 된다.
- **`NavLink`** (`src/components/layout/nav-link.tsx`, client component): `http(s)://`로 시작하는 href는 외부 링크로 간주해 새 창 + 아이콘 + sr-only 안내를 렌더링하고, 내부 링크는 `usePathname`으로 active 상태(`aria-current`)를 표시한다. `"/"`는 정확히 일치할 때만 active.
- **스타일링**: Tailwind CSS v4 (`tailwind.config` 없음, 테마 토큰은 `src/app/globals.css`의 CSS 변수/`@theme inline`). `cn()` 유틸은 `src/lib/utils.ts`.
- **shadcn/ui** (`radix-nova` 스타일, lucide 아이콘): 컴포넌트는 `src/components/ui/`에 위치하며 `npx shadcn@latest add <name>`으로 추가한다. 별칭은 `components.json` 참고.

## 컨벤션

- 코드 주석, 커밋 메시지, 문서는 한국어로 작성하고 변수/함수명은 영어를 사용한다.
- Prettier: 세미콜론 사용, 큰따옴표.
- 환경 변수 예시는 `.env.example` 참고 (`.env.local`로 복사해 사용).
