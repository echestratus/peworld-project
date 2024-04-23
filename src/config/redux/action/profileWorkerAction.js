import axios from "axios"

export const profileWorkerAction = (setFormProfile, formProfile) => (dispatch) => {
    dispatch({
        type: "PROFILE_WORKER_REQUEST"
    })
    axios.get(`${import.meta.env.VITE_BE_URL}/workers/profile`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
        .then((res) => {
            console.log('Show res');
            console.log(res);
            console.log('Show res.data.data');
            console.log(res.data.data);
            if (formProfile) {
                setFormProfile({
                    ...formProfile,
                    name: res.data.data.name ? res.data.data.name : "",
                    job_desk: res.data.data.job_desk ? res.data.data.job_desk : "",
                    domicile: res.data.data.domicile ? res.data.data.domicile : "",
                    workplace: res.data.data.workplace ? res.data.data.workplace : "",
                    description: res.data.data.description ? res.data.data.description : ""
                })
            }
            dispatch({
                type: "PROFILE_WORKER_SUCCEED",
                payload: res.data.data
            })
        })
        .catch((err) => {
            console.log(err.response);
            dispatch({
                type: "PROFILE_WORKER_FAILED",
                payload: err.response
            })
        })
}