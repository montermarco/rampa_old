import React from 'react';
import styled from 'styled-components';
import Motion from './work/Motion';
import Graphic from './work/Graphic';
import Generative from './work/Generative';
import Collaborations from './work/Collaborations';
import TopButton from '../assets/elements/TopButton';

const Work = () => {
  return (
    <Wrapper id="work">
      <Motion/>
      <Graphic/>
      <Generative/>
      <Collaborations/>
      <TopButton />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  border: solid white .5px;
  padding: 1rem;
`;

export default Work
