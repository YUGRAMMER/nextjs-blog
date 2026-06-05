import { incrementView } from "@/lib/views";
import { NextResponse } from "next/server";

export async function POST(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
  ) {
    const { slug } = await params;
    const count = incrementView(slug);
    return NextResponse.json({ count });
  }