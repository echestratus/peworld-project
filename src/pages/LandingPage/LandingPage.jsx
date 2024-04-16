import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavbarLandingPage from '../../components/modules/Navbar/NavbarLandingPage'
import Footer from '../../components/modules/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import styles from './LandingPage.module.css'

const LandingPage = () => {
  const [myDetail, setMyDetail] = useState({})
  const [role, setRole] = useState({})
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    const urls = [
      `${import.meta.env.VITE_BE_URL}/workers/profile`,
      `${import.meta.env.VITE_BE_URL}/auth/check-role`
    ]
    const requests = urls.map((url) => axios.get(url, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }))
    Promise.all(requests)
      .then(axios.spread((...res) => {
        setLoading(false)
        console.log('Show res');
        console.log(res);
        console.log('Show res.data.data');
        console.log(res[0].data.data);
        setMyDetail(res[0].data.data)
        console.log(res[1].data.data.data);
        setRole(res[1].data.data.data)
      }))
      .catch((err) => {
        setLoading(false)
        console.log(err.response);
      })
  }, [])
  const handleClickProfile = () =>{
    navigate(`/main/myprofile/${myDetail.id}/portofolio/${myDetail.id}`)
  }
  return (
    <div className='font-peworld'>
      {loading === true ? (
        <h1 className='font-extrabold text-5xl text-center'>LOADING....</h1>
      ) : (
        <>
          <NavbarLandingPage role={role.role} handleClick={handleClickProfile} />
          <div className={styles.body}>
            <main className={styles.main}>
              <div className={styles.desc1}>
                <div className={styles.startNowContainer}>
                  <div className={styles.startNow}>
                    <p className={styles.title}>The best nation's talent for revolution 4.0 change</p>
                    <p className={styles.p}>We are the best broker IT talent in this country, so what are you waiting for. Join us now.
                    </p>
                    <div className={styles.buttonMulaiSekarangContainer}>
                      <button className={styles.buttonMulaiSekarang} type="submit">Start From Now</button>
                    </div>
                  </div>
                </div>
                <div className={styles.imgPc}>
                  <img className={styles.imgComputer} src="/src/assets/LandingPage/img-pc.png" alt="User using computer" />
                </div>
              </div>
              <div className={styles.desc2}>
                <div className={styles.imgLaptop}>
                  <div className={styles.userLaptopContainer}>
                    <img className={styles.userLaptop} src="/src/assets/LandingPage/img-laptop.png" alt="User using laptop" />
                  </div>

                </div>
                <div className={styles.ulList}>
                  <p className={styles.title2}>Why should you find the talent</p>
                  <p className={styles.title2}>at peworld</p>
                  <ul className={styles.ul}>
                    <li className={styles.li}>Verificated talent.</li>
                    <li className={styles.li}>Equipped with great soft skills.</li>
                    <li className={styles.li}>Experienced in handling complex projects.</li>
                    <li className={styles.li}>Provide transparency between recruiters and talents.</li>
                  </ul>
                </div>
              </div>
              <div className={styles.desc3}>
                <div className={styles.skillsContainer}>
                  <div className={styles.skills}>
                    <p className={styles.title2}>Skill Talent</p>
                    <p className={styles.p}>Skills that is needed in the 21th century industry, we provide skills that match to your liking.
                    </p>
                    <div className={styles.skillList}>
                      <div className={styles.javaJavaScript}>
                        <ul className={styles.ul}>
                          <li className={styles.li}>Java</li>
                          <li className={styles.li}>Kotlin</li>
                          <li className={styles.li}>PHP</li>
                          <li className={styles.li}>JavaScript</li>
                        </ul>
                      </div>
                      <div className={styles.golangRuby}>
                        <ul className={styles.ul}>
                          <li className={styles.li}>Golang</li>
                          <li className={styles.li}>C++</li>
                          <li className={styles.li}>Ruby</li>
                          <li className={styles.li}>10+ another hardskills</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.imgDesktop}>
                  <img className={styles.img} src="/src/assets/LandingPage/img-desktop.png" alt="Officer working on something" />
                </div>
              </div>
              <div className={styles.desc4}>
                <div className={styles.opinion}>
                  <p className={styles.titleTheirOpinion}>Their opinion about peworld</p>
                </div>
                <div className={styles.peopleOpinion}>
                  <div className={styles.harry}>
                    <div className={styles.photo}>
                      <img className={styles.imgHarry} src="/src/assets/LandingPage/harry.png" alt="harry image" />
                    </div>
                    <p className={styles.name}>Harry Styles</p>
                    <p className={styles.expertise}>Web Developer</p>
                    <p className={styles.info}>I completed many projects successfully when registered at peworld.</p>
                    <img className={styles.circle} src="/src/assets/LandingPage/circle.svg" alt="circle" />
                    <img className={styles.arrowLeft} src="/src/assets/LandingPage/arrowLeft.svg" alt="arrow left" />
                  </div>
                  <div className={styles.niall}>
                    <div className={styles.photo}>
                      <img className={styles.imgPerson} src="/src/assets/LandingPage/niall.png" alt="harry image" />
                    </div>
                    <p className={styles.name}>Niall Horan</p>
                    <p className={styles.expertise}>Web Developer</p>
                    <p className={styles.info}>Many recruiters reach me out and i'm trying my best to not let them down.</p>
                  </div>
                  <div className={styles.louis}>
                    <div className={styles.photo}>
                      <img className={styles.imgPerson} src="/src/assets/LandingPage/louis.png" alt="harry image" />
                    </div>
                    <p className={styles.name}>Louis Tomlinson</p>
                    <p className={styles.expertise}>Web Developer</p>
                    <p className={styles.info}>I guess this is it, I got a lot of jobs when registered at peworld</p>
                    <img className={styles.circleRight} src="/src/assets/LandingPage/circle.svg" alt="circle" />
                    <img className={styles.arrowRight} src="/src/assets/LandingPage/arrow-right.svg" alt="arrow right" />
                  </div>
                </div>
              </div>
              <div className={styles.desc5}>
                <div className={styles.rect}>
                  <img className={styles.wave} src="/src/assets/LandingPage/wave.svg" alt="wave" />
                  <div className={styles.rectContent}>
                    <p className={styles.p}>Join us now talents and recruiters</p>
                    <button className={styles.buttonWhite} type="submit">Start From Now</button>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <Footer />
        </>
      )}

    </div>
  )
}

export default LandingPage