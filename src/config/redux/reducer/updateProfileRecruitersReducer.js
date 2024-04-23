const updateInitialState = {
    loading: false,
    error: null
}
const updateProfileRecruitersReducer = (state=updateInitialState, action) => {
    switch (action.type) {
        case "UPDATE_PROFILE_RECRUITERS_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "UPDATE_PROFILE_RECRUITERS_SUCCEED":
            return {
                ...state,
                loading: false
            }
            break;
        case "UPDATE_PROFILE_RECRUITERS_FAILED":
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
export default updateProfileRecruitersReducer