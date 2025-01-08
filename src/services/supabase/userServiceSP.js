import { supabase } from "./supabaseClient";

export async function getUser() {
    const { data, error } = await supabase
    .from('profiles')
    .select()

    if (error) {
        throw new Error(error.message);
    }

    return data;
}