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
import { useDispatch, useSelector } from 'react-redux'
import { profileWorkerAction } from '../../../config/redux/action/profileWorkerAction'
import { getSkillPerIdWorkerAction } from '../../../config/redux/action/getSkillPerIdWorkerAction'
import { getPortfolioPerIdWorkerAction } from '../../../config/redux/action/getPortfolioPerIdWorkerAction'
import { getExperiencePerIdWorkerAction } from '../../../config/redux/action/getExperiencePerIdWorkerAction'
import { uploadImagePortfolioAction } from '../../../config/redux/action/uploadImagePortfolioAction'
import { updatePhotoProfileAction } from '../../../config/redux/action/updatePhotoProfileAction'
import { updateProfileWorkersAction } from '../../../config/redux/action/updateProfileWorkersAction'
import { addSkillAction } from '../../../config/redux/action/addSkillAction'
import { addExperienceAction } from '../../../config/redux/action/addExperienceAction'
import { addPortfolioAction } from '../../../config/redux/action/addPortfolioAction'
import { deleteSkillAction } from '../../../config/redux/action/deleteSkillAction'
import { ClipLoader } from 'react-spinners'
import UploadIcon from '../../../assets/Main/upload-img.svg'

const EditProfileWorker = () => {
  const { id } = useParams()
  // const [myDetail, setMyDetail] = useState({})
  const {loading, myDetail} = useSelector((state)=>state.profileWorker)
  const {loading: loadingGetSkills, skills: mySkill} = useSelector((state)=>state.getSkillPerIdWorker)
  const {loading: loadingGetPortfolio, portofolio: myPortofolio} = useSelector((state)=>state.getPortfolioPerIdWorker)
  const {loading: loadingGetExperience, experience: myExperience } = useSelector((state)=>state.getExperiencePerIdWorker)
  // const [mySkill, setMySkill] = useState([])
  // const [myPortofolio, setMyPortofolio] = useState([])
  // const [myExperience, setMyExperience] = useState([])
  const [workMonthYear, setWorkMonthYear] = useState("")
  // const [loading, setLoading] = useState(true)
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
  const dispatch = useDispatch()

  useEffect(() => {
    // setLoading(true)
    getMyData()
  }, [])
  const getMyData = () => {
    dispatch(profileWorkerAction(setFormProfile, formProfile))
    dispatch(getSkillPerIdWorkerAction(id))
    dispatch(getPortfolioPerIdWorkerAction(id))
    dispatch(getExperiencePerIdWorkerAction(id))
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
    dispatch(uploadImagePortfolioAction(portofolio, setPortofolio, file))
  }

  const handleChangeUploadImage = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0]
    dispatch(updatePhotoProfileAction(file, getMyData))
  }

  const handleSubmitProfile = () => {
    dispatch(updateProfileWorkersAction(formProfile, getMyData))
  }
  const handleClickCancel = () => {
    navigate(`/main/myprofile/${myDetail.id}/portofolio`)
  }

  const handleSubmitSkill = () => {
    dispatch(addSkillAction(formProfile, setFormProfile, getMyData))
  }
  const handleSubmitWorkExperience = () => {
    console.log(workMonthYear.split(" "));
    const [month, year] = workMonthYear.split(" ")
    dispatch(addExperienceAction(month, year, setWorkMonthYear, formProfile, setFormProfile, getMyData))
  }

  const handleSubmitPortofolio = () => {
    dispatch(addPortfolioAction(portofolio, setPortofolio, getMyData))
  }
  const handleDeleteSkill = (e) => {
    const skillId = e.target.id
    console.log(skillId);
    dispatch(deleteSkillAction(skillId, getMyData))
  }

  return (
    <div className='w-full h-auto min-h-[1000px] relative bg-[#F6F7F8] phone:max-tablet:max-w-[640px]'>
      <div className='w-full h-[400px] bg-[#5E50A1] absolute phone:max-tablet:max-w-[640px]'></div>
      {loading === true || loadingGetSkills === true || loadingGetPortfolio === true || loadingGetExperience === true ? (
            <div className='w-full h-[900px] flex justify-center items-center'>
                <ClipLoader />
            </div>
      ) : (
        <div className='w-[1140px] h-auto mx-auto flex justify-between mt-[100px] mb-[400px] relative phone:max-tablet:max-w-[640px] phone:max-tablet:min-w-[320px] phone:max-tablet:w-full phone:max-tablet:flex-col phone:max-tablet:items-center'>
          <div className='container w-[357px] h-auto rounded-md phone:max-tablet:max-w-[640px] phone:max-tablet:min-w-[320px]'>
            <CardEditProfileWorker workersDetail={myDetail} workersSkill={mySkill} handleSubmitProfile={handleSubmitProfile} handleClickCancel={handleClickCancel} handleChangeUploadImage={handleChangeUploadImage} />
          </div>
          <div className='container w-[753px] h-auto flex flex-col items-center rounded-md phone:max-tablet:max-w-[640px] phone:max-tablet:min-w-[320px]'>
            <div className='w-full h-auto min-h-[516px] mb-10 flex flex-col items-center rounded-md bg-white phone:max-tablet:max-w-[640px]'>
              <nav className='w-full h-auto relative mt-2 mb-5 border-b border-x-0 border-t-0 border-solid border-[#C4C4C4] phone:max-tablet:w-[320px] phone:max-tablet:flex phone:max-tablet:justify-start'>
                <p className='text-[22px] font-semibold text-[#1F2A36] ml-7 phone:max-tablet:ml-0'>Personal information</p>
              </nav>
              <div className='container w-[693px] h-auto flex flex-col gap-10 mb-16 phone:max-tablet:max-w-[640px] phone:max-tablet:w-[320px] phone:max-tablet:items-start'>
                <Input type='text' name='name' label="Full name" value={formProfile?.name} onChange={handleChangeProfile} placeholder="Input full name" />
                <Input type='text' name='job_desk' label="Job desk" value={formProfile?.job_desk} onChange={handleChangeProfile} placeholder="Input job desk" />
                <Input type='text' name='domicile' label="Domicile" value={formProfile?.domicile} onChange={handleChangeProfile} placeholder="Input domicile" />
                <Input type='text' name='workplace' label="Workplace" value={formProfile?.workplace} onChange={handleChangeProfile} placeholder="Input workplace" />
                <div className='w-[693px] h-[144px] phone:max-tablet:w-[320px]'>
                  <TextArea type='text' name='description' label="Brief Description" value={formProfile?.description} onChange={handleChangeProfile} placeholder="Input brief description" />
                </div>
              </div>
            </div>

            <div className='w-full h-auto mb-10 flex flex-col items-center rounded-md bg-white phone:max-tablet:max-w-[640px]'>
              <nav className='w-full h-auto relative mt-2 mb-5 border-b border-x-0 border-t-0 border-solid border-[#C4C4C4] phone:max-tablet:w-[320px] phone:max-tablet:flex phone:max-tablet:justify-start'>
                <p className='text-[22px] font-semibold text-[#1F2A36] ml-7 phone:max-tablet:ml-0'>Skill</p>
              </nav>
              <div className='container w-[693px] h-auto flex flex-col items-center phone:max-tablet:max-w-[640px] phone:max-tablet:w-[320px] phone:max-tablet:items-start'>
                <div className='container w-full h-auto flex justify-between items-center gap-5 mb-10'>
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

            <div className='w-full h-auto min-h-[516px] mb-10 flex flex-col items-center rounded-md bg-white phone:max-tablet:max-w-[640px]'>
              <nav className='w-full h-auto relative mt-2 mb-5 border-b border-x-0 border-t-0 border-solid border-[#C4C4C4] phone:max-tablet:w-[320px] phone:max-tablet:flex phone:max-tablet:justify-start'>
                <p className='text-[22px] font-semibold text-[#1F2A36] ml-7 phone:max-tablet:ml-0'>Work Experience</p>
              </nav>
              <div className='container w-[693px] h-auto flex flex-col gap-10 mb-16 phone:max-tablet:max-w-[640px] phone:max-tablet:w-[320px] phone:max-tablet:items-start'>
                <Input type='text' name='position' label="Position" value={formProfile.position} onChange={handleChangeProfile} placeholder="web developer" />
                <div className='w-full h-auto flex justify-between items-center'>
                  <div className='w-[336px] h-auto phone:max-tablet:w-[150px]'>
                    <Input type='text' name='company' label="Company" value={formProfile.company} onChange={handleChangeProfile} placeholder="PT. Elminster" />
                  </div>
                  <div className='w-[337px] h-auto phone:max-tablet:w-[150px]'>
                    <Input type='text' name='workMonthYear' label="Month/Year" value={workMonthYear} onChange={handleChangeWorkMonthYear} placeholder="January 2024" />
                  </div>
                </div>
                <div className='w-[693px] h-[144px] phone:max-tablet:w-[320px]'>
                  <TextArea type='text' name='work_description' label="Brief Description" value={formProfile.work_description} onChange={handleChangeProfile} placeholder="Input brief description" />
                </div>
                <div className='border-b border-x-0 border-t-0 border-solid border-[#E2E5ED] w-full my-7'></div>
                <ButtonYellowBGWhite onClick={handleSubmitWorkExperience}>Add work experience</ButtonYellowBGWhite>
              </div>
            </div>

            <div className='w-full h-auto min-h-[516px] mb-10 flex flex-col items-center rounded-md bg-white phone:max-tablet:max-w-[640px]'>
              <nav className='w-full h-auto relative mt-2 mb-5 border-b border-x-0 border-t-0 border-solid border-[#C4C4C4] phone:max-tablet:w-[320px] phone:max-tablet:flex phone:max-tablet:justify-start'>
                <p className='text-[22px] font-semibold text-[#1F2A36] ml-7 phone:max-tablet:ml-0'>Portofolio</p>
              </nav>
              <div className='container w-[693px] h-auto flex flex-col gap-10 mb-16 phone:max-tablet:max-w-[640px] phone:max-tablet:w-[320px] phone:max-tablet:items-start'>
                <Input type='text' name='application_name' label="Application name" value={portofolio.application_name} onChange={handleChangePortofolio} placeholder="Input application name" />
                <Input type='text' name='link_repository' label="Link repository" value={portofolio.link_repository} onChange={handleChangePortofolio} placeholder="Input link repository" />
                <div className='w-full h-auto flex flex-col items-start'>
                  <label className='mb-5 font-normal text-xs text-[#9EA0A5]'>Portofolio type</label>
                  <div className='w-full h-auto flex justify-start gap-5'>
                    <label><input type="radio" name='application' value='Aplikasi Mobile' onChange={handleChangePortofolio} /><span className='ml-3 font-semibold text-[14px] text-[#46505C]'>Mobile application</span></label>
                    <label><input type="radio" name="application" value='Aplikasi Web' onChange={handleChangePortofolio} /><span className='ml-3 font-semibold text-[14px] text-[#46505C]'>Web application</span></label>
                  </div>
                </div>
                <div className='w-full h-[auto]'>
                  <label className='mb-5 font-normal text-xs text-[#9EA0A5]'>Upload image</label>
                  <label className='w-[693px] h-[348px] phone:max-tablet:w-[320px] phone:max-tablet:h-[150px]'>
                    {portofolio.image ? (
                      <img src={portofolio.image} alt="upload-img" className='w-[693px] h-[348px] hover:cursor-pointer object-cover phone:max-tablet:w-[320px] phone:max-tablet:h-[150px]' />
                    ) : (
                      <img src={UploadIcon} alt="upload-img" className='w-[693px] h-[348px] hover:cursor-pointer phone:max-tablet:w-[320px] phone:max-tablet:h-[150px]' />
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