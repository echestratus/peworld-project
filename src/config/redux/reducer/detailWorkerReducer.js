const initialState = {
    workersDetail: {},
    loading: false,
    error: null
}
const detailWorkerReducer = (state=initialState, action) => {
    switch (action.type) {
        case "DETAIL_WORKER_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "DETAIL_WORKER_SUCCEED":
            return {
                ...state,
                loading: false,
                workersDetail: action.payload
            }
            break;
        case "DETAIL_WORKER_FAILED":
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
export default detailWorkerReducer