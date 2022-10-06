import React from "react";
import {
  NewsContainer,
  NewsH1,
  NewsWrapper,
  NewsCard,
  NewsIcon,
  NewsH2,
  NewsP,
} from "../styles/News.styled";
import Icon1 from "../../assets/images/icon-1.webp";
import Icon2 from "../../assets/images/icon-2.jfif";
import Icon3 from "../../assets/images/icon-3.jpg";

const News = () => {
  return (
    <>
      <NewsContainer id="news">
        <NewsH1>Latest ABC News</NewsH1>
        <NewsWrapper>
          <NewsCard>
            <NewsIcon src={Icon1} alt="Icon-1" />
            <NewsH2>News 1</NewsH2>
            <NewsP>Blah...blah...blah...</NewsP>
          </NewsCard>
          <NewsCard>
            <NewsIcon src={Icon2} alt="Icon-2" />
            <NewsH2>News 2</NewsH2>
            <NewsP>Blah...blah...blah...</NewsP>
          </NewsCard>
          <NewsCard>
            <NewsIcon src={Icon3} alt="Icon-3" />
            <NewsH2>News 3</NewsH2>
            <NewsP>Blah...blah...blah...</NewsP>
          </NewsCard>
        </NewsWrapper>
      </NewsContainer>
    </>
  );
};

export default News;
