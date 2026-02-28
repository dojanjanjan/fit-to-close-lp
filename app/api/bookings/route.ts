import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  // Simple CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { headers })
  }

  if (!supabase) {
    return NextResponse.json(
      { error: 'Database not configured' },
      { status: 500, headers }
    )
  }

  try {
    const { data, error } = await supabase
      .from('ftc_bookings')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50)

    if (error) throw error

    return NextResponse.json(data, { headers })
  } catch (err) {
    console.error('Failed to fetch bookings:', err)
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500, headers }
    )
  }
}