import React from "react"
import { btnMobile, logo } from "../../assets/images"
import HomeHeader from "../../components/HomeHeader"

const Home = () => {
  return (
    <>
      <HomeHeader btnMobile={btnMobile} logo={logo} />
    </>
  )
}

export default Home
