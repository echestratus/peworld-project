import axios from "axios"

export const getMySkillAction = () => (dispatch) => {
    dispatch({
        type: "GET_MY_SKILL_REQUEST"
    })
    axios.get(`${import.meta.env.VITE_BE_URL}/skills`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then((res)=>{
        dispatch({
            type: "GET_MY_SKILL_SUCCEED",
            payload: res.data.data
        })
    })
    .catch((err)=>{
        dispatch({
            type: "GET_MY_SKILL_FAILED",
            payload: err.response
        })
    })
}