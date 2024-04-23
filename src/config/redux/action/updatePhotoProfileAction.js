import axios from "axios"

export const updatePhotoProfileAction = (file, getMyData) => (dispatch) => {
    dispatch({
        type: "UPDATE_PHOTO_PROFILE_REQUEST"
    })
    const formData = new FormData()
    formData.append('photo', file)
    axios.put(`${import.meta.env.VITE_BE_URL}/workers/profile/photo`, formData, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        const { photo } = res.data.data
        console.log(photo);
        alert('Update photo succeed')
        getMyData()

      })
      .catch((err) => {
        console.log(err.response);
        alert(`can't upload image`)
      })
}