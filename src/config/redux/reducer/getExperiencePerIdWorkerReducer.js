const getExperienceInitialState = {
    experience: [],
    loading: false,
    error: null
}
const getExperiencePerIdWorkerReducer = (state=getExperienceInitialState, action) => {
    switch (action.type) {
        case "GET_EXPERIENCE_PER_ID_WORKER_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "GET_EXPERIENCE_PER_ID_WORKER_SUCCEED":
            return {
                ...state,
                loading: false,
                experience: action.payload
            }
            break;
        case "GET_EXPERIENCE_PER_ID_WORKER_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            break;
        default:
            return state
            break;
    }
}

export default getExperiencePerIdWorkerReducer