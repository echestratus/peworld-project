import axios from "axios"

export const getWorkerHomeAction = (searched, setIsSearching, page, currentPageSearch, sort, sortBy, setWorkersData, setPaginationData) => (dispatch) => {
    dispatch({
        type: "GET_WORKERS_HOME_REQUEST"
    })
    if(searched){
        setIsSearching(true)
        page = currentPageSearch + 1
        axios.get(`${import.meta.env.VITE_BE_URL}/workers/?limit=4&page=${page}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          params: {
            search: searched,
            sort: sort,
            sortBy: sortBy
          }
        })
          .then((res) => {
            console.log('show res')
            console.log(res)
            dispatch({
                type: "GET_WORKERS_HOME_SUCCEED",
                payload: res.data.data
            })
            setWorkersData(res.data.data)
            setPaginationData(res.data.pagination)
          })
          .catch((err) => {
            console.log(err);
            dispatch({
                type: "GET_WORKERS_HOME_FAILED",
                payload: err.response
            })
            alert(`Can't fetch data`)
          })
      } else {
        setIsSearching(false)
        axios.get(`${import.meta.env.VITE_BE_URL}/workers/?limit=4&page=${page}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          params: {
            sort: sort,
            sortBy: sortBy
          }
        })
          .then((res) => {
            console.log('show res')
            console.log(res)
            dispatch({
                type: "GET_WORKERS_HOME_SUCCEED",
                payload: res.data.data
            })
            setWorkersData(res.data.data)
            setPaginationData(res.data.pagination)
          })
          .catch((err) => {
            console.log(err);
            dispatch({
                type: "GET_WORKERS_HOME_FAILED",
                payload: err.response
            })
            alert(`Can't fetch data`)
          })
      }
    
}