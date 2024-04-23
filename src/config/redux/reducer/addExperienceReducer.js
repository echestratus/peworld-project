const addExperienceInitialState = {
    loading: false,
    error: null
}

const addExperienceReducer = (state=addExperienceInitialState, action) => {
    switch (action.type) {
        case "ADD_EXPERIENCE_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "ADD_EXPERIENCE_SUCCEED":
            return {
                ...state,
                loading: false
            }
            break;
        case "ADD_EXPERIENCE_FAILED":
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

export default addExperienceReducer