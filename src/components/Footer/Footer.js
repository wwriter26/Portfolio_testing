import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone Number</LinkTitle>
          <LinkItem href="tel:720-651-0687">720-651-0687</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:wiwr3415@colorado.edu">wiwr3415@colorado.edu</LinkItem>
        </LinkColumn>
      </LinkList>    
      <SocialIconsContainer>
        <CompanyContainer>
           <Slogan>"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - Patrick McKenzie</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/wwriter26">
            <AiFillGithub size="3rem"></AiFillGithub>
            </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/william-writer/">
            <AiFillLinkedin size="3rem"></AiFillLinkedin>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
          
    </FooterWrapper>

  );
};

export default Footer;
