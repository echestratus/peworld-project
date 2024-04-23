const addSkillInitialState = {
    loading: false,
    error: null
}
const addSkillReducer = (state=addSkillInitialState, action) => {
    switch (action.type) {
        case "ADD_SKILL_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "ADD_SKILL_SUCCEED":
            return {
                ...state,
                loading: false
            }
            break;
        case "ADD_SKILL_FAILED":
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

export default addSkillReducer