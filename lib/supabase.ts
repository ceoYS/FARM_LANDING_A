import { createClient } from '@supabase/supabase-js';
import { Database } from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4YW1wbGUiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDk5NTIwMCwiZXhwIjoxOTU2NTcxMjAwfQ.example';

// 개발/프로덕션에서만 실제 환경변수 체크
if (process.env.NODE_ENV !== 'test' && supabaseUrl === 'https://placeholder.supabase.co') {
  console.warn('Supabase URL not configured. Set NEXT_PUBLIC_SUPABASE_URL environment variable.');
}

if (process.env.NODE_ENV !== 'test' && supabaseAnonKey === 'placeholder-key') {
  console.warn('Supabase Anon Key not configured. Set NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable.');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export type SupabaseClient = typeof supabase;