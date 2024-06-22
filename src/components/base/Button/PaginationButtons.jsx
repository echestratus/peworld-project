import React from 'react'
import ReactPaginate from 'react-paginate'

const PaginationButtons = ({ pageCount, setCurrentPage, currentPage }) => {
    const handlePageClick = ({selected}) => {
        setCurrentPage(selected)
    }
    const showNextPage = currentPage !== pageCount-1
    const showPrevPage = currentPage !== 0
    return (
        <div>
            <ReactPaginate
                // breakLabel={
                //     <span className='text-[#9EA0A5]'>....</span>
                // }
                nextLabel={
                    showNextPage && (<span className='w-[58px] h-[58px] border border-solid border-[#E2E5ED] flex items-center justify-center bg-white rounded-md hover:bg-[#5E50A1] hover:text-white hover:cursor-pointer phone:max-tablet:w-[25px] phone:max-tablet:h-[25px]'>
                    <img src="/src/assets/Main/arrow-right.svg" alt="arrow-right" className='w-[11.75px] h-[20px]' />
                </span>)
                    
                }
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={
                    showPrevPage && (<span className='w-[58px] h-[58px] border border-solid border-[#E2E5ED] flex items-center justify-center bg-white rounded-md hover:bg-[#5E50A1] hover:text-white hover:cursor-pointer phone:max-tablet:w-[25px] phone:max-tablet:h-[25px]'>
                    <img src="/src/assets/Main/arrow-left.svg" alt="arrow-left" className='w-[11.75px] h-[20px]' />
                </span>)
                    
                }
                containerClassName="flex justify-center items-center gap-4 list-none phone:max-tablet:gap-2 phone:max-tablet:w-full phone:max-tablet:mx-0 phone:max-tablet:px-0"
                pageClassName="w-[58px] h-[58px] flex justify-center items-center border border-solid border-[#E2E5ED] rounded-md bg-white text-[18px] font-[700] text-[#9EA0A5] hover:bg-[#5E50A1] hover:text-white hover:cursor-pointer phone:max-tablet:text-[10px] phone:max-tablet:w-[25px] phone:max-tablet:h-[25px]"
                activeClassName="reactPaginateActive"
            />
        </div>
    )
}

export default PaginationButtons