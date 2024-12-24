import { supabase } from '../lib/supabase';

export const isEmailRegistered = async (email: string): Promise<boolean> => {
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: false,
    }
  });
  
  // If there's no error, it means the email exists
  return !error;
};