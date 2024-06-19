import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom'
import CardProfileWorker from '../../../components/modules/Card/CardProfileWorker'
import { useDispatch, useSelector } from 'react-redux'
import { detailWorkerAction } from '../../../config/redux/action/detailWorkerAction'
import { getSkillPerIdWorkerAction } from '../../../config/redux/action/getSkillPerIdWorkerAction'
import { ClipLoader } from 'react-spinners'

const ProfileWorker = () => {
  const { id } = useParams()
  const {loading, workersDetail} = useSelector((state)=>state.detailWorker)
  const {loading: loadingSkill, skills: workersSkill} = useSelector((state)=>state.getSkillPerIdWorker)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(detailWorkerAction(id))
    dispatch(getSkillPerIdWorkerAction(id))
  }, [])
  const handleClickHire = () =>{
    navigate(`/main/profileworker/${id}/hire`)
  }

  return (
    <div className='w-full h-auto min-h-[1000px] relative bg-[#F6F7F8] phone:max-tablet:max-w-[640px]'>
      <div className='w-full h-[400px] bg-[#5E50A1] absolute phone:max-tablet:max-w-[640px]'></div>
      {loading === true || loadingSkill === true ? (
        <div className='w-full h-[900px] flex justify-center items-center'>
            <ClipLoader />
        </div>
      ) : (
        <div className='w-[1140px] h-auto mx-auto flex justify-between mt-[100px] mb-[400px] relative phone:max-tablet:max-w-[640px] phone:max-tablet:w-[320px] phone:max-tablet:flex-col phone:max-tablet:items-center'>
          <div className='container w-[357px] h-auto rounded-md phone:max-tablet:max-w-[640px] phone:max-tablet:min-w-[320px]'>
              <CardProfileWorker workersDetail={workersDetail} workersSkill={workersSkill} handleClickHire={handleClickHire} />
          </div>
          <div className='w-[753px] h-auto flex flex-col items-center rounded-md phone:max-tablet:max-w-[640px] phone:max-tablet:w-[320px] phone:max-tablet:mt-5'>
            <div className='w-full h-auto min-h-[516px] flex flex-col items-center rounded-md bg-white phone:max-tablet:max-w-[640px] phone:max-tablet:px-5'>
              <nav className='w-full h-auto relative mt-10 mb-5'>
                <ul className='list-none flex justify-start items-center gap-5 relative'>
                  <li><NavLink to={`/main/profileworker/${id}/portofolio`} className='no-underline text-[22px] font-semibold text-[#1F2A36] pb-2'>Portofolio</NavLink></li>
                  <li><NavLink to={`/main/profileworker/${id}/experience`} className='no-underline text-[22px] font-semibold text-[#1F2A36] pb-2'>Experience</NavLink></li>
                </ul>
              </nav>
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileWorker