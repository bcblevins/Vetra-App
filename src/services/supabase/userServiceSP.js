import { supabase } from "./supabaseClient";

export async function getUser(id) {
    const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('id', id);

    if (error) {
        throw new Error(error.message);
    }

    return data[0];
}

export async function getName(id) {
    const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('id', id)

    if (error) {
        throw new Error(error.message);
    }

    const user = data[0]

    
    if (user.role === 'DOCTOR') {
        return "Dr. " + user.first_name + " " + user.last_name;
    } else {
        return user.first_name + " " + user.last_name;
    }
    
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