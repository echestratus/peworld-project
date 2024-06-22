const initialState = {
    formHire: [],
    loading: false,
    error: null
}

const getHireWithWorkerReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_HIRE_WITH_WORKER_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "GET_HIRE_WITH_WORKER_SUCCEED":
            return {
                ...state,
                loading: false,
                formHire: action.payload
            }
            break;
        case "GET_HIRE_WITH_WORKER_FAILED":
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

export default getHireWithWorkerReducer