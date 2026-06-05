'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle(){
    const { theme, setTheme } = useTheme();
    const [ mounted, setMounted ] = useState(false);

    // 마운트 전엔 아무것도 안 그림 (서버/클라이언트 불일치 방지)
    useEffect(() => setMounted(true), []);
    if(!mounted) return null;

    return (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-md border border-gray-300 dark:border-gray-700
                     px-3 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="테마 전환"
        >
          {theme === "dark" ? "☀️ 라이트" : "🌙 다크"}
        </button>
      );
}