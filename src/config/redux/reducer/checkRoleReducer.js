const checkRoleInitialState = {
    role: "",
    loading: false,
    error: null
}

const checkRoleReducer = (state=checkRoleInitialState, action) => {
    switch (action.type) {
        case "CHECK_ROLE_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "CHECK_ROLE_SUCCEED":
            return {
                ...state,
                role: action.payload,
                loading: false
            }
            break;
        case "CHECK_ROLE_FAILED":
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

export default checkRoleReducer