const initialState = {
    workersData: [],
    loading: false,
    error: null
}
const getWorkerHomeReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_WORKERS_HOME_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "GET_WORKERS_HOME_SUCCEED":
            return {
                ...state,
                loading:false,
                workersData: action.payload
            }
            break;
        case "GET_WORKERS_HOME_FAILED":
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

export default getWorkerHomeReducer