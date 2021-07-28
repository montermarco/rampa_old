import React from 'react';
import styled from 'styled-components';

const Generative = () => {
  return (
    <Wrapper>
      <p>Generative</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  border: solid red .5px;

  p{
    font-size: 2rem;
    color: red;
    margin-left: 2rem;
  }
`;

export default Generative;