import { supabase } from "./SupabaseClient";


export async function getMessage(id) {
    const { data, error } = await supabase
    .from('message')
    .select()
    .eq('message_id', id)

    if (error) {
        throw new Error(error.message)
    }

    return data
}

export async function getMessagesByPatient(patientId) {
    const { data, error } = await supabase
    .from('message')
    .select()
    .eq('patient_id', patientId)

    if (error) {
        throw new Error(error.message)
    }

    return data
}

export async function getMessagesByTest(testId) {
    const { data, error } = await supabase
    .from('message')
    .select()
    .eq('test_id', testId)

    if (error) {
        throw new Error(error.message)
    }

    return data
}

export async function sendMessage(message) {
    const { data, error } = await supabase
    .from('message')
    .insert(message)

    if (error) {
        throw new Error(error.message)
    }

    return data
}