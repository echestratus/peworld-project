const registerInitialState = {
    loading: false,
    error: null
}

const registerWorkerReducer = (state=registerInitialState, action) => {
    switch (action.type) {
        case "REGISTER_WORKER_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "REGISTER_WORKER_SUCCEED":
            return {
                ...state,
                loading: false
            }
            break;
        case "REGISTER_WORKER_FAILED":
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

export default registerWorkerReducer