const uploadImageInitialState = {
    loading: false,
    error: null
}
const uploadImagePortfolioReducer = (state=uploadImageInitialState, action) => {
    switch (action.type) {
        case "UPLOAD_IMAGE_PORTFOLIO_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "UPLOAD_IMAGE_PORTFOLIO_SUCCEED":
            return {
                ...state,
                loading: false
            }
            break;
        case "UPLOAD_IMAGE_PORTFOLIO_FAILED":
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
export default uploadImagePortfolioReducer