import axios from "axios"

export const loginAction = (form, navigate) => (dispatch) => {
    dispatch({
        type: "LOGIN_REQUEST"
    })
    axios.post(`${import.meta.env.VITE_BE_URL}/auth/login`, {
        email: form.email,
        password: form.password
    })
        .then((res) => {
            const { token, refreshToken } = res.data.data
            localStorage.setItem('token', token)
            localStorage.setItem('refreshToken', refreshToken)
            dispatch({
                type: "LOGIN_SUCCEED"
            })
            alert(`${res.data.message}`)
            navigate(`/`)
        })
        .catch((err) => {
            dispatch({
                type: "LOGIN_FAILED",
                payload: err.response.data.message
            })
            console.log(err.response);
            alert(`${err.response.data.message}`)
        })
}