'use client';

import { useEffect, useRef, useState } from "react";

export default function ViewCounter( { slug }: { slug: string}){
    const [count, setCount] = useState<number | null>(null);
    const called = useRef(false);   // ← 호출 여부 기록
    
    useEffect(() => {
        if (called.current) return;   // 이미 호출했으면 중단
        called.current = true;
        
        fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/api/views/${slug}`, {method: "POST"})
        .then((res) => res.json())
        .then((data) => setCount(data.count))
        .catch((err) => {
            console.error("조회수 에러:", err);   // ← 추가
            setCount(null)
        });
    },[slug]);

    return (
        <span className="text-sm text-gray-500">
            조회수 {count ?? "—"}
        </span>
    )
}