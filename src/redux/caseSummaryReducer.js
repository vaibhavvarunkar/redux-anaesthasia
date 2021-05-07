import { SET_AGEE, SET_AGEE_TYPE, SET_ASAPS, SET_CATEGORY_SURGERY_NAME, SET_EMERGENCY, SET_GENDER_TYPE, SET_MEDICAL_HISTORY, SET_PATIENT_HEIGHT, SET_PATIENT_HEIGHT_TYPE, SET_PATIENT_TYPE, SET_PATIENT_WEIGHT, SET_PATIENT_WEIGHT_TYPE, SET_SUB_SURGERY_NAME, SET_SURGERY_NAME } from "./caseSummaryTypes"

const initialState = {
    agee: "",
    ageeType: "",
    genderType: "",
    patientsType: "",
    patientsHeight: "",
    patientsHeightType: "",
    patientsWeight: "",
    patientsWeightType: "",
    patientsAsap: "",
    patientsEmergency: "",
    surgeryName: "",
    subSurgeryName: "",
    categorySurgeryName: "",
    choiceAnswer: "",
}

const caseSummaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AGEE:
            return {
                ...state,
                agee: action.payload
            }
        case SET_AGEE_TYPE:
            return {
                ...state,
                ageeType: action.payload
            }
        case SET_GENDER_TYPE:
            return {
                ...state,
                genderType: action.payload
            }
        case SET_PATIENT_TYPE:
            return {
                ...state,
                patientsType: action.payload
            }
        case SET_PATIENT_HEIGHT:
            return {
                ...state,
                patientsHeight: action.payload
            }
        case SET_PATIENT_HEIGHT_TYPE:
            return {
                ...state,
                patientsHeightType: action.payload
            }
        case SET_PATIENT_WEIGHT:
            return {
                ...state,
                patientsWeight: action.payload
            }
        case SET_PATIENT_WEIGHT_TYPE:
            return {
                ...state,
                patientsWeightType: action.payload
            }
        case SET_ASAPS:
            return {
                ...state,
                patientsAsap: action.payload
            }
        case SET_EMERGENCY:
            return {
                ...state,
                patientsEmergency: action.payload
            }
        case SET_SURGERY_NAME:
            return {
                ...state,
                surgeryName: action.payload
            }
        case SET_SUB_SURGERY_NAME:
            return {
                ...state,
                subSurgeryName: action.payload
            }
        case SET_CATEGORY_SURGERY_NAME:
            return {
                ...state,
                categorySurgeryName: action.payload
            }
        case SET_MEDICAL_HISTORY:
            return {
                ...state,
                choiceAnswer: action.payload
            }
        default: return state
    }
}

export default caseSummaryReducer