// import { createClient } from '@supabase/supabase-js';

// export const createClientClient = () => {
//   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
//   const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

//   if (!supabaseUrl || !supabaseKey) {
//     throw new Error('Missing Supabase URL or key');
//   }

//   return createClient(supabaseUrl, supabaseKey);
// }; 

import { createBrowserClient } from '@supabase/ssr'

export function createClientClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}