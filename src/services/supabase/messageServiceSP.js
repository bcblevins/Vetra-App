import { supabase } from "./supabaseClient";

/**
 * Get message by ID
 * @param {number} id 
 * @returns {object} message
 */
export async function getMessage(id) {
    const { data, error } = await supabase
        .from('message')
        .select()
        .eq('message_id', id)

    if (error) {
        throw new Error(error.message)
    }

    return data[0]
}

/**
 * Gets all messages for a patient
 * @param {number} patientId 
 * @returns {object[]} list of messages
 */
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

/**
 * Gets all messages associated with a test
 * @param {number} testId 
 * @returns {object[]} list of messages
 */
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

/**
 * Posts a new message returning the same message from API
 * @param {number} message 
 * @returns {object} message
 */
export async function sendMessage(message) {
    const { data, error } = await supabase
        .from('message')
        .insert(message)
        .select()

    if (error) {
        throw new Error(error.message)
    }

    return data
}