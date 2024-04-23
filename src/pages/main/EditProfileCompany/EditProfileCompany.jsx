import ButtonMain from '../../../components/base/Button/ButtonMain'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom'
import CardMyProfile from '../../../components/modules/Footer/CardMyProfile'
import Input from '../../../components/base/Input/Input'
import CardEditProfileCompany from '../../../components/modules/Card/CardEditProfileCompany'
import TextArea from '../../../components/base/Input/TextArea'
import ButtonAuth from '../../../components/base/Button/ButtonAuth'
import ButtonYellowBGWhite from '../../../components/base/Button/ButtonYellowBGWhite'
import { useDispatch, useSelector } from 'react-redux'
import { profileRecruiterAction } from '../../../config/redux/action/profileRecruiterAction'
import { uploadSingleFileAction } from '../../../config/redux/action/uploadSingleFileAction'
import { updateProfileRecruitersAction } from '../../../config/redux/action/updateProfileRecruitersAction'

const EditProfileCompany = () => {
  const [CompanyDetail, setCompanyDetail] = useState({})
  // const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { myDetail: myDetailRecruiter, loading } = useSelector((state) => state.profileRecruiter)

  let [formProfile, setFormProfile] = useState({
    company: "",
    position: "",
    city: "",
    description: "",
    phone: "",
    instagram: "",
    linkedin: "",
    photo: ""
  })

  useEffect(() => {
    getMyData()
  }, [])
  const getMyData = () => {
    dispatch(profileRecruiterAction(setFormProfile))
    console.log('formProfile');
    console.log(formProfile);
  }
  const handleChangeProfile = (e) => {
    setFormProfile({
      ...formProfile,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeUploadImage = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0]
    dispatch(uploadSingleFileAction(file, setFormProfile, formProfile))
  }

  const handleSubmitProfile = () => {
    dispatch(updateProfileRecruitersAction(formProfile, getMyData))
  }
  const handleClickCancel = () => {
    navigate('/main/recruiterprofile')
  }


  return (
    <div className='w-full h-auto min-h-[1000px] relative bg-[#F6F7F8]'>
      <div className='w-full h-[400px] bg-[#5E50A1] absolute'></div>
      {loading === true ? (
        <h1 className='font-extrabold text-5xl text-center relative'>LOADING....</h1>
      ) : (
        <div className='w-[1140px] h-auto mx-auto flex justify-between mt-[100px] mb-[400px] relative phone:max-tablet:max-w-[640px] phone:max-tablet:w-[320px] phone:max-tablet:flex-col phone:max-tablet:items-center phone:max-tablet:justify-start'>
          <div className='container w-[357px] h-auto rounded-md phone:max-tablet:max-w-[640px] phone:max-tablet:w-[320px]'>
            <CardEditProfileCompany formProfile={formProfile} handleSubmitProfile={handleSubmitProfile} handleClickCancel={handleClickCancel} handleChangeUploadImage={handleChangeUploadImage} />
          </div>
          <div className='container w-[753px] h-auto flex flex-col items-center rounded-md phone:max-tablet:max-w-[640px] phone:max-tablet:w-[320px]'>
            <div className='w-full h-auto min-h-[516px] mb-10 flex flex-col items-center rounded-md bg-white phone:max-tablet:max-w-[640px] phone:max-tablet:px-3'>
              <nav className='w-full h-auto relative mt-2 mb-5 border-b border-x-0 border-t-0 border-solid border-[#C4C4C4]'>
                <p className='text-[22px] font-semibold text-[#1F2A36] ml-7'>Company information</p>
              </nav>
              <div className='container w-[693px] h-auto flex flex-col gap-10 mb-16 phone:max-tablet:max-w-[640px] phone:max-tablet:w-[320px]'>
                <Input type='text' name='company' label="Company name" value={formProfile?.company} onChange={handleChangeProfile} placeholder="Input Company name" />
                <Input type='text' name='position' label="Field" value={formProfile?.position} onChange={handleChangeProfile} placeholder="Input company field" />
                <Input type='text' name='city' label="City" value={formProfile?.city} onChange={handleChangeProfile} placeholder="Input city" />
                <div className='w-[693px] h-[144px] phone:max-tablet:max-w-[640px] phone:max-tablet:w-[320px]'>
                  <TextArea type='text' name='description' label="Brief Description" value={formProfile?.description} onChange={handleChangeProfile} placeholder="Input brief description" />
                </div>
                <Input type='text' name='instagram' label="Instagram" value={formProfile?.instagram} onChange={handleChangeProfile} placeholder="Input instagram id" />
                <Input type='text' name='phone' label="Phone number" value={formProfile?.phone} onChange={handleChangeProfile} placeholder="Input phone number" />
                <Input type='text' name='linkedin' label="LinkedIn" value={formProfile?.linkedin} onChange={handleChangeProfile} placeholder="Input linkedin name" />
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default EditProfileCompany