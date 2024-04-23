const getExperienceInitialState = {
    myExperience: [],
    loading: false,
    error: null
}

const getExperienceReducer = (state=getExperienceInitialState, action) => {
    switch (action.type) {
        case "GET_EXPERIENCE_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "GET_EXPERIENCE_SUCCEED":
            return {
                ...state,
                loading: false,
                myExperience: action.payload
            }
            break;
        case "GET_EXPERIENCE_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
            break;
    }
}
export default getExperienceReducer