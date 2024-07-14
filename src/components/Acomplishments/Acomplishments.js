import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { data } from '../../constants/constants';

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>
            {card.number}
            {/* <Img2 src={card.image}></Img2> */}
          </BoxNum>

          <BoxText>{card.text}</BoxText>
          {/* <img src={card.image} style={{width: '45px'}}/> */}
          
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
