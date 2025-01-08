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

export async function updateUser(user) {
    const { data, error } = await supabase
    .from('profiles')
    .update({first_name: user.firstName, last_name: user.lastName})
    .eq('id', user.id)
    .select()

    if (error) {
        throw new Error(error.message)
    }

    return data;
}