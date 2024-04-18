import ButtonMain from '../../../components/base/Button/ButtonMain'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom'
import CardMyProfile from '../../../components/modules/Footer/CardMyProfile'
import Input from '../../../components/base/Input/Input'
import CardEditProfileWorker from '../../../components/modules/Card/CardEditProfileWorker'
import TextArea from '../../../components/base/Input/TextArea'
import ButtonAuth from '../../../components/base/Button/ButtonAuth'
import ButtonYellowBGWhite from '../../../components/base/Button/ButtonYellowBGWhite'
import SkillsList from '../../../components/base/Button/SkillsList'

const EditProfileWorker = () => {
  const { id } = useParams()
  const [myDetail, setMyDetail] = useState({})
  const [mySkill, setMySkill] = useState([])
  const [myPortofolio, setMyPortofolio] = useState([])
  const [myExperience, setMyExperience] = useState([])
  const [workMonthYear, setWorkMonthYear] = useState("")
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const [portofolio, setPortofolio] = useState({
    application_name: "",
    link_repository: "",
    application: "",
    image: ""
  })

  const [formProfile, setFormProfile] = useState({
    name: "",
    job_desk: "",
    domicile: "",
    workplace: "",
    description: "",
    skill_name: "",
    position: "",
    company: "",
    work_month: "",
    work_year: "",
    work_description: ""
  })

  useEffect(() => {
    setLoading(true)
    getMyData()
  }, [])
  const getMyData = () => {
    const urls = [
      `${import.meta.env.VITE_BE_URL}/workers/profile`,
      `${import.meta.env.VITE_BE_URL}/skills/${id}`,
      `${import.meta.env.VITE_BE_URL}/portfolio/${id}`,
      `${import.meta.env.VITE_BE_URL}/experience/${id}`
    ]
    const requests = urls.map((url) => axios.get(url, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }))
    Promise.all(requests)
      .then(axios.spread((...res) => {

        console.log('Show res');
        console.log(res);
        console.log('Show res[0] profile');
        console.log(res[0].data.data);
        setMyDetail(res[0].data.data)
        console.log('Show res[1] skills');
        console.log(res[1].data.data);
        setMySkill(res[1].data.data)
        console.log('Show res[2] portofolio');
        console.log(res[2].data.data);
        setMyPortofolio(res[2].data.data)
        console.log('Show res[3] experience');
        console.log(res[3].data.data);
        setMyExperience(res[3].data.data)

        setFormProfile({
          ...formProfile,
          name: res[0].data.data.name,
          job_desk: res[0].data.data.job_desk,
          domicile: res[0].data.data.domicile,
          workplace: res[0].data.data.workplace,
          description: res[0].data.data.description
        })

        setLoading(false)
      }))
      .catch((err) => {
        setLoading(false)
        console.log(err.response);
        alert('Something wrong')
      })
  }
  const handleChangeProfile = (e) => {
    setFormProfile({
      ...formProfile,
      [e.target.name]: e.target.value
    })
    console.log(formProfile.name);
  }
  const handleChangeWorkMonthYear = (e) => {
    setWorkMonthYear(e.target.value)
  }

  const handleChangePortofolio = (e) => {
    setPortofolio({
      ...portofolio,
      [e.target.name]: e.target.value
    })
    console.log(portofolio.application);
  }

  const handleChangeUploadImagePortofolio = (e) => {
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
        setPortofolio({
          ...portofolio,
          image: file_url
        })

      })
      .catch((err) => {
        console.log(err.response);
        alert(`can't upload image`)
      })
  }

  const handleChangeUploadImage = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('photo', file)
    axios.put(`${import.meta.env.VITE_BE_URL}/workers/profile/photo`, formData, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        const { photo } = res.data.data
        console.log(photo);
        alert('Update photo succeed')
        getMyData()

      })
      .catch((err) => {
        console.log(err.response);
        alert(`can't upload image`)
      })
  }

  const handleSubmitProfile = () => {
    axios.put(`${import.meta.env.VITE_BE_URL}/workers/profile`, {
      name: formProfile.name,
      job_desk: formProfile.job_desk,
      domicile: formProfile.domicile,
      workplace: formProfile.workplace,
      description: formProfile.description
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

  const handleSubmitSkill = () => {
    axios.post(`${import.meta.env.VITE_BE_URL}/skills`, { skill_name: formProfile.skill_name }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        alert(`Added Skill: ${formProfile.skill_name}`)
        formProfile.skill_name = ""
        console.log(formProfile.skill_name);

        getMyData()
      })
      .catch((err) => {
        console.log(err.response);
        alert(`Failed adding skill`)
      })
  }
  const handleSubmitWorkExperience = () => {
    console.log(workMonthYear.split(" "));
    const [month, year] = workMonthYear.split(" ")
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
        formProfile.position = ""
        formProfile.company = ""
        formProfile.work_description = ""
        setWorkMonthYear('')
        getMyData()
      })
      .catch((err) => {
        console.log(err.response);
        alert(`Failed adding experience`)
      })
  }

  const handleSubmitPortofolio = () => {
    axios.post(`${import.meta.env.VITE_BE_URL}/portfolio`, {
      application_name: portofolio.application_name,
      link_repository: portofolio.link_repository,
      application: portofolio.application,
      image: portofolio.image
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        console.log(res);
        setPortofolio({
          application_name: "",
          link_repository: "",
          application: "",
          image: ""
        })
        alert('Portofolio added')
        getMyData()
      })
      .catch((err) => {
        console.log(err.response);
        alert('Adding portofolio failed')
      })
  }
  const handleDeleteSkill = (e) => {
    const skillId = e.target.id
    console.log(skillId);
    axios.delete(`${import.meta.env.VITE_BE_URL}/skills/${skillId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((res)=>{
      console.log(res);
      alert('Skill deleted')
      getMyData()
    })
    .catch((err)=>{
      console.log(err);
      alert('skill is not deleted')
    })
  }
  return (
    <div className='w-full h-auto min-h-[1000px] relative bg-[#F6F7F8]'>
      <div className='w-full h-[400px] bg-[#5E50A1] absolute'></div>
      {loading === true ? (
        <h1 className='font-extrabold text-5xl text-center relative'>LOADING....</h1>
      ) : (
        <div className='w-[1140px] h-auto mx-auto flex justify-between mt-[100px] mb-[400px] relative'>
          <div className='container w-[357px] h-auto rounded-md'>
            <CardEditProfileWorker workersDetail={myDetail} workersSkill={mySkill} onClick={handleSubmitProfile} handleChangeUploadImage={handleChangeUploadImage} />
          </div>
          <div className='container w-[753px] h-auto flex flex-col items-center rounded-md'>
            <div className='w-full h-auto min-h-[516px] mb-10 flex flex-col items-center rounded-md bg-white'>
              <nav className='w-full h-auto relative mt-2 mb-5 border-b border-x-0 border-t-0 border-solid border-[#C4C4C4]'>
                <p className='text-[22px] font-semibold text-[#1F2A36] ml-7'>Personal information</p>
              </nav>
              <div className='container w-[693px] h-auto flex flex-col gap-10 mb-16'>
                <Input type='text' name='name' label="Full name" value={formProfile?.name} onChange={handleChangeProfile} placeholder="Input full name" />
                <Input type='text' name='job_desk' label="Job desk" value={formProfile?.job_desk} onChange={handleChangeProfile} placeholder="Input job desk" />
                <Input type='text' name='domicile' label="Domicile" value={formProfile?.domicile} onChange={handleChangeProfile} placeholder="Input domicile" />
                <Input type='text' name='workplace' label="Workplace" value={formProfile?.workplace} onChange={handleChangeProfile} placeholder="Input workplace" />
                <div className='w-[693px] h-[144px]'>
                  <TextArea type='text' name='description' label="Brief Description" value={formProfile?.description} onChange={handleChangeProfile} placeholder="Input brief description" />
                </div>
              </div>
            </div>

            <div className='w-full h-auto mb-10 flex flex-col items-center rounded-md bg-white'>
              <nav className='w-full h-auto relative mt-2 mb-5 border-b border-x-0 border-t-0 border-solid border-[#C4C4C4]'>
                <p className='text-[22px] font-semibold text-[#1F2A36] ml-7'>Skill</p>
              </nav>
              <div className='container w-[693px] h-auto flex flex-col items-center'>
                <div className='container w-full h-auto flex justify-between items-center gap-10 mb-10'>
                  <div className='w-[583px] h-[50px]'><Input type='text' name='skill_name' value={formProfile.skill_name} onChange={handleChangeProfile} placeholder="Java" /></div>
                  <div className='w-[80px] h-[50px]'><ButtonAuth onClick={handleSubmitSkill}>Simpan</ButtonAuth></div>
                </div>
                <div className='w-full h-auto flex flex-wrap gap-2 justify-start mb-10'>
                  {mySkill.map((value, index) => (
                    <label key={index} className='px-4 py-1 w-auto h-[28px] flex items-center gap-1 bg-[#FBB017] border border-solid border-[#FBB017] rounded-[4px] text-white text-[12px]'>
                        <SkillsList>{value.skill_name}</SkillsList>
                        <span id={value.id} onClick={handleDeleteSkill} className='w-[16px] h-[16px] text-[16px] hover:cursor-pointer'>X</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className='w-full h-auto min-h-[516px] mb-10 flex flex-col items-center rounded-md bg-white'>
              <nav className='w-full h-auto relative mt-2 mb-5 border-b border-x-0 border-t-0 border-solid border-[#C4C4C4]'>
                <p className='text-[22px] font-semibold text-[#1F2A36] ml-7'>Work Experience</p>
              </nav>
              <div className='container w-[693px] h-auto flex flex-col gap-10 mb-16'>
                <Input type='text' name='position' label="Position" value={formProfile.position} onChange={handleChangeProfile} placeholder="web developer" />
                <div className='w-full h-auto flex justify-between items-center'>
                  <div className='w-[336px] h-auto'>
                    <Input type='text' name='company' label="Company" value={formProfile.company} onChange={handleChangeProfile} placeholder="PT. Elminster" />
                  </div>
                  <div className='w-[337px] h-auto'>
                    <Input type='text' name='workMonthYear' label="Month/Year" value={workMonthYear} onChange={handleChangeWorkMonthYear} placeholder="January 2024" />
                  </div>
                </div>
                <div className='w-[693px] h-[144px]'>
                  <TextArea type='text' name='work_description' label="Brief Description" value={formProfile.work_description} onChange={handleChangeProfile} placeholder="Input brief description" />
                </div>
                <div className='border-b border-x-0 border-t-0 border-solid border-[#E2E5ED] w-full my-7'></div>
                <ButtonYellowBGWhite onClick={handleSubmitWorkExperience}>Add work experience</ButtonYellowBGWhite>
              </div>
            </div>

            <div className='w-full h-auto min-h-[516px] mb-10 flex flex-col items-center rounded-md bg-white'>
              <nav className='w-full h-auto relative mt-2 mb-5 border-b border-x-0 border-t-0 border-solid border-[#C4C4C4]'>
                <p className='text-[22px] font-semibold text-[#1F2A36] ml-7'>Portofolio</p>
              </nav>
              <div className='container w-[693px] h-auto flex flex-col gap-10 mb-16'>
                <Input type='text' name='application_name' label="Application name" value={portofolio.application_name} onChange={handleChangePortofolio} placeholder="Input application name" />
                <Input type='text' name='link_repository' label="Link repository" value={portofolio.link_repository} onChange={handleChangePortofolio} placeholder="Input link repository" />
                <div className='w-full h-auto flex flex-col items-start'>
                  <label className='mb-5 font-normal text-xs text-[#9EA0A5]'>Portofolio type</label>
                  <div className='w-full h-auto flex justify-start gap-10'>
                    <label><input type="radio" name='application' value='Aplikasi Mobile' onChange={handleChangePortofolio} /><span className='ml-3 font-semibold text-[14px] text-[#46505C]'>Mobile application</span></label>
                    <label><input type="radio" name="application" value='Aplikasi Web' onChange={handleChangePortofolio} /><span className='ml-3 font-semibold text-[14px] text-[#46505C]'>Web application</span></label>
                  </div>
                </div>
                <div className='w-full h-[auto]'>
                  <label className='mb-5 font-normal text-xs text-[#9EA0A5]'>Upload image</label>
                  <label className='w-[693px] h-[348px]'>
                    {portofolio.image ? (
                      <img src={portofolio.image} alt="upload-img" className='w-[693px] h-[348px] hover:cursor-pointer object-cover' />
                    ) : (
                      <img src="/src/assets/Main/upload-img.svg" alt="upload-img" className='w-[693px] h-[348px] hover:cursor-pointer' />
                    )}
                    <input type='file' accept='image/*' className='hidden' onChange={handleChangeUploadImagePortofolio} />
                  </label>
                  <div className='border-b border-x-0 border-t-0 border-solid border-[#E2E5ED] w-full my-14'></div>
                  <ButtonYellowBGWhite onClick={handleSubmitPortofolio}>Add portofolio</ButtonYellowBGWhite>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default EditProfileWorker