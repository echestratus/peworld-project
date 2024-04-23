import axios from "axios"

export const profileRecruiterAction = (setFormProfile) => (dispatch) => {
    dispatch({
        type: "PROFILE_RECRUITER_REQUEST"
    })
    axios.get(`${import.meta.env.VITE_BE_URL}/recruiters/profile`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then((res) => {
          console.log('Show res');
          console.log(res);
          console.log('Show res.data.data');
          console.log(res.data.data);
          if(setFormProfile){
            setFormProfile(res.data.data)
          }
          dispatch({
            type: "PROFILE_RECRUITER_SUCCEED",
            payload: res.data.data
          })
        })
        .catch((err) => {
          console.log(err.response);
          dispatch({
            type: "PROFILE_RECRUITER_FAILED",
            payload: err.response
          })
        })
}