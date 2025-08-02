import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export const dynamic = 'force-dynamic' // Required for Next.js 15 API routes

export async function POST(request: NextRequest) {
  try {
    const { deviceId } = await request.json()
    
     const ip = request.headers.get('x-real-ip') || 
                request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                'unknown';

    if (!deviceId && !ip) {
      return NextResponse.json(
        { hasSubmitted: false, message: 'No identifier provided' },
        { status: 400 } // Changed to 400 for bad request
      )
    }

    const existing = await prisma.websiteFeedback.findFirst({
      where: {
        OR: [
          ...(deviceId ? [{ deviceId }] : []),
          ...(ip ? [{ ipAddress: ip }] : [])
        ]
      },
      select: { id: true }
    })

    return NextResponse.json({
      hasSubmitted: !!existing,
      identifierUsed: deviceId ? 'deviceId' : 'ipAddress'
    })

  } catch (error) {
    console.error('Error checking feedback:', error)
    return NextResponse.json(
      { hasSubmitted: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}