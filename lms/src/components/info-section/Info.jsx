import React from 'react'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from 'src/styles/Info.styles'
import { Button } from 'src/styles/Button.styles'
import PropTypes from 'prop-types'

const Info = ({
  id,
  lightBg,
  imgStart,
  topLine,
  lightText,
  darkText,
  bigText,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText} bigText={bigText}>
                  <i> {headLine} </i>
                </Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="/register"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-60}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

Info.propTypes = {
  id: PropTypes.string,
  lightBg: PropTypes.bool,
  imgStart: PropTypes.bool,
  topLine: PropTypes.string,
  lightText: PropTypes.bool,
  darkText: PropTypes.bool,
  bigText: PropTypes.bool,
  headLine: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  img: PropTypes.any,
  alt: PropTypes.string,
  primary: PropTypes.bool,
  dark: PropTypes.bool,
  dark2: PropTypes.bool,
}

export default Info
