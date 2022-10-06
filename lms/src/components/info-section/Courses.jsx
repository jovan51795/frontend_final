import React from "react";
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
  FeatureName,
  FeatureTextWrapper,
} from "../styles/Courses.styled";

import { coursesData } from "./CoursesData";

const Courses = () => {
  const initial = {
    y: 40,
    opacity: 0,
  };
  const animate = {
    y: 0,
    opacity: 1,
  };

  return (
    <Section smPadding="50px 10px" position="relative" inverse id="programs">
      <Container>
        <FeatureTextWrapper>
          <FeatureTitle>College Programs</FeatureTitle>
          <FeatureSubtitle>
            Be life-ready with the necessary skills and knowledge to be an
            in-demand professional.
          </FeatureSubtitle>
        </FeatureTextWrapper>
        <FeatureWrapper>
          {coursesData.map((el, index) => (
            <FeatureColumn
              initial={initial}
              animate={animate}
              transition={{ duration: 0.5 + index * 0.1 }}
              key={index}
            >
              <FeatureImageWrapper>
                <FeatureImg src={el.img} alt={el.alt} />
              </FeatureImageWrapper>
              <FeatureName>{el.name}</FeatureName>
              <FeatureText>{el.description}</FeatureText>
            </FeatureColumn>
          ))}
        </FeatureWrapper>
      </Container>
    </Section>
  );
};

export default Courses;
