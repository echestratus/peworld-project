const profileInitialState = {
    myDetail: {},
    loading: false,
    error: null
}

const profileWorkerReducer = (state=profileInitialState, action) => {
    switch (action.type) {
        case "PROFILE_WORKER_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "PROFILE_WORKER_SUCCEED":
            return {
                ...state,
                myDetail: action.payload,
                loading: false
            }
            break;
        case "PROFILE_WORKER_FAILED":
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

export default profileWorkerReducer