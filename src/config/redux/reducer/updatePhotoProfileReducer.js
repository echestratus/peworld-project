const updatePhotoProfileInitialState = {
    loading: false,
    error: null
}

const updatePhotoProfileReducer = (state=updatePhotoProfileInitialState, action) => {
    switch (action.type) {
        case "UPDATE_PHOTO_PROFILE_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "UPDATE_PHOTO_PROFILE_SUCCEED":
            return {
                ...state,
                loading: false
            }
            break;
        case "UPDATE_PHOTO_PROFILE_FAILED":
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
export default updatePhotoProfileReducer