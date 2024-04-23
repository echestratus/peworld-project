import axios from "axios"

export const getSkillPerIdWorkerAction = (id) => (dispatch) => {
    dispatch({
        type: "GET_SKILL_PER_ID_WORKER_REQUEST"
    })
    axios.get(`${import.meta.env.VITE_BE_URL}/skills/${id}`)
    .then((res)=>{
        dispatch({
            type: "GET_SKILL_PER_ID_WORKER_SUCCEED",
            payload: res.data.data
        })
    })
    .catch((err)=>{
        dispatch({
            type: "GET_SKILL_PER_ID_WORKER_FAILED",
            payload: err.response
        })
    })
}