import axios from "axios"

export const deleteSkillAction = (skillId, getMyData) => (dispatch) => {
    dispatch({
        type: "DELETE_SKILL_REQUEST"
    })
    axios.delete(`${import.meta.env.VITE_BE_URL}/skills/${skillId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((res)=>{
      console.log(res);
      dispatch({
        type: "DELETE_SKILL_SUCCEED"
      })
      alert('Skill deleted')
      getMyData()
    })
    .catch((err)=>{
      console.log(err.response);
      dispatch({
        type: "DELETE_SKILL_FAILED",
        payload: err.response
      })
      alert('skill is not deleted')
    })
}