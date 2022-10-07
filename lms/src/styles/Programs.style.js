import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`

export const Section = styled.section`
  padding: 24px 60px;
  margin: ${({ margin }) => (margin ? margin : '')};
  background: ${({ inverse }) => (inverse ? 'white' : '#071c2f')};
  position: ${({ position }) => (position ? position : '')};
  width: ${({ width }) => (width ? width : 'auto')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
  height: 100%;
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};

  @media screen and (max-width: 768px) {
    padding: ${({ smPadding }) => (smPadding ? smPadding : '70px 0')};
    align-items: center;
  }
`

export const FeatureTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 2.8rem);
  line-height: 1.06;
  letter-spacing: 0.4rem;
  margin: auto;
  color: #022135;
`
export const FeatureSubtitle = styled.h5`
  text-align: center;
  line-height: 2;
`

export const FeatureTextWrapper = styled.div`
  position: relative;
  margin-bottom: -2rem;
`

export const FeatureWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 3rem;
  margin: 40px;
  grid-gap: 2rem;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3rem;
  }

  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 25px;
  }

  @media screen and (max-width: 412px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    margin-top: 40px;
    margin-right: 16px;
  }

  @media screen and (max-width: 280px) {
    grid-template-columns: repeat(1, 1fr);
    padding-left: 16px;
    margin: -60px;
    margin-top: 35px;
  }
`

export const FeatureColumn = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 10px;
  box-shadow: 0 0 32px 8px #d0d0d0;
  border-radius: 10px;
`

export const FeatureImageWrapper = styled.div`
  margin-bottom: 1rem;
  border-radius: 50%;
  // border: 2px solid #000;
  // padding: 30px;
`

export const FeatureImg = styled.img`
  width: 250px;
`
export const FeatureName = styled.h3`
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 2px;
  text-align: center;
  color: #022135;

  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`

export const FeatureLink = styled(Link)`
  text-decoration: none;
`

export const FeatureText = styled.p`
  margin: 1rem 0 auto;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.73;
  letter-spacing: 0.5px;
  color: #626881;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
