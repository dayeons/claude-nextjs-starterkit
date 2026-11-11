import { Loader2 } from "lucide-react";

// 라우트 로딩 UI
export default function Loading() {
  return (
    <div className="flex items-center justify-center py-24">
      <Loader2 className="text-muted-foreground size-6 animate-spin" />
    </div>
  );
}
