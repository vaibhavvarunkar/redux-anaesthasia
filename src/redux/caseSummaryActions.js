import { SET_AGEE, SET_AGEE_TYPE, SET_ASAPS, SET_CATEGORY_SURGERY_NAME, SET_EMERGENCY, SET_GENDER_TYPE, SET_MEDICAL_HISTORY, SET_PATIENT_HEIGHT, SET_PATIENT_HEIGHT_TYPE, SET_PATIENT_TYPE, SET_PATIENT_WEIGHT, SET_PATIENT_WEIGHT_TYPE, SET_SUB_SURGERY_NAME, SET_SURGERY_NAME } from "./caseSummaryTypes"

export const setAgee = agee => {
    return {
        type: SET_AGEE,
        payload: agee
    }
}

export const setAgeType = ageeType => {
    return {
        type: SET_AGEE_TYPE,
        payload: ageeType
    }
}

export const setGenderType = genderType => {
    return {
        type: SET_GENDER_TYPE,
        payload: genderType
    }
}

export const setPatientsType = patientsType => {
    return {
        type: SET_PATIENT_TYPE,
        payload: patientsType
    }
}

export const setPatientHeight = patientsHeight => {
    return {
        type: SET_PATIENT_HEIGHT,
        payload: patientsHeight
    }
}

export const setPatientHeightType = patientsHeightType => {
    return {
        type: SET_PATIENT_HEIGHT_TYPE,
        payload: patientsHeightType
    }
}

export const setPatientWeight = patientsWeight => {
    return {
        type: SET_PATIENT_WEIGHT,
        payload: patientsWeight
    }
}

export const setPatientWeightType = patientsWeightType => {
    return {
        type: SET_PATIENT_WEIGHT_TYPE,
        payload: patientsWeightType
    }
}

export const setAsaps = patientsAsaps => {
    return {
        type: SET_ASAPS,
        payload: patientsAsaps
    }
}

export const setEmergency = patientsEmergency => {
    return {
        type: SET_EMERGENCY,
        payload: patientsEmergency
    }
}

export const setSurgeryName = surgeryName => {
    return {
        type: SET_SURGERY_NAME,
        payload: surgeryName
    }
}

export const setSubSurgeryName = subSurgeryName => {
    return {
        type: SET_SUB_SURGERY_NAME,
        payload: subSurgeryName
    }
}

export const setCategorySurgeryName = categorySurgeryName => {
    return {
        type: SET_CATEGORY_SURGERY_NAME,
        payload: categorySurgeryName
    }
}

export const setMedicalHistory = choiceAnswer => {
    return {
        type: SET_MEDICAL_HISTORY,
        payload: choiceAnswer

    }
}

