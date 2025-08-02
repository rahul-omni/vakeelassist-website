


import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface FeedbackRequest {
  email?: string;
  rating: number;
  suggestion?: string;
  deviceId?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { email, rating, suggestion, deviceId } = await request.json() as FeedbackRequest;
    // Proper way to get IP in Next.js
    const ip = request.headers.get('x-real-ip') || 
                request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                'unknown';
    // Validate required fields first
    if (typeof rating !== 'number') {
      return NextResponse.json(
        { success: false, message: 'Rating must be a number' },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { success: false, message: 'Rating must be between 1-5' },
        { status: 400 }
      );
    }

    // Check for existing submission using both deviceId and IP
    const existing = await prisma.websiteFeedback.findFirst({
      where: { 
        OR: [
          { deviceId: deviceId || undefined },
          { ipAddress: ip || undefined }
        ]
      }
    });

    if (existing) {
      return NextResponse.json(
        { 
          success: false, 
          code: 'ALREADY_SUBMITTED',
          message: 'Feedback already submitted from this device',
          existingId: existing.id
        },
        { status: 400 }
      );
    }

    // Create feedback with both identifiers
    const feedback = await prisma.websiteFeedback.create({
      data: {
        email: email || null,
        rating,
        suggestion: suggestion || null,
        ipAddress: ip || null,
        deviceId: deviceId || null
      }
    });

    return NextResponse.json(
      { 
        success: true,
        data: { 
          id: feedback.id,
          recordedAt: feedback.createdAt 
        } 
      },
      { status: 201 }
    );

  } catch (error: unknown) {
    console.error('Database error:', error);

    // Handle specific Prisma errors
    if (error instanceof Error && 'code' in error && error.code === 'P2002') {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Duplicate submission detected',
          code: 'DUPLICATE_ENTRY'
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { 
        success: false,
        message: 'Failed to submit feedback',
        ...(process.env.NODE_ENV === 'development' && {
          error: error instanceof Error ? error.message : 'Unknown error',
          stack: error instanceof Error ? error.stack : undefined
        })
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}