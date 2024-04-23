const registerInitialState = {
    loading: false,
    error: null
}

const registerRecruiterReducer = (state=registerInitialState, action) => {
    switch (action.type) {
        case "REGISTER_RECRUITER_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "REGISTER_RECRUITER_SUCCEED":
            return {
                ...state,
                loading: false
            }
            break;
        case "REGISTER_RECRUITER_FAILED":
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

export default registerRecruiterReducer