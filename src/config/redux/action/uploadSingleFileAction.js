import axios from "axios"

export const uploadSingleFileAction = (file,setFormProfile,formProfile) => (dispatch) =>{
    dispatch({
        type: "UPLOAD_SINGLE_FILE_REQUEST"
    })
    const formData = new FormData()
    formData.append('file', file)
    axios.post(`${import.meta.env.VITE_BE_URL}/upload`, formData, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        const { file_url } = res.data.data
        console.log(file_url);
        setFormProfile({
            ...formProfile,
            photo: file_url
        })
        // formProfile.photo = file_url
        dispatch({
            type: "UPLOAD_SINGLE_FILE_SUCCEED",
            payload: file_url
        })
      })
      .catch((err) => {
        dispatch({
            type: "UPLOAD_SINGLE_FILE_FAILED",
            payload: err.response
        })
        console.log(err.response);
        alert(`can't upload image`)
      })
}