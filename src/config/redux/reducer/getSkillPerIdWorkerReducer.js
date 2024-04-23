const getSkillInitialState = {
    skills: [],
    loading: false,
    error: null
}

const getSkillPerIdWorkerReducer = (state=getSkillInitialState, action) =>{
    switch (action.type) {
        case "GET_SKILL_PER_ID_WORKER_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "GET_SKILL_PER_ID_WORKER_SUCCEED":
            return {
                ...state,
                loading: false,
                skills: action.payload
            }
            break;
        case "GET_SKILL_PER_ID_WORKER_FAILED":
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

export default getSkillPerIdWorkerReducer