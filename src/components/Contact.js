import React from 'react';
import styled from 'styled-components';
import TopButton from '../assets/elements/TopButton';

const Contact = () => {
    
  return (
    <Wrapper id="contact">
      <p>Get in touch</p>
      <TopButton />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;  
  height: 100vh;
  border: solid white .5px;

  p{
    font-size: 2rem;
    color: black;
    margin-left: 2rem;
  }
  span{
    color: white;
    cursor: pointer;
  }
`;

export default Contact
