import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Btn = styled(LinkRouter)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#2C8263' : '#022135')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 20px' : '5px 10px')};
  color: ${({ dark }) => (dark ? '#022135' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  text-decoration: none;
  border: none;
  cursor: pointer;
  margin: 30px 20px;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#3fbb8f' : '#044e7f')};
    color: #f9f9f9;
  }
`
