import React, { useState } from 'react'
import LandingHeader from 'src/components/header/LandingHeader'
import Hero from 'src/components/hero/LandingHero'
import Info from 'src/components/info-section/Info'
import Programs from 'src/components/info-section/Programs'
import NewsCarousel from 'src/components/info-section/NewsCarousel'
import Footer from 'src/components/AppFooter'
import { homeData1, homeData2, homeData3 } from 'src/components/info-section/Data'

import styled from 'styled-components'
import Sidebar from 'src/components/sidebar/Sidebar'

const Landing = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Encode Sans Expanded', sans-serif;
`
const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Landing>
        <LandingHeader toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Hero />
        <Info {...homeData1} />
        <Info {...homeData2} />
        <Programs />
        <Info {...homeData3} />
        <NewsCarousel />
        <Footer />
      </Landing>
    </>
  )
}

export default LandingPage
