import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  views?: number;   // ← 추가 (목록에서 쓰임)
};
export type Post = PostMeta & { content: string };

// 모든 글 파일의 slug 목록
export function getPostSlugs(): string[] {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

// slug로 글 하나 읽기 (본문 포함)
export function getPostBySlug(slug: string): Post | undefined {
  try {
    const fullPath = path.join(postsDir, `${slug}.md`);
    const file = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(file);
    return {
      slug,
      title: data.title,
      date: data.date,
      summary: data.summary,
      content,
    };
  } catch {
    return undefined;
  }
}

// 목록용 (본문 제외, 최신순)
export function getPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const { content, ...meta } = getPostBySlug(slug)!;
      return meta;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}