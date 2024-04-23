import axios from "axios"

export const addPortfolioAction = (portofolio, setPortofolio, getMyData) => (dispatch) => {
    dispatch({
        type: "ADD_PORTFOLIO_REQUEST"
    })
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
            dispatch({
                type: "ADD_PORTFOLIO_SUCCEED"
            })
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
            dispatch({
                type: "ADD_PORTFOLIO_FAILED",
                payload: err.response
            })
            alert('Adding portofolio failed')
        })
}