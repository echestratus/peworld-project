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

const EditProfileCompany = () => {
  const [CompanyDetail, setCompanyDetail] = useState({})
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const [formProfile, setFormProfile] = useState({
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
    setLoading(true)
    getMyData()
  }, [])
  const getMyData = () => {
    setLoading(true)
    axios.get(`${import.meta.env.VITE_BE_URL}/recruiters/profile`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((res)=>{
      setLoading(false)
      console.log(res.data.data);
      setFormProfile(res.data.data)
      for(let key in formProfile){
        if(key === 'photo' && formProfile[key] === null){
          formProfile[key] = "https://openclipart.org/image/2400px/svg_to_png/250353/icon_user_whiteongrey.png"
        } else if(formProfile[key]===null){
          formProfile[key] = ""
        }
      }

    })
    .catch((err)=>{
      setLoading(false)
      console.log(err.response);
      alert(`Something's Wrong`)
    })
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
        formProfile.photo = file_url
      })
      .catch((err) => {
        console.log(err.response);
        alert(`can't upload image`)
      })
  }

  const handleSubmitProfile = () => {
    axios.put(`${import.meta.env.VITE_BE_URL}/recruiters/profile`, {
      company: formProfile.company,
      position: formProfile.position,
      city: formProfile.city,
      description: formProfile.description,
      phone: formProfile.phone,
      instagram: formProfile.instagram,
      linkedin: formProfile.linkedin,
      photo: formProfile.photo
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        console.log('show res PUT');
        console.log(res);
        alert('Update succeed')
        getMyData()
      })
      .catch((err) => {
        console.log(err.response);
        alert('Update failed')
      })
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