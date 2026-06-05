import fs from "fs";
import path from "path";

const viewsFile = path.join(process.cwd(), "view.json");

// 파일 읽기 (없으면 빈 객체)
function readViews(): Record<string, number>{
    try{
        return JSON.parse(fs.readFileSync(viewsFile,"utf8"));
    }catch{
        return {};
    }
}

// slug 조회수 +1하고 새 값 반환
export function incrementView(slug: string): number {
    const views = readViews();
    views[slug] = (views[slug] ?? 0) + 1;
    fs.writeFileSync(viewsFile, JSON.stringify(views, null, 2));
    return views[slug];
}

// 전체 조회수 객체 읽기 (목록용)
export function getAllViews(): Record<string, number> {
    return readViews();
  }