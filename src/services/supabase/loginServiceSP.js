import { getPets } from "./petServiceSP"
import { supabase } from "./supabaseClient"
import { getUser } from "./userServiceSP"
import { store } from "@/main"

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

  const userResponse = await getUser();
  store.commit("SET_USER", userResponse);

  store.commit("SET_ROLES", userResponse.role);

  const pets = await getPets();

  store.commit("SET_PETS", [pets])

  return data
}

/**
 * Registers new user
 * @param {string} email 
 * @param {string} password 
 * @returns {{}} user object 
 */
export async function register(user) {
  // TODO: Need to understand how profile table trigger works so we can obtain info we need
  /* 
    According to supabase, this is the format of how signup should go:
    const { data, error } = await supabase.auth.signUp({
      email: 'valid.email@supabase.io',
      password: 'example-password',
      options: {
        data: {
          first_name: 'John',
          age: 27,
        },
      },
    })
  */
  const { data, error } = await supabase.auth.signUp({
    email: user.email,
    password: user.password,
    options: {
      data: {
        first_name: user.firstName,
        last_name: user.lastName,
        role: 'OWNER'
      },
    },
  })
  if (error) {
    throw new Error("Error registering new user: " + error)
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