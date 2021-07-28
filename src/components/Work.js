import React from 'react';
import styled from 'styled-components';
import Motion from './work/Motion';
import Graphic from './work/Graphic';
import Generative from './work/Generative';
import TopButton from '../assets/elements/TopButton';

const Work = () => {
  return (
    <Wrapper id="work">
      <h3>WORK</h3>
      <Graphic/>
      <Motion/>
      <Generative/>
      <TopButton />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: solid white .5px;
  padding: 1rem;

  h3{
    font-size: 2rem;
    color: white;
    margin-left: 2rem;
  }
  span{
    color: white;
    cursor: pointer;
  }
`;

export default Work
