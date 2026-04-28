import { createClient } from '@supabase/supabase-js';

// Supabase Configuration
// You will need to replace these with your actual Supabase URL and Anon Key
// from your Supabase project settings: https://supabase.com/dashboard/project/_/settings/api

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
