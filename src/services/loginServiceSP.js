import { supabase } from "./SupabaseClient";

export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  if (error) {
    throw new Error("Login error: " + error.message)
  }
  
  return data
}

export async function register(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })
  if (error) {
    throw new Error("Error registering new user: " + error.message)
  }
  return data
}

export async function logout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        throw new Error("Error logging out: " + error.message)
    }
}