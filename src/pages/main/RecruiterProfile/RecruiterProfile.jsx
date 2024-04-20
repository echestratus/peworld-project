import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardRecruiterProfile from '../../../components/modules/Card/CardRecruiterProfile'
import { useNavigate } from 'react-router-dom'

const RecruiterProfile = () => {
    const [recruiterData, setRecruiterData] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
        setLoading(true)
        axios.get(`${import.meta.env.VITE_BE_URL}/recruiters/profile`,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res)=>{
            setLoading(false)
            console.log(res.data.data);
            setRecruiterData(res.data.data)
        })
        .catch((err)=>{
            setLoading(false)
            console.log(err.response);
        })
    },[])
    const handleClickEditProfileCompany = () => {
        navigate('/main/recruiterprofile/editprofilecompany')
    }

  return (
    <div className='w-full h-auto flex justify-center bg-[#F6F7F8]'>
        {loading ? (
        <h1 className='font-extrabold text-5xl text-center'>LOADING....</h1>
        ) : (
        <CardRecruiterProfile recruiterData={recruiterData} handleClickEditProfileCompany = {handleClickEditProfileCompany} />
        )}
        
    </div>
  )
}

export default RecruiterProfile