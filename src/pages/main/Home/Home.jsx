import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Searchbar from '../../../components/base/Searchbar/Searchbar'
import CardHome from '../../../components/modules/Card/CardHome'
import PaginationButtons from '../../../components/base/Button/PaginationButtons'

const Home = () => {
  const [workersData, setWorkersData] = useState({
    created_at: "",
    description: "",
    domicile: "",
    id: "",
    job_desk: "",
    name: "",
    phone: "",
    photo: "",
    skills: "",
    updated_at: "",
    user_id: "",
    workplace: ""
  })

  const [paginationData, setPaginationData] = useState({
    currentPage: 0,
    limit: 0,
    totalData: 0,
    totalPage: 0
  })

  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const [currentPageSearch, setCurrentPageSearch] = useState(0)
  const [isSearching, setIsSearching] = useState(false)
  const [search, setSearch] = useState('')
  const [searched, setSearched] = useState('')
  useEffect(() => {
    let page = currentPage + 1
    setLoading(true)
    if(searched){
      setIsSearching(true)
      page = currentPageSearch + 1
      axios.get(`${import.meta.env.VITE_BE_URL}/workers/?limit=4&page=${page}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        params: {
          search: searched
        }
      })
        .then((res) => {
          console.log('show res')
          console.log(res)
          setWorkersData(res.data.data)
          setPaginationData(res.data.pagination)
          setLoading(false)
        })
        .catch((err) => {
          setLoading(false)
          console.log(err);
          alert(`Can't fetch data`)
        })
    } else {
      setIsSearching(false)
      axios.get(`${import.meta.env.VITE_BE_URL}/workers/?limit=4&page=${page}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      })
        .then((res) => {
          console.log('show res')
          console.log(res)
          setWorkersData(res.data.data)
          setPaginationData(res.data.pagination)
          setLoading(false)
        })
        .catch((err) => {
          setLoading(false)
          console.log(err);
          alert(`Can't fetch data`)
        })
    }
    
  }, [currentPage, searched])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }
  const handleSearchClick = () => {
    setSearched(search)
  }

  console.log('Workers Data')
  console.log(workersData)
  console.log('Pagination Data')
  console.log(paginationData)
  console.log('Current Page');
  console.log(currentPage);
  return (
    <div className='w-full h-auto bg-[#F6F7F8] flex flex-col justify-center items-center'>
      <div className='w-full h-auto bg-[#5E50A1] flex justify-center'>
        <div className='container w-[1140px] h-auto flex justify-start'>
          <h2 className='text-white text-[28px] font-bold py-2'>Top Jobs</h2>
        </div>
      </div>
      <div className='w-[1140px] h-auto my-28'>
        <Searchbar value={search} handleChange={handleSearchChange} onClick={handleSearchClick} />
      </div>
      <div className='w-[1140px] h-auto mb-28'>
          {loading===true ? (<h1 className='font-extrabold text-5xl text-center'>LOADING....</h1>) : workersData.map((value, index)=>(<CardHome key={index} workersData={value} />))  }
      </div>
      <div className='w-[1140px] h-auto mb-20'>
        {/* {loading===false && (<PaginationButtons pageCount={paginationData.totalPage} />)} */}
        {isSearching ? (
          <PaginationButtons pageCount={paginationData.totalPage} currentPage={currentPage} setCurrentPage={setCurrentPageSearch} />
        ) : (
          <PaginationButtons pageCount={paginationData.totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        )}
        
        
      </div>
    </div>
  )
}

export default Home