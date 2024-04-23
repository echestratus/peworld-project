import axios from "axios"

export const addHireAction = (formHire, setFormHire) => (dispatch) => {
    dispatch({
        type: "ADD_HIRE_REQUEST"
    })
    axios.post(`${import.meta.env.VITE_BE_URL}/hire`, {
        message_purpose: formHire.message_purpose,
        worker_id: formHire.worker_id,
        name: formHire.name,
        email: formHire.email,
        phone: formHire.phone,
        desciption: formHire.description
    }, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then((res)=>{
        console.log(res);
        dispatch({
            type: "ADD_HIRE_SUCCEED",
        })
        alert('Hire Succeed \n'+`${JSON.stringify(formHire)}`)
        setFormHire({
            message_purpose: "",
            worker_id: "",
            name: "",
            email: "",
            phone: "",
            description: ""
        })
    })
    .catch((err)=>{
        console.log(err.response);
        dispatch({
            type: "ADD_HIRE_FAILED",
            payload: err.response
        })
        alert('Hire failed')
    })
}