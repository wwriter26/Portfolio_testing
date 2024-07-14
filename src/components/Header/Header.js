import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';
import { me } from '../../constants/constants';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Img2 } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
          <DiCode size="5rem"/> <Span>My Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>  
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li> 
      <li>  
        <Link href="#experience">
          <NavLink>Experience</NavLink>
        </Link>
      </li> 
      <li>  
        <Link href="#technologies">
          <NavLink>Technologies</NavLink>
        </Link>
      </li> 
      <li>  
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li> 
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/wwriter26">
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/william-writer/">
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
      {me.map((profile) => (
        <Img2 src={profile.image} alt="profile picture" />
      ))}
    </Div3>
  </Container>
);

export default Header;
