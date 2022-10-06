import React, { useState } from 'react'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroImg,
} from 'src/styles/Hero.styles'
import Video from 'src/assets/videos/video.mp4'
import ABC from 'src/assets/images/DashboardLogoWhiteTxt.png'

const HomeHero = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroImg src={ABC} alt="brand" />
        <HeroP>Be an Atanasoff-Berry Bear.</HeroP>
        {/* <HeroBtnWrapper>
          <Button
            to="register"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Apply Now! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper> */}
      </HeroContent>
    </HeroContainer>
  )
}

export default HomeHero
