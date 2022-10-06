import React from 'react'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLogo,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from 'src/styles/Footer.styles'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { GrMail } from 'react-icons/gr'
import { MdLocationPin } from 'react-icons/md'
import footerlogo from '../assets/images/footerlogo.png'

const AppFooter = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLogo src={footerlogo} alt="logo" />
            <FooterLinkItems>
              <FooterLinkTitle>POPULAR LINKS</FooterLinkTitle>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Admission Result</FooterLink>
              <FooterLink>News</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>ACADEMICS</FooterLinkTitle>
              <FooterLink>Courses Offered</FooterLink>
              <FooterLink>Admissions</FooterLink>
              <FooterLink>Enrollment</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>MODULES</FooterLinkTitle>
              <FooterLink>Student Portal</FooterLink>
              <FooterLink>Faculty Portal</FooterLink>
              <FooterLink>Parent Portal</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>CONTACT US</FooterLinkTitle>
              <FooterLink>
                <FaPhoneAlt />
                &nbsp;+63 945 416 5812
              </FooterLink>
              <FooterLink>
                <GrMail />
                &nbsp;admin@abc.edu.ph
              </FooterLink>
              <FooterLink>
                <MdLocationPin />
                &nbsp;ABC UNIVERSITY
                <br />
                &nbsp;&nbsp;&nbsp;3 Humabon Place,
                <br />
                &nbsp;&nbsp;&nbsp;Makati City 1232 PH
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>
              {' '}
              ABC Univesity © {new Date().getFullYear()}
              &nbsp;All Rights Reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Gmail">
                <SiGmail />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default React.memo(AppFooter)
