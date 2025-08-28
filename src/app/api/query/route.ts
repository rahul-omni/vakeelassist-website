// app/api/post/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

const API_BASE_URL = process.env.RAG_BACKEND;

function getTodayDate(): Date {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0); // normalize to midnight UTC
  return today;
}

async function incrementApiAnalytics(route: string) {
  const today = getTodayDate();

  try {
    await prisma.apiAnalytics.upsert({
      where: {
        route_date: {
          route,
          date: today,
        },
      },
      update: {
        count: { increment: 1 },
      },
      create: {
        route,
        date: today,
        count: 1,
      },
    });
  } catch (error) {
    console.error('Failed to update API analytics:', error);
  }
}


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Example: Extract fields
    const { query, is_testing } = body;
    
    const response = await fetch(`${API_BASE_URL}/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query.trim(),
        k: 5
      }),
    });
    
    const res = await response.json();
    const host = req.headers.get('host') || '';

    const isDev = host.includes('localhost') || host.startsWith('127.0.0.1');

    if (!isDev && !is_testing) {
      await incrementApiAnalytics('/query');
    }

    return NextResponse.json({ message: 'Post fetched successfully', data: res });
  } catch {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
