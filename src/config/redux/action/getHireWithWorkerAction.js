import axios from "axios";

export const getHireWithWorkerAction = () => (dispatch) => {
    dispatch({
        type: "GET_HIRE_WITH_WORKER_REQUEST"
    })
    axios.get(`${import.meta.env.VITE_BE_URL}/hire/workers`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then((res) => {
        console.log(res.data.data);
        dispatch({
            type: "GET_HIRE_WITH_WORKER_SUCCEED",
            payload: res.data.data
        })
    })
    .catch((err) => {
        console.log(err.response);
        dispatch({
            type: "GET_HIRE_WITH_WORKER_FAILED",
            payload: err.response
        })
    })
}