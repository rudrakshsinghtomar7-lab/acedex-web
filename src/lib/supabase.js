// © 2026 Rudraksh Singh Tomar. All rights reserved.
// Same Supabase project as the Acedex app. The site only ever INSERTs into the
// `waitlist` table; RLS (migration 023_waitlist.sql) blocks all public reads.
import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = url && key ? createClient(url, key) : null;
