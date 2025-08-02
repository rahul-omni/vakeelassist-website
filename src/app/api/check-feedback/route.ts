
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { deviceId } = await request.json(); // Changed from fingerprint to deviceId
     // Proper way to get IP in Next.js
    const ip = request.headers.get('x-real-ip') || 
                request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                'unknown';
    if (!deviceId && !ip) {
      return NextResponse.json(
        { hasSubmitted: false, message: 'No identifier provided' },
        { status: 200 }
      );
    }

    const existing = await prisma.websiteFeedback.findFirst({
      where: { 
        OR: [
          { deviceId: deviceId || undefined },
          { ipAddress: ip || undefined }
        ]
      },
      select: { id: true } // Only get what we need
    });

    return NextResponse.json(
      { 
        hasSubmitted: !!existing,
        identifierUsed: deviceId ? 'deviceId' : 'ipAddress'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error checking feedback:', error);
    return NextResponse.json(
      { 
        hasSubmitted: false,
        message: 'Error checking submission status'
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}