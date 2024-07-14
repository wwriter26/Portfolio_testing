import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Hello, My Name Is <br />
        William Writer
      </SectionTitle>
      <SectionText>
        I'm a software engineer driven by continuous
        growth and innovation. I am actively seeking a fresh opportunity to
        expand my knowledge, skills, and meet other like-minded people!
      </SectionText>
      <Button
        onClick={() =>
          window.open(
            "https://docs.google.com/document/d/1jNrYDmELu7TJzHSgvQOPzFZTQazUj3QvyUoGalLasG4/edit?usp=sharing",
            "_blank"
          )
        }
      >
        My Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
