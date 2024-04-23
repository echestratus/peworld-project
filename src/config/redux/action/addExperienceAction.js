import axios from "axios"

export const addExperienceAction = (month, year, setWorkMonthYear, formProfile, setFormProfile, getMyData) => (dispatch) => {
    dispatch({
        type: "ADD_EXPERIENCE_REQUEST"
    })
    axios.post(`${import.meta.env.VITE_BE_URL}/experience`, {
      position: formProfile.position,
      company: formProfile.company,
      work_month: month,
      work_year: year,
      description: formProfile.work_description
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        alert(`Added Work Experience`)
        dispatch({
            type: "ADD_EXPERIENCE_SUCCEED"
        })
        setFormProfile({
            ...formProfile,
            position: "",
            company: "",
            work_description: ""
        })
        setWorkMonthYear('')
        getMyData()
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({
            type: "ADD_EXPERIENCE_FAILED"
        })
        alert(`Failed adding experience`)
      })
}