const initialState = {
    loading: false,
    error: null
}

const updateProfileWorkersReducer = (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_PROFILE_WORKERS_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "UPDATE_PROFILE_WORKERS_SUCCEED":
            return {
                ...state,
                loading: false
            }
            break;
        case "UPDATE_PROFILE_WORKERS_FAILED":
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
export default updateProfileWorkersReducer