const loginInitialState = {
    loading: false,
    error: null
}

const loginReducer = (state=loginInitialState, action) =>{
    switch (action.type) {
        case "LOGIN_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "LOGIN_SUCCEED":
            return {
                ...state,
                loading: false
            }
            break;
        case "LOGIN_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            break;
        default:
            return state
    }
}
export default loginReducer