import axios from "axios"

export const uploadImagePortfolioAction = (portofolio, setPortofolio, file) => (dispatch) => {
    dispatch({
        type: "UPLOAD_IMAGE_PORTFOLIO_REQUEST"
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
        setPortofolio({
          ...portofolio,
          image: file_url
        })
        dispatch({
            type: "UPLOAD_IMAGE_PORTFOLIO_SUCCEED"
        })
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({
            type: "UPLOAD_IMAGE_PORTFOLIO_FAILED",
            payload: err.response
        })
        alert(`can't upload image`)
      })
}