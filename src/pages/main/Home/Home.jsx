import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Searchbar from '../../../components/base/Searchbar/Searchbar'
import CardHome from '../../../components/modules/Card/CardHome'
import PaginationButtons from '../../../components/base/Button/PaginationButtons'
import { useDispatch, useSelector } from 'react-redux'
import { getWorkerHomeAction } from '../../../config/redux/action/getWorkerHomeAction'

const Home = () => {
  const [workersData, setWorkersData] = useState([])

  const [paginationData, setPaginationData] = useState({
    currentPage: 0,
    limit: 0,
    totalData: 0,
    totalPage: 0
  })

  const {loading} = useSelector((state)=>state.getWorkerHome)
  const [currentPage, setCurrentPage] = useState(0)
  const [currentPageSearch, setCurrentPageSearch] = useState(0)
  const [isSearching, setIsSearching] = useState(false)
  const [search, setSearch] = useState('')
  const [searched, setSearched] = useState('')
  const [sort, setSort] = useState('created_at')
  const [sortBy, setSortBy] = useState('ASC')
  const dispatch = useDispatch()
  useEffect(() => {
    let page = currentPage + 1
    dispatch(getWorkerHomeAction(searched, setIsSearching, page, currentPageSearch, sort, sortBy, setWorkersData, setPaginationData))
    
  }, [currentPage, searched, sort, sortBy])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }
  const handleSearchClick = () => {
    setSearched(search)
  }
  const handleSortChange = (e) =>{
    setSort(e.target.value)
  }
  const handleSortByChange = (e) => {
    setSortBy(e.target.value)
  }


  return (
    <div className='w-full h-auto bg-[#F6F7F8] flex flex-col justify-center items-center'>
      <div className='w-full h-auto bg-[#5E50A1] flex justify-center'>
        <div className='container w-[1140px] h-auto flex justify-start'>
          <h2 className='text-white text-[28px] font-bold py-2'>Top Jobs</h2>
        </div>
      </div>
      <div className='w-[1140px] h-auto my-28'>
        <Searchbar value={search} handleChange={handleSearchChange} onClick={handleSearchClick} handleSortChange={handleSortChange} handleSortByChange={handleSortByChange} />
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