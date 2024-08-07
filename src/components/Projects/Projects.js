import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { AllProjects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {AllProjects.map(({ id, image, title, description, tags, source, visit}) => (
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
          <div>
            <br/>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag,i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Website</ExternalLinks>
          </UtilityList>
        </BlogCard>

      ))}
    </GridContainer>
    <br/>
  </Section>
);

export default Projects;