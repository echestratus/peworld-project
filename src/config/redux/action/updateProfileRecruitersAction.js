import axios from "axios"

export const updateProfileRecruitersAction = (formProfile, getMyData) => (dispatch) =>{
    dispatch({
        type: "UPDATE_PROFILE_RECRUITERS_REQUEST"
    })
    axios.put(`${import.meta.env.VITE_BE_URL}/recruiters/profile`, {
        company: formProfile.company,
        position: formProfile.position,
        city: formProfile.city,
        description: formProfile.description,
        phone: formProfile.phone,
        instagram: formProfile.instagram,
        linkedin: formProfile.linkedin,
        photo: formProfile.photo
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then((res) => {
            dispatch({
                type: "UPDATE_PROFILE_RECRUITERS_SUCCEED"
            })
          console.log('show res PUT');
          console.log(res);
          alert('Update succeed')
          getMyData()
        })
        .catch((err) => {
          console.log(err.response);
          dispatch({
            type: "UPDATE_PROFILE_RECRUITERS_FAILED",
            payload: err.response
          })
          alert('Update failed')
        })
}