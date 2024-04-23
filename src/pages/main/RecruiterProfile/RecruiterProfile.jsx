import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardRecruiterProfile from '../../../components/modules/Card/CardRecruiterProfile'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { profileRecruiterAction } from '../../../config/redux/action/profileRecruiterAction'

const RecruiterProfile = () => {
    // const [recruiterData, setRecruiterData] = useState({})
    const {loading, myDetail: recruiterData} = useSelector((state)=>state.profileRecruiter) 
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(profileRecruiterAction())
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