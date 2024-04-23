import axios from "axios"

export const registerRecruiterAction = (form, navigate) => (dispatch) => {
    if (form.password !== form.confirmPass) {
        alert(`Confirm password should be the same as Password you have inputted`)
        navigate(`/auth/register/registerrecruiter`)
    } else {
        dispatch({
            type: "REGISTER_RECRUITER_REQUEST"
        })
        axios.post(`${import.meta.env.VITE_BE_URL}/recruiters/register`, {
            email: form.email,
            password: form.password,
            name: form.name,
            company: form.company,
            position: form.position,
            phone: form.phone
        })
            .then((res) => {
                console.log(res);
                dispatch({
                    type: "REGISTER_RECRUITER_SUCCEED"
                })
                alert(`Register Succeed`)
                navigate(`/auth/login`)
            })
            .catch((err) => {
                console.log(err.response);
                dispatch({
                    type: "REGISTER_RECRUITER_FAILED",
                    payload: err.response.data.message
                })
                alert(`Register Failed`)
            })
    }
}