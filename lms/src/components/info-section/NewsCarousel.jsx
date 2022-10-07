import React, { useState } from 'react'
import {
  ButtonContainer,
  ReviewSlider,
  ImageWrapper,
  CarouselImage,
  CardButton,
} from 'src/styles/Carousel.styles'
import { Row, Heading, Section, TextWrapper } from 'src/styles/Global.styles'
import { data, sliderSettings } from './NewsCarouselData'
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io'
import { IconContext } from 'react-icons'

const NewsCarousel = () => {
  const [sliderRef, setSliderRef] = useState(null)

  return (
    <Section id="news" margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
      <Row justify="space-between" margin="1rem" wrap="wrap">
        <Heading width="auto" inverse>
          Latest ABC News
        </Heading>
        <ButtonContainer>
          <IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
            <IoMdArrowDropleftCircle onClick={sliderRef?.slickPrev} />
            <IoMdArrowDroprightCircle onClick={sliderRef?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
      </Row>

      <ReviewSlider {...sliderSettings} ref={setSliderRef}>
        {data.map((el, index) => (
          <ImageWrapper key={index}>
            <CarouselImage src={el.image} />
            <TextWrapper
              style={{
                size: '1rem',
                margin: '0.4rem 0 0',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              {el.title}
            </TextWrapper>
            <TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
              {el.description}
            </TextWrapper>
            <CardButton>Learn More</CardButton>
          </ImageWrapper>
        ))}
      </ReviewSlider>
    </Section>
  )
}

export default NewsCarousel
