import axios from "axios"

export const checkRoleAction = () => (dispatch) =>{
    dispatch({
        type: "CHECK_ROLE_REQUEST"
    })
    axios.get(`${import.meta.env.VITE_BE_URL}/auth/check-role`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        console.log(res.data.data.data.role);
        localStorage.setItem('role',res.data.data.data.role)
        dispatch({
            type: "CHECK_ROLE_SUCCEED",
            payload: res.data.data.data.role
        })
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({
            type: "CHECK_ROLE_FAILED",
            payload: err.response
        })
      })
}