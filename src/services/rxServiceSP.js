import { supabase } from "./SupabaseClient";

export async function getMeds(petId) {
    const { data, error } = await supabase
    .from('prescription')
    .select()
    .eq('patient_id', petId)

    if (error) {
        throw new Error(error.message)
    }

    return data
}

