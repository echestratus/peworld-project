import React, { useEffect, useState } from 'react'
import NavbarLandingPage from '../../components/modules/Navbar/NavbarLandingPage'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/modules/Footer/Footer'
import { profileWorkerAction } from '../../config/redux/action/profileWorkerAction'
import { profileRecruiterAction } from '../../config/redux/action/profileRecruiterAction'
import { ClipLoader } from 'react-spinners'
import ImgPc from '../../assets/LandingPage/img-pc.png'
import ImgLaptop from '../../assets/LandingPage/img-laptop.png'
import CheckBlue from '../../assets/LandingPage/checkBlue.svg'
import CheckGreen from '../../assets/LandingPage/checkGreen.svg'
import ImgDesktop from '../../assets/LandingPage/img-desktop.png'
import WaveImage from '../../assets/LandingPage/wave.svg'
import HarryImage from '../../assets/LandingPage/harry.png'
import NiallImage from '../../assets/LandingPage/niall.png'
import LouisImage from '../../assets/LandingPage/louis.png'
import CardOpinion from '../../components/modules/Card/CardOpinion'
import Slider from 'react-slick'
import NextArrow from '../../assets/LandingPage/arrow-right.svg'
import PrevArrow from '../../assets/LandingPage/arrowLeft.svg'

