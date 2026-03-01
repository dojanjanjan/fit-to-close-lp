import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://vvywdpymtswmsadpqvzw.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2eXdkcHltdHN3bXNhZHBxdnp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NjU2ODUsImV4cCI6MjA4MTQ0MTY4NX0.qoV8xTFqJ3P-eyqxTCpgxaDVUQ7TEgxg8w1lx-IwnTk'

// Always create client with fallback if env is missing
export const supabase = createClient(supabaseUrl, supabaseKey)
