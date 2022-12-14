import React from 'react'
import LandingHeader from 'src/components/header/LandingHeader'
import Hero from 'src/components/hero/LandingHero'
import Info from 'src/components/info-section/Info'
import Programs from 'src/components/info-section/Programs'
import NewsCarousel from 'src/components/info-section/NewsCarousel'
import Footer from 'src/components/AppFooter'
import { homeData1, homeData2, homeData3 } from 'src/components/info-section/Data'
import { landingData } from 'src/components/header/LandingMenuItems'

import styled from 'styled-components'

const Landing = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Encode Sans Expanded', sans-serif;
`
const LandingPage = () => {
  return (
    <>
      <Landing>
        <LandingHeader {...landingData} />
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
