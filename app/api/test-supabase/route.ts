import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const hasEnv = !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  const hasClient = !!supabase

  try {
    let tableExists = false
    let count = 0
    if (supabase) {
      const { data, error } = await supabase
        .from('ftc_bookings')
        .select('*', { count: 'exact', head: true })
      if (!error) {
        tableExists = true
        count = data?.length || 0
      }
    }

    return NextResponse.json({
      hasEnv,
      hasClient,
      tableExists,
      count,
      env: {
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'set' : 'not set',
        NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'set' : 'not set',
      }
    })
  } catch (err: any) {
    return NextResponse.json({
      hasEnv,
      hasClient,
      error: err.message
    })
  }
}