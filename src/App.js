import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import GlobalStyle from './assets/GlobalStyle';

export default function App() {
  
  return (
    <>
      <Navbar/>
      <Home />
      <Work />
      <About />
      <Contact />
      <GlobalStyle />
    </>
  )
}
