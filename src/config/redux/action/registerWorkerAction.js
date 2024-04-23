import axios from "axios"

export const registerWorkerAction = (form, navigate) => (dispatch) =>{
    if (form.password !== form.confirmPass) {
        alert(`Confirm password should be the same as Password you have inputted`)
        navigate(`/auth/register/registerworker`)
      } else {
        dispatch({
            type: "REGISTER_WORKER_REQUEST"
        })
        axios.post(`${import.meta.env.VITE_BE_URL}/workers/register`, {
          email: form.email,
          password: form.password,
          name: form.name,
          phone: form.phone
        })
          .then((res) => {
            console.log(res);
            dispatch({
                type: "REGISTER_WORKER_SUCCEED"
            })
            alert(`Register Succeed`)
            navigate(`/auth/login`)
          })
          .catch((err) => {
            console.log(err.response);
            dispatch({
                type: "REGISTER_WORKER_FAILED",
                payload: err.response
            })
            alert(`Register Failed`)
          })
      }
}