import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { v, b } from 'src/assets/styles/variables'

export const NavHead = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#f9f9f9' : 'transparent')};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 16px;
  max-width: 1300px;
`

export const NavLogo = styled.img`
  width: 175px;
  height: 55px;
  justify-self: flex-start;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 16px;
  cursor: pointer;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -20px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #0d181b;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 95px;
  margin-top: 10px;

  @media screen and (max-width: 1250px) {
    margin-right: 290px;
  }

  @media screen and (max-width: 768px) {
    margin-right: 80px;
    display: none;
  }
`

export const NavItem = styled.li`
  height: 45px;
  float: left;
  padding: 0px !important;
  width: 150px;
  margin-top: 15px;

  @media screen and (max-width: 1250px) {
    width: 93px;
  }
`

export const NavLinks = styled(LinkScroll)`
  color: #022135;
  display: flex;
  // align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #022135;
  }
`

export const NavDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #022135;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`

export const DrpdownLink = styled(LinkRouter)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
`

export const DropDownContainer = styled('div')`
  width: 12.5em;
  margin: 0 auto;
  margin-top: -15px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const DropDownContainer2 = styled('div')`
  width: 130px;
  margin: 0 auto;
  height: 45px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const DropDownHeader = styled('div')`
  margin-bottom: 0.8em;
  padding: 0.4em 1em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1rem;
  color: #022135;
  background: #ffffff;
`

export const DropDownListContainer = styled('div')`
  width: 165px;
  margin-left: 32px;
`

export const DropDownListContainer2 = styled('div')`
  width: 375px;
  margin-left: 15px;
`

export const DropDownList = styled('ul')`
  padding-left: 0rem !important;
  padding-inline-start: 15px !important;
  margin: 0;
  background: #f9f9f9;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #022135;
  font-size: 1rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`

export const ListItem = styled('li')`
  list-style: none;
  margin-bottom: 0.8em;

  &:hover {
    padding: 0.2em 0.5em 0.2em 0.5em;
    background-color: #f5f5f5;
  }
`

export const SCTAButton = styled.button`
  background: #022135;
  color: #fff;
  margin-top: 10px;
  margin-left: 30px;
  padding: 5px 10px;
  border-radius: ${v.borderRadius};
  display: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #044e7f;
    color: #fff;
  }

  &:hover ${DropDownList} {
    display: block;
  }

  @media ${b.md} {
    display: initial;
  }
`
