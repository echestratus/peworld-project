import axios from "axios"

export const getPortfolioPerIdWorkerAction = (id) => (dispatch) => {
    dispatch({
        type: "GET_PORTFOLIO_PER_ID_WORKER_REQUEST"
    })
    axios.get(`${import.meta.env.VITE_BE_URL}/portfolio/${id}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem}`
        }
    })
    .then((res)=>{
        dispatch({
            type: "GET_PORTFOLIO_PER_ID_WORKER_SUCCEED",
            payload: res.data.data
        })
    })
    .catch((err)=>{
        dispatch({
            type: "GET_PORTFOLIO_PER_ID_WORKER_FAILED",
            payload: err.response
        })
    })
}