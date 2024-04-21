import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom'
import CardProfileWorker from '../../../components/modules/Card/CardProfileWorker'

const ProfileWorker = () => {
  const { id } = useParams()
  const [workersDetail, setWorkersDetail] = useState({})
  const [workersSkill, setWorkersSkill] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    setLoading(true)
    const urls = [
      `${import.meta.env.VITE_BE_URL}/workers/${id}`,
      `${import.meta.env.VITE_BE_URL}/skills/${id}`
    ]
    const requests = urls.map((url) => axios.get(url, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }))
    Promise.all(requests)
      .then(axios.spread((...res) => {
        setLoading(false)
        console.log('Show res');
        console.log(res);
        console.log('Show res.data.data');
        console.log(res[0].data.data);
        setWorkersDetail(res[0].data.data)
        console.log(res[1].data.data);
        setWorkersSkill(res[1].data.data)
      }))
      .catch((err) => {
        setLoading(false)
        console.log(err.response);
        alert('Something wrong')
      })
  }, [])
  const handleClickHire = () =>{
    navigate(`/main/profileworker/${id}/hire`)
  }

  return (
    <div className='w-full h-auto min-h-[1000px] relative bg-[#F6F7F8] phone:max-tablet:max-w-[640px]'>
      <div className='w-full h-[400px] bg-[#5E50A1] absolute phone:max-tablet:max-w-[640px]'></div>
      {loading === true ? (<h1 className='font-bold text-6xl mx-auto relative text-center'>LOADING....</h1>) : (
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