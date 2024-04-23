const uploadInitialState = {
    file_url: '',
    loading: false,
    error: null
}
const uploadSingleFileReducer = (state=uploadInitialState, action) =>{
    switch (action.type) {
        case "UPLOAD_SINGLE_FILE_REQUEST":
            return {
                ...state,
                loading: true,
            }
            break;
        case "UPLOAD_SINGLE_FILE_SUCCEED":
            return {
                ...state,
                file_url: action.payload,
                loading: false
            }
            break;
        case "UPLOAD_SINGLE_FILE_FAILED":
            return {
                ...state,
                error: action.payload,
                loading: false
            }
            break;
    
        default:
            return state
            break;
    }
}

export default uploadSingleFileReducer