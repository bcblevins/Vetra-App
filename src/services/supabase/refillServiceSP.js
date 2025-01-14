import { supabase } from "./supabaseClient";

export async function getRefillRequests(rxId) {
    const { data, error } = await supabase
        .from('request')
        .select()
        .eq('prescription_id', rxId)

    if (error) {
        throw new Error(error.message)
    }

    return data
}

// TODO: this function makes no sense. Should be an insert, also need to figure out how to handle refill requests.
export async function sendRefillRequest(med) {
    const { data, error } = await supabase
        .from('request')
        .insert({
            prescription_id: med.prescription_id,
            user_id: med.doctor
        })
        .select()

    if (error) {
        throw new Error(error.message)
    }

    return data
}