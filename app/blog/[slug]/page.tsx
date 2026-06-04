import { getPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Metadata } from "next";

// ① 빌드 시점에 "어떤 글들이 있는지" 알려줌
export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

// ② 실제 글 페이지
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();   // 없는 글이면 404 페이지로
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <Link href="/blog" className="text-sm text-blue-600 hover:underline">
        ← 목록으로
      </Link>
      <h1 className="text-3xl font-bold mt-4 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{post.date}</p>
      <article className="prose prose-neutral max-w-none mt-8">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
            </ReactMarkdown>
        </article>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}