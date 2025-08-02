// app/api/check-feedback/route.ts
import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export const dynamic = 'force-dynamic'
export const runtime = 'edge' // Optional: Consider using Edge runtime if appropriate

export async function POST(request: NextRequest) {
  // Debugging: Log the incoming request
  console.log('[check-feedback] Incoming request')
  
  try {
    const requestBody = await request.json()
    console.log('[check-feedback] Request body:', requestBody)
    
    const { deviceId } = requestBody
    
     const ip = request.headers.get('x-real-ip') || 
                request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                'unknown';

    console.log('[check-feedback] Identifiers:', { deviceId, ip })

    if (!deviceId && !ip) {
      console.warn('[check-feedback] No identifier provided')
      return NextResponse.json(
        { hasSubmitted: false, message: 'No identifier provided' },
        { status: 400 }
      )
    }

    const queryConditions = {
      OR: [
        ...(deviceId ? [{ deviceId }] : []),
        ...(ip ? [{ ipAddress: ip }] : [])
      ]
    }
    console.log('[check-feedback] DB query conditions:', queryConditions)

    const existing = await prisma.websiteFeedback.findFirst({
      where: queryConditions,
      select: { id: true }
    })

    console.log('[check-feedback] DB query result:', existing)

    return NextResponse.json({
      hasSubmitted: !!existing,
      identifierUsed: deviceId ? 'deviceId' : 'ipAddress'
    })

  } catch (error) {
    console.error('[check-feedback] Error:', error)
    return NextResponse.json(
      { 
        hasSubmitted: false,
        message: 'Internal server error',
        ...(process.env.NODE_ENV === 'development' && {
          error: error instanceof Error ? error.message : 'Unknown error'
        })
      },
      { status: 500 }
    )
  }
}