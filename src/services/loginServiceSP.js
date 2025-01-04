import { supabase } from "./SupabaseClient";
/**
 * Logs in user.
 * @param {string} email 
 * @param {string} password 
 * @returns {object} session 
 */
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

/**
 * Registers new user
 * @param {string} email 
 * @param {string} password 
 * @returns {object} user object 
 */
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

/**
 * Logs out current user and clears localstorage of user info.
 */
export async function logout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        throw new Error("Error logging out: " + error.message)
    }
}