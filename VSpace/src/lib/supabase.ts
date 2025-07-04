// src/lib/supabase.ts
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Lê as variáveis de ambiente do Vite (.env)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// Valida se as variáveis estão presentes
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Variáveis de ambiente do Supabase não configuradas');
}

// Cria e exporta o cliente Supabase
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);