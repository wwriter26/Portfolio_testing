import React from 'react'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './WorkExperienceStyles';

import { Experience } from '../../constants/constants';
const WorkExperience = () => (
  <Section id="experience">
    <SectionDivider />
    <SectionTitle main>Work Experience</SectionTitle>
    <GridContainer>
      {Experience.map(({ id, image, title, description, source}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>
              {title}
            </HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
          <UtilityList>
            <ExternalLinks href={source}>Website</ExternalLinks>
          </UtilityList>
        </BlogCard>

      ))}
    </GridContainer>
  </Section>
);


export default WorkExperience