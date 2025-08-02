// app/api/website-feedback/route.ts
import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma' // Import from your shared instance

export const dynamic = 'force-dynamic' // Required for Next.js 15

interface FeedbackRequest {
  email?: string
  rating: number
  suggestion?: string
  deviceId?: string
}

export async function POST(request: NextRequest) {
  try {
    const { email, rating, suggestion, deviceId } = (await request.json()) as FeedbackRequest
    
    // Improved IP handling for Next.js 15
      const ip = request.headers.get('x-real-ip') || 
                request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                'unknown';

    // Validation
    if (typeof rating !== 'number' || rating < 1 || rating > 5) {
      return NextResponse.json(
        { success: false, message: 'Rating must be a number between 1-5' },
        { status: 400 }
      )
    }

    // Check for existing submission
    const existing = await prisma.websiteFeedback.findFirst({
      where: {
        OR: [
          ...(deviceId ? [{ deviceId }] : []),
          ...(ip ? [{ ipAddress: ip }] : [])
        ]
      }
    })

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          code: 'ALREADY_SUBMITTED',
          message: 'Feedback already submitted',
          existingId: existing.id
        },
        { status: 400 }
      )
    }

    // Create new feedback
    const feedback = await prisma.websiteFeedback.create({
      data: {
        email: email || null,
        rating,
        suggestion: suggestion || null,
        ipAddress: ip,
        deviceId: deviceId || null
      }
    })

    return NextResponse.json(
      {
        success: true,
        data: {
          id: feedback.id,
          recordedAt: feedback.createdAt
        }
      },
      { status: 201 }
    )

  } catch (error: unknown) {
    console.error('Database error:', error)

    // Type-safe error handling
    if (error instanceof Error) {
      // Prisma unique constraint violation
      if ('code' in error && error.code === 'P2002') {
        return NextResponse.json(
          {
            success: false,
            message: 'Duplicate submission detected',
            code: 'DUPLICATE_ENTRY'
          },
          { status: 409 }
        )
      }

      // General error response
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to submit feedback',
          ...(process.env.NODE_ENV === 'development' && {
            error: error.message,
            stack: error.stack
          })
        },
        { status: 500 }
      )
    }

    // Fallback for non-Error exceptions
    return NextResponse.json(
      {
        success: false,
        message: 'Unknown error occurred'
      },
      { status: 500 }
    )
  }
}