const RootLandingPage = () => {
    const [token, setToken] = useState({
        token: localStorage.getItem('token'),
        refreshToken: localStorage.getItem('refreshToken')
      })
      const navigate = useNavigate()
      const dispatch = useDispatch()
      const {loading: loadingProfileWorker, myDetail: myDetailWorker} = useSelector((state)=>state.profileWorker)
      const {loading: loadingProfileRecruiter, myDetail: myDetailRecruiter} = useSelector((state)=>state.profileRecruiter)
      const clientOpinion = [
        {
            name: "Harry Styles",
            job: "Web Developer",
            description: "I completed many projects successfully when registered at peworld.",
            img: HarryImage
        },
        {
            name: "Niall Horan",
            job: "Web Developer",
            description: "Many recruiters reach me out and i'm trying my best to not let them down.",
            img: NiallImage
        },
        {
            name: "Louis Tomlinson",
            job: "Web Developer",
            description: "I guess this is it, I got a lot of jobs when registered at peworld.",
            img: LouisImage
        }
      ]
     
    
      useEffect(() => {
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

      const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => {
        const { onClick } = props
        return (
            <img src={PrevArrow} alt="prevArrow" className='inline-flex items-center justify-center w-14 h-14 rounded-full z-10 absolute -left-7 top-1/2 -translate-y-1/2 hover:cursor-pointer' onClick={onClick}  />
        );
        };
    
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => {
        const { onClick } = props
        return (
            <img src={NextArrow} alt="nextArrow" className='inline-flex items-center justify-center w-14 h-14 rounded-full z-10 absolute -right-7 top-1/2 -translate-y-1/2 hover:cursor-pointer' onClick={onClick} />
        )
      };
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true,
        arrows: true,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    speed: 500,
                    initialSlide: 0,
                    arrows: true
                }
            },
            {
                breakpoint: 939,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    speed: 500,
                    initialSlide: 0,
                    arrows: true
                }
            }
        ]
      };

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
        
        <div className='
        laptop:mx-auto laptop:w-[1140px] laptop:flex laptop:my-24
        max-tablet:mx-auto max-tablet:max-w-[640px] max-tablet:w-[90%] max-tablet:flex max-tablet:flex-col max-tablet:gap-10 max-tablet:my-24
        '>
            {/* Start Now section */}
            <div className='
            laptop:w-[45%] laptop:flex laptop:flex-col laptop:justify-center
            max-tablet:w-[100%] max-tablet:flex max-tablet:flex-col max-tablet:justify-center
            '>
                <p className='font-semibold text-[44px] text-[#1F2A36] leading-[70px] mb-3'>The best nation's talent for revolution 4.0 change</p>
                <p className='font-normal text-[18px] text-[#46505C] leading-[28px]'>We are the best broker IT talent in this country, so what are you waiting for. Join us now.</p>
                <div className='w-[210px] mt-8'>
                    <button className='h-[63.11px] w-full rounded-[4px] bg-[#5E50A1] font-semibold text-base text-white border-none hover:cursor-pointer hover:bg-blue-900'>Start From Now</button>
                </div>
            </div>
            {/* Start Now section */}

            {/* Image Section */}
            <div className='
            laptop:w-[55%] laptop:flex laptop:justify-end
            max-tablet:w-[100%] max-tablet:flex max-tablet:justify-center
            '>
                <img src={ImgPc} alt="img-pc" className='
                laptop:w-[617.17px] laptop:h-[617.17px]
                max-tablet:w-[100%] max-tablet:h-fit
                ' />
            </div>
            {/* Image Section */}
        </div>

        <div className='
        laptop:mx-auto laptop:w-[1140px] laptop:flex laptop:my-24
        max-tablet:mx-auto max-tablet:w-[90%] max-tablet:flex max-tablet:flex-col-reverse max-tablet:gap-10 max-tablet:my-24
        '>
            {/* Image section */}
            <div className='
            laptop:w-[55%] laptop:flex laptop:justify-start
            max-tablet:w-[100%] max-tablet:flex max-tablet:justify-center
            '>
                <img src={ImgLaptop} alt="img-laptop" className='
                laptop:w-[568.98px] laptop:h-[488.59px]
                max-tablet:w-[100%] max-tablet:h-fit
                ' />
            </div>
            {/* Image section */}

            {/* Benefit of using peworld section */}
            <div className='
            laptop:w-[45%] laptop:flex laptop:flex-col laptop:justify-start
            max-tablet:w-[100%] max-tablet:flex max-tablet:flex-col max-tablet:justify-start
            '>
                <p className='font-semibold text-[36px] text-[#1F2A36] leading-[56px] mb-3'>The best nation's talent for revolution 4.0 change</p>
                <ul className={`list-image-checkblue list-outside leading-[50px]`}>
                    <li className='font-normal text-[16px] text-[#46505C] pl-5'>Verificated talent.</li>
                    <li className='font-normal text-[16px] text-[#46505C] pl-5'>Equipped with great soft skills.</li>
                    <li className='font-normal text-[16px] text-[#46505C] pl-5'>Experienced in handling complex projects.</li>
                    <li className='font-normal text-[16px] text-[#46505C] pl-5'>Provide transparency between recruiters and talents.</li>
                </ul>
                
            </div>
            {/* Benefit of using peworld section */}
        </div>

        <div className='
        laptop:mx-auto laptop:w-[1140px] laptop:flex laptop:my-24
        max-tablet:mx-auto max-tablet:w-[90%] max-tablet:flex max-tablet:flex-col max-tablet:gap-10 max-tablet:my-24
        '>
            {/* Talent's Skill */}
            <div className='
            laptop:w-[50%] laptop:flex laptop:items-center laptop:justify-end
            max-tablet:w-[100%] max-tablet:flex max-tablet:items-center max-tablet:justify-start
            '>
                <div className='
                laptop:w-[85%]
                max-tablet:w-[100%]
                '>
                    <p className='font-semibold text-[36px] text-[#1F2A36] leading-[56px] mb-1'>Skill Talent</p>
                    <p className='font-normal text-[18px] text-[#46505C] leading-[28px]'>Skills that is needed in the 21th century industry, we provide skills that match to your liking.</p>
                    <div className='
                    laptop:flex laptop:gap-20
                    max-tablet:flex max-tablet:gap-2
                    '>
                        <ul className={`list-image-checkgreen list-outside leading-[50px]`}>
                            <li className='font-normal text-[16px] text-[#46505C] pl-5'>Java</li>
                            <li className='font-normal text-[16px] text-[#46505C] pl-5'>Kotlin</li>
                            <li className='font-normal text-[16px] text-[#46505C] pl-5'>PHP</li>
                            <li className='font-normal text-[16px] text-[#46505C] pl-5'>JavaScript</li>
                        </ul>

                        <ul className={`list-image-checkgreen list-outside leading-[50px]`}>
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
            <div className='
            laptop:w-fit laptop:ml-auto laptop:flex laptop:justify-end
            max-tablet:w-[100%] max-tablet:h-fit max-tablet:flex max-tablet:justify-center
            '>
                <img src={ImgDesktop} alt="img-pc" className='
                laptop:w-[570.62px] laptop:h-[490.99px]
                max-tablet:w-[100%] max-tablet:h-fit
                ' />
            </div>
            {/* Image Section */}
        </div>

        {/* Card Opinion */}
        <div className='
        laptop:w-full laptop:h-[700px] laptop:bg-[#FAFBFC] laptop:mx-auto laptop:my-24 laptop:py-12 laptop:box-border
        max-tablet:w-full max-tablet:h-[700px] max-tablet:bg-[#FAFBFC] max-tablet:mx-auto max-tablet:my-24 max-tablet:py-12 max-tablet:box-border
        '>
            <p className='
            laptop:font-semibold laptop:text-[36px] laptop:text-[#1F2A36] laptop:text-center
            max-tablet:font-semibold max-tablet:text-[24px] max-tablet:text-[#1F2A36] max-tablet:text-center
            '>Their opinion about peworld</p>
            <div className='
            laptop:container laptop:w-[100%] laptop:max-w-[1140px] laptop:m-auto
            max-tablet:container max-tablet:w-[80%] max-tablet:max-w-screen-tablet max-tablet:m-auto
            '>
                <div className='mt-12'>
                    <Slider {...settings} className='cursor-grab'>
                        {clientOpinion.map((client, index) => (
                            <CardOpinion key={index} name={client.name} job={client.job} description={client.description} img={client.img} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
        {/* Card Opinion */}

        <div className='
        laptop:relative laptop:mx-auto laptop:w-[1140px] laptop:min-h-[227px] laptop:flex my-24 laptop:bg-peworld-blue laptop:rounded-tl-[40px] laptop:rounded-tr-[8px] laptop:rounded-br-[40px] laptop:rounded-bl-[8px]
        max-tablet:relative max-tablet:mx-auto max-tablet:w-[90%] max-tablet:min-h-[227px] max-tablet:flex max-tablet:bg-peworld-blue max-tablet:rounded-tl-[40px] max-tablet:rounded-tr-[8px] max-tablet:rounded-br-[40px] max-tablet:rounded-bl-[8px]'>
            <img src={WaveImage} alt="wave-image" className='absolute top-[-60px] max-tablet:hidden' />
            <div className='w-full h-full flex justify-between items-center px-12 relative'>
                <p className='w-[293px] max-tablet:w-[40%] h-[112px] max-tablet:h-fit font-medium text-[36px] max-tablet:text-[24px] leading-[50px] max-tablet:leading-7 text-white'>Join us now talents and recruiters</p>
                <button className='w-[210px] h-[63.11px] max-tablet:w-[40%] max-tablet:py-5 max-tablet:h-fit bg-white font-bold text-[16px] max-tablet:text-[12px] text-peworld-blue rounded-sm border-none hover:cursor-pointer hover:bg-slate-300'>Start Now</button>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default RootLandingPage