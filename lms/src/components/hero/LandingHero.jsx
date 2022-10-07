import React from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroP, HeroImg } from 'src/styles/Hero.styles'
import Video from 'src/assets/videos/video.mp4'
import ABC from 'src/assets/images/DashboardLogoWhiteTxt.png'

const LandingHero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroImg src={ABC} alt="brand" />
        <HeroP>Be an Atanasoff-Berry Bear.</HeroP>
      </HeroContent>
    </HeroContainer>
  )
}

export default LandingHero
