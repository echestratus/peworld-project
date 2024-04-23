const addPortfolioInitialState = {
    loading: false,
    error: null
}
const addPortfolioReducer = (state=addPortfolioInitialState, action) => {
    switch (action.type) {
        case "ADD_PORTFOLIO_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "ADD_PORTFOLIO_SUCCEED":
            return {
                ...state,
                loading: false
            }
            break;
        case "ADD_PORTFOLIO_FAILED":
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
export default addPortfolioReducer