
// app/api/check-feedback/route.ts
import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export const dynamic = 'force-dynamic'
// Removed the Edge runtime since Prisma doesn't support it

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json()
    const { deviceId } = requestBody
    
    const ip = request.headers.get('x-real-ip') || 
               request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
               'unknown';

    if (!deviceId && !ip) {
      console.warn('[check-feedback] No identifier provided')
      return NextResponse.json(
        { hasSubmitted: false, message: 'No identifier provided' },
        { status: 400 }
      )
    }

     

     const existing = await prisma.websiteFeedback.findFirst({
  where: deviceId
    ? { deviceId } // primary check
    : { ipAddress: ip } // fallback only if no deviceId
});
   
    return NextResponse.json(
      
      {
      hasSubmitted: !!existing,
        identifierUsed: deviceId ? 'deviceId' : 'ipAddress'
    }
  
  )

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