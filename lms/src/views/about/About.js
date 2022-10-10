import React from 'react'
import { Btn } from 'src/styles/Btn.styles.'

const About = () => {
  return (
    <div>
      <Btn>Primary button</Btn>
      <Btn big="true">Big Padding button</Btn>
      <Btn fontBig="true">Big Font button</Btn>
      <Btn primary="false">Secondary button</Btn>
    </div>
  )
}

export default About
