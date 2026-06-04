import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getPosts();   // 컴포넌트에서 데이터 직접 가져옴

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">블로그</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-xl font-semibold group-hover:underline">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="text-gray-600 mt-1">{post.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}