const initialState = {
    loading: false,
    error: null
}
const addHireReducer = (state=initialState, action) => {
    switch (action.type) {
        case "ADD_HIRE_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "ADD_HIRE_SUCCEED":
            return {
                ...state,
                loading: false,
            }
            break;
        case "ADD_HIRE_FAILED":
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
export default addHireReducer