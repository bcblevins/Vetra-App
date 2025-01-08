import { supabase } from "./supabaseClient";

export async function getTests(patientId) {
    const { data, error } = await supabase
        .from('test')
        .select()
        .eq('patient_id', patientId)

    if (error) {
        throw new Error(error.message)
    }

    return data
}

export async function getResults(testId) {
    const { data, error } = await supabase
        .from('result')
        .select()
        .eq('test_id', testId)

    if (error) {
        throw new Error(error.message)
    }

    return data
}