'use client';

import { useState } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function PostSearch({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState("");

  // 검색어로 글 필터링 (제목 + 요약에서 검색, 대소문자 무시)
  const filtered = posts.filter((post) => {
    const text = (post.title + post.summary).toLowerCase();
    return text.includes(query.toLowerCase());
  });

  return (
    <div className="w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="글 검색..."
        className="w-full border border-gray-300 rounded-md px-4 py-2 mb-8
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {filtered.length === 0 ? (
        <p className="text-gray-500">검색 결과가 없습니다.</p>
      ) : (
        <ul className="space-y-6">
          {filtered.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-xl font-semibold group-hover:underline">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500">
                  {post.date} · 조회수 {post.views ?? 0}
                </p>
                <p className="text-gray-600 mt-1">{post.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}