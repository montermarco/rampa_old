import React from 'react';
import styled from 'styled-components';

const Graphic = () => {
  return (
    <Wrapper>
      <p>Graphic</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: solid red .5px;
  margin: 0 auto;
  width: 90%;

  p{
    font-size: 2rem;
    color: red;
    margin-left: 2rem;
  }
`;

export default Graphic;