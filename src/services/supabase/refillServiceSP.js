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

export async function sendRefillRequest(rxId) {
    const { data, error } = await supabase
        .from('request')
        .select()
        .eq('prescription_id', rxId)

    if (error) {
        throw new Error(error.message)
    }

    return data
}