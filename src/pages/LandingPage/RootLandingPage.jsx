import React, { useEffect, useState } from 'react'
import ButtonMain from '../../components/base/Button/ButtonMain'
import NavbarLandingPage from '../../components/modules/Navbar/NavbarLandingPage'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/modules/Footer/Footer'
import { checkRoleAction } from '../../config/redux/action/checkRoleAction'
import { profileWorkerAction } from '../../config/redux/action/profileWorkerAction'
import { profileRecruiterAction } from '../../config/redux/action/profileRecruiterAction'
import { ClipLoader } from 'react-spinners'
import ImgPc from '../../assets/LandingPage/img-pc.png'
import ImgLaptop from '../../assets/LandingPage/img-laptop.png'
import CheckBlue from '../../assets/LandingPage/checkBlue.svg'
import CheckGreen from '../../assets/LandingPage/checkGreen.svg'
import ImgDesktop from '../../assets/LandingPage/img-desktop.png'
import WaveImage from '../../assets/LandingPage/wave.svg'

const RootLandingPage = () => {
    const [token, setToken] = useState({
        token: localStorage.getItem('token'),
        refreshToken: localStorage.getItem('refreshToken')
      })
      const navigate = useNavigate()
      const dispatch = useDispatch()
      const [myDetail, setMyDetail] = useState("")
      const {loading: loadingProfileWorker, myDetail: myDetailWorker} = useSelector((state)=>state.profileWorker)
      const {loading: loadingProfileRecruiter, myDetail: myDetailRecruiter} = useSelector((state)=>state.profileRecruiter)
     
    
      useEffect(() => {
        dispatch(checkRoleAction())
        console.log(localStorage.getItem('role'));
        if (localStorage.getItem('role') === 'worker') {
          getProfileWorker()
        } else if (localStorage.getItem('role') === 'recruiter') {
          getProfileRecruiter()
        } 
      }, [token])
      const getProfileWorker = () => {
        dispatch(profileWorkerAction())
      }
      const getProfileRecruiter = () => {
        dispatch(profileRecruiterAction())
      }
      const handleClickProfile = () => {
        if(localStorage.getItem('role') === 'worker'){
          navigate(`/main/myprofile/${myDetailWorker.id}/portofolio`)
        } else if(localStorage.getItem('role') === 'recruiter'){
          navigate(`/main/recruiterprofile`)
        } else{
          navigate(`/`)
        }
        
      }
      const handleClickLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('role')
        setToken({})
        alert('Logout succeed')
        navigate('/')
      }

      if ( (loadingProfileRecruiter || loadingProfileWorker) === true ) {
        return(
            <div className='flex justify-center items-center min-h-screen'>
                <ClipLoader />
            </div>
        )
      }
  return (
    <div className='font-peworld bg-white w-screen h-screen'>
        <NavbarLandingPage role={localStorage.getItem('role')} handleClickProfile={handleClickProfile} handleClickLogout={handleClickLogout} />
        
        <div className='mx-auto w-[1140px] flex my-24'>
            {/* Start Now section */}
            <div className='w-[45%] flex flex-col justify-center'>
                <p className='font-semibold text-[44px] text-[#1F2A36] leading-[70px] mb-3'>The best nation's talent for revolution 4.0 change</p>
                <p className='font-normal text-[18px] text-[#46505C] leading-[28px]'>We are the best broker IT talent in this country, so what are you waiting for. Join us now.</p>
                <div className='w-[210px] mt-8'>
                    <button className='h-[63.11px] w-full rounded-[4px] bg-[#5E50A1] font-semibold text-base text-white border-none hover:cursor-pointer hover:bg-blue-900'>Start From Now</button>
                </div>
            </div>
            {/* Start Now section */}

            {/* Image Section */}
            <div className='w-[55%] flex justify-end'>
                <img src={ImgPc} alt="img-pc" className='w-[617.17px] h-[617.17px]' />
            </div>
            {/* Image Section */}
        </div>

        <div className='mx-auto w-[1140px] flex my-24'>
            {/* Image section */}
            <div className='w-[55%] flex justify-start'>
                <img src={ImgLaptop} alt="img-laptop" className='w-[568.98px] h-[488.59px]' />
            </div>
            {/* Image section */}

            {/* Benefit of using peworld section */}
            <div className='w-[45%] flex flex-col justify-start'>
                <p className='font-semibold text-[36px] text-[#1F2A36] leading-[56px] mb-3'>The best nation's talent for revolution 4.0 change</p>
                <ul style={{ "--check-blue": `url(${CheckBlue})` }} className='list-image-[var(--check-blue)] list-outside leading-[50px]'>
                    <li className='font-normal text-[16px] text-[#46505C] pl-5'>Verificated talent.</li>
                    <li className='font-normal text-[16px] text-[#46505C] pl-5'>Equipped with great soft skills.</li>
                    <li className='font-normal text-[16px] text-[#46505C] pl-5'>Experienced in handling complex projects.</li>
                    <li className='font-normal text-[16px] text-[#46505C] pl-5'>Provide transparency between recruiters and talents.</li>
                </ul>
                
            </div>
            {/* Benefit of using peworld section */}
        </div>

        <div className='mx-auto w-[1140px] flex my-24'>
            {/* Talent's Skill */}
            <div className='w-[50%] flex items-center justify-end'>
                <div className='w-[85%]'>
                    <p className='font-semibold text-[36px] text-[#1F2A36] leading-[56px] mb-1'>Skill Talent</p>
                    <p className='font-normal text-[18px] text-[#46505C] leading-[28px]'>Skills that is needed in the 21th century industry, we provide skills that match to your liking.</p>
                    <div className='flex gap-20'>
                        <ul style={{ "--check-green": `url(${CheckGreen})` }} className='list-image-[var(--check-green)] list-outside leading-[50px]'>
                            <li className='font-normal text-[16px] text-[#46505C] pl-5'>Java</li>
                            <li className='font-normal text-[16px] text-[#46505C] pl-5'>Kotlin</li>
                            <li className='font-normal text-[16px] text-[#46505C] pl-5'>PHP</li>
                            <li className='font-normal text-[16px] text-[#46505C] pl-5'>JavaScript</li>
                        </ul>

                        <ul style={{ "--check-green": `url(${CheckGreen})` }} className='list-image-[var(--check-green)] list-outside leading-[50px]'>
                            <li className='font-normal text-[16px] text-[#46505C] pl-5'>Golang</li>
                            <li className='font-normal text-[16px] text-[#46505C] pl-5'>C++</li>
                            <li className='font-normal text-[16px] text-[#46505C] pl-5'>Ruby</li>
                            <li className='font-normal text-[16px] text-[#46505C] pl-5'>10+ another technical skills</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Talent's Skill */}

            {/* Image Section */}
            <div className='w-fit ml-auto flex justify-end'>
                <img src={ImgDesktop} alt="img-pc" className='w-[570.62px] h-[490.99px]' />
            </div>
            {/* Image Section */}
        </div>

        <div className='relative mx-auto w-[1140px] min-h-[227px] flex my-24 bg-peworld-blue rounded-tl-[40px] rounded-tr-[8px] rounded-br-[40px] rounded-bl-[8px]'>
            <img src={WaveImage} alt="wave-image" className='absolute top-[-60px]' />
            <div className='w-full h-full flex justify-between items-center px-12 relative'>
                <p className='w-[293px] h-[112px] font-medium text-[36px] leading-[50px] text-white'>Join us now talents and recruiters</p>
                <button className='w-[210px] h-[63.11px] bg-white font-bold text-[16px] text-peworld-blue rounded-sm border-none hover:cursor-pointer hover:bg-slate-300'>Start Now</button>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default RootLandingPage