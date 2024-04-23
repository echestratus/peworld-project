const getPortfolioInitialState = {
    portofolio: [],
    loading: false,
    error: null    
}
const getPortfolioPerIdWorkerReducer = (state=getPortfolioInitialState, action) => {
    switch (action.type) {
        case "GET_PORTFOLIO_PER_ID_WORKER_REQUEST":
            return {
                ...state,
                loading: true
            }
            break;
        case "GET_PORTFOLIO_PER_ID_WORKER_SUCCEED":
            return {
                ...state,
                loading: false,
                portofolio: action.payload
            }
            break;
        case "GET_PORTFOLIO_PER_ID_WORKER_FAILED":
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

export default getPortfolioPerIdWorkerReducer