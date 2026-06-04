import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">변유진</h1>
      <p className="text-gray-600 mb-8">프론트엔드 개발자 · 기록하는 사람</p>
      <Link href="/blog" className="text-blue-600 hover:underline">
        블로그 글 보기 →
      </Link>
    </main>
  );
}