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

    return data[0];
}

export async function getPetName(petId) {
    const { data, error } = await supabase
    .from('patient')
    .select('name')
    .eq('patient_id', petId);

    if (error) {
        throw new Error(error.message);
    }

    return data[0].name;
}

export function imgSource(pet) {
    if ([1,2,3].includes(pet.patient_id)) {
        return '/img/' + pet.patient_id + '.jpg'
    } else {
        if (pet.species === "Canine") {
            return '/img/dog.png'
        } else {
            return '/img/cat.png'
        }
    }
}
