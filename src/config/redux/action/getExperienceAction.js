import axios from "axios"

export const getExperienceAction = () => (dispatch) => {
    dispatch({
        type: "GET_EXPERIENCE_REQUEST"
    })
    axios.get(`${import.meta.env.VITE_BE_URL}/experience`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then((res)=>{
        dispatch({
            type: "GET_EXPERIENCE_SUCCEED",
            payload: res.data.data
        })
    })
    .catch((err)=>{
        dispatch({
            type: "GET_EXPERIENCE_FAILED",
            payload: err.response
        })
    })
}