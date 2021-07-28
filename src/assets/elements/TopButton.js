import React from 'react';
import styled from 'styled-components';
const Scroll = require('react-scroll');
const scroll = Scroll.animateScroll;
import {ArrowUpCircle} from '@styled-icons/feather/ArrowUpCircle'

const TopButton = () => {

  const goToTop = () => {
    scroll.scrollToTop({
      duration: 1500,
      smooth: 'easeInOutQuint',
    });
  };

  return (
    <Wrap>
      <Button size="40" onClick={goToTop}/>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
`;

const Button = styled(ArrowUpCircle)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  background-color: red;
`;

export default TopButton
