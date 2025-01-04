import { supabase } from "./supabaseClient";

export async function getPets() {
    const { data, error } = await supabase
        .from('patient')
        .select()

    if (error) {
        throw new Error(error.message)
    }

    return data
}

export async function getPet(petId) {
    const { data, error } = await supabase
        .from('patient')
        .select()
        .eq('patient_id', petId)

    if (error) {
        throw new Error(error.message)
    }

    return data
}

export function imgSource(id) {
    return '/src/assets/img/' + id + '.jpg'
}
