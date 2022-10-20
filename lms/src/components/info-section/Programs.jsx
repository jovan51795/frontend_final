import React, { useEffect, useState } from 'react'
import {
  Container,
  Section,
  FeatureText,
  FeatureTitle,
  FeatureSubtitle,
  FeatureWrapper,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureImg,
  FeatureLink,
  FeatureName,
  FeatureTextWrapper,
} from 'src/styles/Programs.style'

// import { programsData } from './ProgramsData'
import { getAll } from '../../services/departmentService'
import { useDispatch, useSelector } from 'react-redux'

const Programs = () => {
  const dispatch = useDispatch()
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    getAllDepatment()
  }, [])

  const getAllDepatment = () => {
    getAll().then((res) => {
      if (res.data && res.data.status === 1) {
        setDepartments(res.data.object)
      }
    })
  }

  useSelector((state) => {
    if (state.department.status === 1) {
      getAllDepatment()
    }
  })

  const initial = {
    y: 40,
    opacity: 0,
  }
  const animate = {
    y: 0,
    opacity: 1,
  }

  return (
    <Section smPadding="50px 10px" position="relative" inverse id="programs">
      <Container>
        <FeatureTextWrapper>
          <FeatureTitle>College Programs</FeatureTitle>
          <FeatureSubtitle>
            Be life-ready with the necessary skills and knowledge to be an in-demand professional.
          </FeatureSubtitle>
        </FeatureTextWrapper>
        <FeatureWrapper>
          {departments.map((el, index) => (
            <FeatureColumn
              initial={initial}
              animate={animate}
              transition={{ duration: 0.5 + index * 0.1 }}
              key={el.departmentId}
            >
              <FeatureImageWrapper>
                <FeatureImg src={el.logo} alt={el.altlogo} />
              </FeatureImageWrapper>
              <FeatureLink to={el.link}>
                <FeatureName>{el.departmentName}</FeatureName>
              </FeatureLink>
              
              {/* <FeatureText>{el.description}</FeatureText> */}
            </FeatureColumn>
          ))}
        </FeatureWrapper>
      </Container>
    </Section>
  )
}

export default Programs
