const deleteSkillInitialState = {
    loading: false,
    error: null
}
const deleteSkillReducer = (state=deleteSkillInitialState, action) => {
    switch (action.type) {
        case "DELETE_SKILL_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "DELETE_SKILL_SUCCEED":
            return {
                ...state,
                loading: false
            }
            break;
        case "DELETE_SKILL_FAILED":
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

export default deleteSkillReducer