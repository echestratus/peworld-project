const getMySkillInitialState = {
    mySkills: [],
    loading: false,
    error: null
}

const getMySkillReducer = (state=getMySkillInitialState, action) => {
    switch (action.type) {
        case "GET_MY_SKILL_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "GET_MY_SKILL_SUCCEED":
            return {
                ...state,
                loading: false,
                mySkills: action.payload
            }
            break;
        case "GET_MY_SKILL_FAILED":
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
export default getMySkillReducer