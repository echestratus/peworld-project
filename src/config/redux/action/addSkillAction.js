import axios from "axios"

export const addSkillAction = (formProfile, setFormProfile, getMyData) => (dispatch) => {
    dispatch({
        type: "ADD_SKILL_REQUEST"
    })
    axios.post(`${import.meta.env.VITE_BE_URL}/skills`, { skill_name: formProfile.skill_name }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then((res) => {
          alert(`Added Skill: ${formProfile.skill_name}`)
          setFormProfile({
            ...formProfile,
            skill_name: ""
          })
          console.log(formProfile.skill_name);
          dispatch({
            type: "ADD_SKILL_SUCCEED"
          })
          getMyData()
        })
        .catch((err) => {
          console.log(err.response);
          dispatch({
            type: "ADD_SKILL_FAILED",
            payload: err.response
          })
          alert(`Failed adding skill`)
        })
}