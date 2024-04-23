const profileInitialState = {
    myDetail: {},
    loading: false,
    error: null
}

const profileRecruiterReducer = (state=profileInitialState, action) => {
    switch (action.type) {
        case "PROFILE_RECRUITER_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "PROFILE_RECRUITER_SUCCEED":
            state = {
                ...state,
                loading: false,
                myDetail: action.payload
            }
            for (let key in state.myDetail) {
                if (key === 'photo' && state.myDetail[key] === null) {
                  state.myDetail[key] = "/src/assets/Main/icon_user_whiteongrey.svg"
                } else if (state.myDetail[key] === null) {
                  state.myDetail[key] = ""
                }
              }
            return state
            break;
        case "PROFILE_RECRUITER_FAILED":
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

export default profileRecruiterReducer