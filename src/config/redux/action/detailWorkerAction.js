import axios from "axios"

export const detailWorkerAction = (id) => (dispatch) => {
    dispatch({
        type: "DETAIL_WORKER_REQUEST"
    })
    axios.get(`${import.meta.env.VITE_BE_URL}/workers/${id}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then((res)=>{
        dispatch({
            type: "DETAIL_WORKER_SUCCEED",
            payload: res.data.data
        })
    })
    .catch((err)=>{
        dispatch({
            type: "DETAIL_WORKER_FAILED",
            payload: err.response
        })
    })
}