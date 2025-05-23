
import { createBrowserClient } from '@supabase/ssr'

// Create a client for the browser
export function createClientClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}