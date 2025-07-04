import { ref } from 'vue';
import { supabase } from '../lib/supabase';
import type { User } from '@supabase/supabase-js';

export function useAuth() {
  const user = ref<User | null>(null);
  const error = ref<string | null>(null);

  async function signUp(email: string, password: string) {
    error.value = null;
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });
    if (signUpError) {
      error.value = signUpError.message;
    } else {
      user.value = data.user;
    }
  }

  async function signIn(email: string, password: string) {
    error.value = null;
    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (signInError) {
      error.value = signInError.message;
    } else {
      user.value = data.user;
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    user.value = null;
  }

  return {
    user,
    error,
    signUp,
    signIn,
    signOut,
  };
}