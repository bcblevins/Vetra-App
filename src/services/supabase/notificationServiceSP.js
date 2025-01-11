import { supabase } from "./supabaseClient";

export async function getNotifications(patientIds) {

    if (!patientIds) {
        console.log("No patient ids passed to getNotifications")
        return
    }
    const { data, error } = await supabase
    .from('notification')
    .select()
    .in('patient_id', patientIds);

    if (error) {
        console.log(patientIds)
        throw new Error(error.message);
    }

    return data;
}

export async function markRead(notificationId) {
    const { data, error } = await supabase
    .from('notification')
    .update({is_read: true})
    .eq('notification_id', notificationId);

    if (error) {
        throw new Error(error.message);
    }

    return data;
}