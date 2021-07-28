import React from 'react'
import styled from 'styled-components';
import { absolute, setFlex } from '../assets/utils';
import Header from './layout/Header';

const Home = () => {
  return (
    <Container>
      <Header/>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  ${setFlex()};
  
  .circle{
    width: 25rem;
    height: 25rem;
    border: .3px solid gray;
    border-radius: 50%;
    position: relative;

    .innercircle{
      position: relative;      

      p{
        text-align: center;
        color: gray;
        font-size: .7rem;
      }
    }

    .center{
      ${absolute({x:"45%",y:"-10%"})};

    }
    .left{
      ${absolute({x:"103%",y:"45%"})};      
    }
    .right{
      ${absolute({x:"-10%",y:"45%"})};      
    }
  }
  
`;

export default Home
