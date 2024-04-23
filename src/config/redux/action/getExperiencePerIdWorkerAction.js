import axios from "axios"

export const getExperiencePerIdWorkerAction = (id) => (dispatch) => {
    dispatch({
        type: "GET_EXPERIENCE_PER_ID_WORKER_REQUEST"
    })
    axios.get(`${import.meta.env.VITE_BE_URL}/experience/${id}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then((res)=>{
        dispatch({
            type: "GET_EXPERIENCE_PER_ID_WORKER_SUCCEED",
            payload: res.data.data
        })
    })
    .catch((err)=>{
        dispatch({
            type: "GET_EXPERIENCE_PER_ID_WORKER_FAILED",
            payload: err.response
        })
    })
}