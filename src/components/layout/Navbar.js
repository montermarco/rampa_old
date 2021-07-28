import React from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid'
import { Link } from "react-scroll";
import {absolute} from '../../assets/utils';

const Navbar = () => {

  const navCats = [
    { 
      id: 1,
      name:"work",},
    { 
      id: 2,
      name:"about",},
    { 
      id: 3,
      name:"contact"}
  ];

  return (
    <Nav>
      <ul>
        {navCats.map( e => (
          <li key={uuid()}>
            <Link
              to={e.name} 
              spy={true} 
              smooth={true} 
              offset={0} 
              duration={800}
            ><span>{e.name}</span></Link>
          </li>
        ))}
      </ul>
    </Nav>
  )
};

const Nav = styled.ul`  
  width: 20%;
  margin: 0;
  ${absolute({x:"0rem", yP:"bottom"})};
  margin-bottom: 1rem;

  ul{
    width: 100%;
    padding: 0;
    margin: 0;
    color: black;

    li{
     margin: 0 auto;
     list-style-type: none;
     font-size: 1rem;     

     span{
       border-bottom: solid black .1px;
       cursor: pointer;
     }
    }
  }
  
`;

export default Navbar;