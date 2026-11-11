# Next.js 스타터킷

웹 개발을 빠르게 시작하기 위한 스타터킷입니다.

## 기술 스택

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (`tailwind.config` 없음, `@tailwindcss/postcss` 사용)
- [shadcn/ui](https://ui.shadcn.com) (radix, Nova 프리셋)
- [lucide-react](https://lucide.dev)
- next-themes (라이트/다크/시스템 테마)

## 시작하기

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## 스크립트

| 명령                | 설명                  |
| ------------------- | --------------------- |
| `npm run dev`       | 개발 서버 (Turbopack) |
| `npm run build`     | 프로덕션 빌드         |
| `npm run start`     | 프로덕션 서버 실행    |
| `npm run lint`      | ESLint 검사           |
| `npm run typecheck` | 타입 검사             |
| `npm run format`    | Prettier 포맷         |

## 폴더 구조

```
src/
├── app/                 # 라우트 (layout, page, not-found, error, loading)
├── components/
│   ├── layout/          # Header, Footer
│   ├── ui/              # shadcn/ui 컴포넌트
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── config/site.ts       # 사이트명, 설명, 내비게이션
└── lib/utils.ts         # cn 유틸
```

## shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add <컴포넌트명>
```

## 참고: Cache Components

`create-next-app` 권장 기본값에 따라 `next.config.ts`에 `cacheComponents`, `partialPrefetching`, `reactCompiler`가 켜져 있습니다.
Cache Components 환경에서는 요청 시점 데이터(cookies, headers, fetch 등)를 `<Suspense>` 경계 안에서 사용해야 합니다.
필요 없다면 `next.config.ts`에서 해당 옵션을 제거하세요.
