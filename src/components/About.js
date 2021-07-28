import React from 'react'
import styled from 'styled-components';
import { below } from '../assets/utils';
import TopButton from '../assets/elements/TopButton';

const About = () => {
  return (
      <div id="about" className="about">
        <Wrapper>
          <h3>ABOUT</h3>
          <p>
            Determined and productive motion creator & designer with passion for creative art. I’m interested to learn additional skills,
            tecnics and technologies. My goal is to work with others industry leaders in a friendly environment allowing me to expand on my existing skill set.
          </p>
          <TopButton />
        </Wrapper>
      </div>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: solid yellow .5px;

  h3{
    font-size: 2rem;
    color: white;
    margin-left: 2rem;
  }
  p{
    width: 90%;
    font-size: 1rem;
    color: white;
    margin-left: 2.5rem;
  }
  span{
    color: white;
    cursor: pointer;
  }
  span{
    color: white;
    cursor: pointer;
  }

  ${below.md`
    

    p{
      width:90%;
      margin-left: .5rem;
    }  
  `};
`;

export default About
