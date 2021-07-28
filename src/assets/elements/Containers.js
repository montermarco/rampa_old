import styled from 'styled-components';
import {below} from '../utils';


export const HeaderContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin: 0 auto;
  text-align: center;

  h1{
    margin-top: 1rem;
    font-size: 2rem;
    color: black;
    letter-spacing: .6rem;
  }

  h2{
    font-size: 4rem;
    letter-spacing: 1rem;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: black;
  }

  ${below.md`
    margin-top: -3rem;
    
    h1{
      margin-top: 1rem;
      font-size: 1rem;
      color: black;
      letter-spacing: .3rem;
    }

    h2{
      font-size: 2rem;
      letter-spacing: .5rem;
    }
  `};
`;