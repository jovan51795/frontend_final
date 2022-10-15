import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
  background-color: #022135;
  padding: 0px !important;
`
export const FooterWrap = styled.div`
  padding: 10px 26px;
  padding-right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`

export const FooterLinksWrapper = styled.div`
  display: flex;
  margin-top: 20px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;
  }
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 140px;
  box-sizing: border-box;
  color: #fff;

  @media (max-width: 780px) {
    align-items: center;
  }

  @media (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
    align-items: center;
  }
`

export const FooterLogo = styled.img`
  height: 225px;
  width: auto;
  margin-top: -20px;
  padding-right: 50px;
  padding-left: 50px;

  @media (max-width: 780px) {
    padding: 0px;
  }

  @media (max-width: 420px) {
    padding: 0px;
  }
`

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
  color: #dcdcdc !important;
  margin-bottom: 0.5rem;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: #2c9971 !important;
    transition: 0.3s ease-out;
  }
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 90%;
`
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 25px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`
export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -20px;
  width: 240px;
`
export const SocialIconLink = styled.a`
  color: #fff !important;
  font-size: 24px;
`
