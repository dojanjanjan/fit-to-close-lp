import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const keys = Object.keys(process.env).filter(k => k.includes('SUPABASE') || k.includes('DATABASE'))
  
  return NextResponse.json({
    hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    hasSupabaseKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    totalKeys: keys.length,
    keys: keys.map(k => `${k}: ${process.env[k] ? 'set' : 'not set'}`)
  })
}