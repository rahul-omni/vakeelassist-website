// app/api/post/route.ts
import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.RAG_BACKEND;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Example: Extract fields
    const { query, num_results } = body;

    const response = await fetch(`${API_BASE_URL}/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: query.trim(),
          num_results
        }),
      });

    const res = await response.json();

    return NextResponse.json({ message: 'Post created successfully', data: res });
  } catch {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
