import axios from "axios"

export const updateProfileWorkersAction = (formProfile, getMyData) => (dispatch) => {
    dispatch({
        type: "UPDATE_PROFILE_WORKERS_REQUEST"
    })
    axios.put(`${import.meta.env.VITE_BE_URL}/workers/profile`, {
        name: formProfile.name,
        job_desk: formProfile.job_desk,
        domicile: formProfile.domicile,
        workplace: formProfile.workplace,
        description: formProfile.description
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then((res) => {
          console.log('show res PUT');
          console.log(res);
          dispatch({
            type: "UPDATE_PROFILE_WORKERS_SUCCEED"
          })
          alert('Update succeed')
          getMyData()
        })
        .catch((err) => {
          console.log(err.response);
          dispatch({
            type: "UPDATE_PROFILE_WORKERS_FAILED",
            payload: err.response
          })
          alert('Update failed')
        })
}