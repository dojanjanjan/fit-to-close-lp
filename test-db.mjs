import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vvywdpymtswmsadpqvzw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2eXdkcHltdHN3bXNhZHBxdnp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NjU2ODUsImV4cCI6MjA4MTQ0MTY4NX0.qoV8xTFqJ3P-eyqxTCpgxaDVUQ7TEgxg8w1lx-IwnTk'

const supabase = createClient(supabaseUrl, supabaseKey)

async function test() {
  const { data, error } = await supabase
    .from('ftc_bookings')
    .select('*')
    .limit(1)

  if (error) {
    console.error('Error:', error.message)
    if (error.code === 'PGRST116' || error.message.includes('relation "public.ftc_bookings" does not exist')) {
        console.log('Table ftc_bookings does not exist.')
    }
  } else {
    console.log('Success! Table exists. Data count:', data.length)
  }
}

test()
